import axios from 'lib/axios'
import { useAuth } from './useAuth'

const useRefreshToken = () => {
  const { state, dispatch } = useAuth()

  const refresh = async () => {
    const res = await axios.get('/auth/refresh')
    const { data } = res.data

    dispatch({ type: 'LOGIN', payload: { creds: state.creds!, token: data.token } })

    return data.token
  }
  return refresh
}

export default useRefreshToken
