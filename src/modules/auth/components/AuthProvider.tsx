import { useEffect, useReducer } from 'react'
import axios from 'lib/axios'
import { AuthAction, AuthContext, AuthState, initialState } from '../contexts'
import Cookies from 'js-cookie'

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      const { creds, token } = action.payload!

      Cookies.set('token', token)

      return { ...state, creds, token, isLoaded: true, isAuthenticated: true }
    case 'LOGOUT':
      Cookies.remove('token')
      return { ...initialState, isLoaded: true, isAuthenticated: false }
    default:
      return state
  }
}

type Props = {
  children: JSX.Element
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    const refresh = async (token: string) => {
      try {
        const res = await axios.get('/me', {
          headers: { Authorization: `bearer ${token}` },
        })
        dispatch({ type: 'LOGIN', payload: { token, creds: res.data } })
      } catch (error) {
        dispatch({ type: 'LOGOUT' })
      }
    }
    const token = Cookies.get('token')

    if (token) refresh(token!)
    else dispatch({ type: 'LOGOUT' })
  }, [])

  if (!state.isLoaded) return null

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}
