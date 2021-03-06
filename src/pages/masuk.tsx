import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { Cart } from 'types'

import axios from 'lib/axios'
import { Button, Link } from 'components/elements'
import { TextField } from 'components/forms'
import { AuthLayout } from 'layouts/auth'
import { useAuth } from 'modules/auth'
import { useForm } from 'hooks'

const LoginPage: NextPage = () => {
  const { dispatch } = useAuth()
  const router = useRouter()
  const { values, handleChange, useSubmit, setErrors, errors } = useForm()

  const handleSubmit = useSubmit(async () => {
    try {
      const { data: token } = await axios.post('/login', values)
      const res = await axios.get('/me', {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })

      dispatch({
        type: 'LOGIN',
        payload: {
          creds: { ...res.data },
          token,
        },
      })

      const cookie = Cookies.get('cart')

      if (cookie && sessionStorage.getItem('cart')) {
        const cart: Cart[] = JSON.parse(cookie)

        if (cart.length) return router.push('/checkout')
      }

      return router.push('/member')
    } catch (error: any) {
      const { messages } = error.response.data
      if (!messages.error) return setErrors(messages)

      const field = messages.error == 'Wrong Password' ? 'password' : 'email'

      setErrors({ ...errors, [field]: messages.error })
    }
  })

  return (
    <AuthLayout>
      <div className="max-w-xs sm:max-w-sm w-full px-4">
        <h1 className="font-bold text-2xl mb-2">Sign In</h1>
        {/* {state && <div className="bg-green-100 text-green-600 py-2 px-3 rounded-md">{state.message}</div>} */}
        <form onSubmit={handleSubmit} className="space-y-3 mt-2">
          <div>
            <TextField
              name="email"
              type="text"
              label="Alamat Email"
              error={errors['email']}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              name="password"
              type="password"
              label="Password"
              error={errors['password']}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between py-3">
            <a className="text-slate-800 underline text-sm" href="#">
              Lupa password?
            </a>
            <Button className="text-sm">Masuk</Button>
          </div>
        </form>
        <div className="border-t border-slate-200 mt-4">
          <div className="py-4 text-slate-700 text-sm">
            Belum punya akun?{' '}
            <Link to="/Daftar" className="text-sunglow-600 hover:text-sunglow-500">
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default LoginPage
