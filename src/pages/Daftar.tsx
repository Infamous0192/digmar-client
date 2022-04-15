import { AxiosError } from 'axios'
import { Button } from 'components/elements'
import { TextField } from 'components/forms'
import { AuthLayout } from 'components/layouts'
import { useForm } from 'hooks'
import axios from 'lib/axios'
import { useAuth } from 'modules/auth'
import { Link, useNavigate } from 'react-router-dom'

const Daftar: React.FC = () => {
  const navigate = useNavigate()
  const { values, handleChange, useSubmit, setErrors, errors } = useForm()

  const handleSubmit = useSubmit(async () => {
    try {
      const { data } = await axios.post('/register', values)
      navigate('/masuk', {
        state: {
          message: 'Anda berhasil terdaftar, silahkan login',
        },
      })
      // const res = await axios.get('/me', {
      //   headers: {
      //     Authorization: `bearer ${token}`,
      //   },
      // })

      // dispatch({
      //   type: 'LOGIN',
      //   payload: {
      //     creds: { ...res.data, email: 'infamous0192@gmail.com' },
      //     token,
      //   },
      // })
    } catch (error: any) {
      const { messages } = error.response.data
      return setErrors(messages)
    }
  })

  return (
    <AuthLayout>
      <div className="max-w-xs sm:max-w-sm w-full px-4">
        <h1 className="font-bold text-2xl mb-2">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-3.5 mt-2">
          <div>
            <TextField
              name="nama_user"
              type="text"
              label="Nama"
              error={errors['nama_user']}
              onChange={handleChange}
            />
          </div>
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
          <div>
            <TextField
              name="confpassword"
              type="password"
              label="Konfirmasi Password"
              error={errors['confpassword']}
              onChange={handleChange}
            />
          </div>
          {/* <div>
            <TextField
              name="nohp"
              type="text"
              label="No HP"
              error={errors['nohp']}
              onChange={handleChange}
            />
          </div> */}
          <div className="flex items-center justify-between py-3">
            <Button size="sm" className="text-sm">
              Daftar
            </Button>
          </div>
        </form>
        <div className="border-t border-gray-200 mt-4">
          <div className="py-4 text-gray-700 text-sm">
            Sudah terdaftar?{' '}
            <Link to="/masuk" className="text-sunglow-600 hover:text-sunglow-500">
              Masuk
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Daftar
