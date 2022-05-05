import { useAuth } from 'modules/auth'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'components/elements'

const UserMenu: React.FC = () => {
  const { state, dispatch } = useAuth()

  const handleLogout = () => {
    // setOpen(!open)
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <Menu as="div" className="relative inline-flex">
      <Menu.Button className="inline-flex justify-center items-center group" aria-haspopup="true">
        <img
          className="w-8 h-8 rounded-full"
          src="https://via.placeholder.com/150"
          width="32"
          height="32"
          alt="User"
        />
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium group-hover:text-slate-800">
            {state.creds?.username}
          </span>
          <svg className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </Menu.Button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu.Items>
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
            <div className="font-medium text-slate-800">{state.creds?.username}</div>
            <div className="text-xs text-slate-500 italic capitalize">Customer</div>
          </div>
          <Menu.Item>
            <Link
              className="font-medium text-sm text-sunglow-500 hover:text-sunglow-600 flex items-center py-1 px-3"
              to="/"
            >
              Settings
            </Link>
          </Menu.Item>
          <Menu.Item>
            <button
              className="font-medium text-sm text-sunglow-500 hover:text-sunglow-600 flex items-center py-1 px-3"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default UserMenu
