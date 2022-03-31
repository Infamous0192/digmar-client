import { Button } from 'components/elements'
import { TextField } from 'components/forms'

const Masuk: React.FC = () => {
  return (
    <div className="w-full h-screen lg:grid grid-cols-2">
      <div className="bg-white h-screen w-full flex items-center justify-center">
        <div className="max-w-sm w-full px-2">
          <h1 className="font-bold text-2xl mb-4">Sign In</h1>
          <form className="space-y-1.5">
            <TextField name="email" type="email" label="Alamat Email" required />
            <TextField name="password" type="password" label="Password" required />
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
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Daftar
              </a>
            </div>
          </div>
        </div>
      </div>
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

export default Masuk
