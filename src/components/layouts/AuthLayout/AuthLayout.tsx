import { useAuth } from 'hooks'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthLayout: React.FC = ({ children }) => {
  const { state } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (state.isAuthenticated) return navigate('/')
  }, [state])

  if (state.isAuthenticated) return null

  return (
    <div className="w-full h-screen lg:grid grid-cols-2">
      <div className="bg-white h-screen w-full flex items-center justify-center">{children}</div>
      <div className="bg-gray-700 h-screen w-full hidden lg:block relative">
        <img
          src="https://images.unsplash.com/photo-1640622303392-7d2bee0c2438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
    </div>
  )
}

export default AuthLayout
