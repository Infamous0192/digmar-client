import { Menu, Transition } from '@headlessui/react'
import { Link } from 'components/elements'
import { Fragment } from 'react'

const Notifications: React.FC = () => {
  return (
    <Menu as="div" className="relative inline-flex ml-3">
      {({ open }) => (
        <>
          <Menu.Button
            className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${
              open && 'bg-slate-200'
            }`}
            aria-haspopup="true"
            aria-expanded={open}
          >
            <span className="sr-only">Notifications</span>
            <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path
                className="fill-current text-slate-500"
                d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
              />
              <path
                className="fill-current text-slate-400"
                d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
              />
            </svg>
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></div>
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">
                Notifications
              </div>
              <Menu.Item as="div" className="border-b border-slate-200 last:border-0">
                <Link to="#" className="block py-2 px-4 hover:bg-slate-50">
                  <span className="block text-sm mb-2">
                    📣{' '}
                    <span className="font-medium text-slate-800">
                      Edit your information in a swipe
                    </span>{' '}
                    Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim.
                  </span>
                  <span className="block text-xs font-medium text-slate-400">Feb 12, 2021</span>
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default Notifications
