import { useEffect, useReducer } from 'react'
import axios from 'lib/axios'
import { AuthAction, AuthContext, AuthState, initialState } from 'contexts/auth'

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      const { creds, token } = action.payload!

      sessionStorage.setItem('token', token!)

      return { ...state, creds, token, isLoaded: true, isAuthenticated: true }
    case 'LOGOUT':
      sessionStorage.removeItem('token')
      return { ...initialState, isLoaded: true, isAuthenticated: false }
    default:
      return state
  }
}

export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    const refresh = async (token: string) => {
      try {
        const res = await axios.get('/auth/verify', {
          headers: { Authorization: `Bearer ${token}` },
        })
        const { data } = res.data
        dispatch({ type: 'LOGIN', payload: { token, creds: data.creds } })
      } catch (error) {
        dispatch({ type: 'LOGOUT' })
      }
    }
    const token = sessionStorage.getItem('token')

    if (token) refresh(token!)
    else dispatch({ type: 'LOGOUT' })
  }, [])

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}
