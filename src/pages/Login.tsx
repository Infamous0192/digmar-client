import { Button } from 'components/elements'
import { TextField } from 'components/forms'
import { AuthLayout } from 'components/layouts'
import { useAuth, useForm } from 'hooks'

const Login: React.FC = () => {
  const { dispatch } = useAuth()
  const { values, handleChange, useSubmit } = useForm()

  const handleSubmit = useSubmit(() => {
    console.log(values)

    dispatch({
      type: 'LOGIN',
      payload: {
        creds: { _id: '123', name: 'Dwa Meizadewa', email: 'infamous0192@gmail.com' },
        token: '237y5udhfv937tjrbgi434i5t',
      },
    })
  })

  return (
    <AuthLayout>
      <div className="max-w-sm w-full px-2">
        <h1 className="font-bold text-2xl mb-4">Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-1.5">
          <TextField name="email" type="email" label="Alamat Email" onChange={handleChange} />
          <TextField name="password" type="password" label="Password" onChange={handleChange} />
          <div className="flex items-center justify-between py-1">
            <a className="text-gray-600 underline text-sm" href="#">
              Lupa password?
            </a>
            <Button size="sm" className="text-sm">
              Masuk
            </Button>
          </div>
        </form>
        <div className="border-t border-gray-200 mt-4">
          <div className="py-4 text-gray-700 text-sm">
            Belum punya akun?{' '}
            <a href="#" className="text-sunglow-600 hover:text-sunglow-500">
              Daftar
            </a>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login
