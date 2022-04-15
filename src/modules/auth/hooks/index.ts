import { useContext, useEffect } from 'react'
import axios from 'lib/axios'
import { AuthContext } from '../contexts'

export function useAuth() {
  return useContext(AuthContext)
}

export const useRefreshToken = () => {
  const { state, dispatch } = useAuth()

  const refresh = async () => {
    const res = await axios.get('/auth/refresh')
    const { data } = res.data

    dispatch({ type: 'LOGIN', payload: { ...state, token: data.token } })

    return data.token
  }
  return refresh
}

export function useAPI() {
  const { state, dispatch } = useAuth()
  const refresh = useRefreshToken()

  useEffect(() => {
    const requestIntercept = axios.interceptors.request.use(
      (config) => {
        const token = state.isLoaded ? state.token : sessionStorage.getItem('token')
        if (!config.headers!['Authorization']) {
          config.headers!['Authorization'] = `Bearer ${token}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    const responseIntercept = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          return dispatch({ type: 'LOGOUT' })
          // prevRequest.sent = true
          // const newAccessToken = await refresh()
          // prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
          // return axios(prevRequest)
        }
        return Promise.reject(error)
      }
    )

    return () => {
      axios.interceptors.request.eject(requestIntercept)
      axios.interceptors.response.eject(responseIntercept)
    }
  }, [state, refresh])

  return axios
}
