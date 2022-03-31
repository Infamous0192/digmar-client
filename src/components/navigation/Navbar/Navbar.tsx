import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useAuth } from 'hooks'
import { Button } from 'components/elements'
import { Link } from 'react-router-dom'

import logo from 'assets/logo.svg'

const user = {
  name: 'Dwa Meizadewa',
  email: 'infamous0192@gmail.com',
  imageUrl: 'https://dummyimage.com/100/dfdfdf/dfdfdf',
}
const navigation = [
  { name: 'Beranda', href: '#', current: true },
  { name: 'Kelas', href: '#', current: false },
  { name: 'Event', href: '#', current: false },
  { name: 'Bootcamp', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const Navbar: React.FC = () => {
  const [top, setTop] = useState(true)
  const { state } = useAuth()

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full z-30 transition duration-300 ease-in-out ${
        !top ? 'bg-white shadow-lg' : 'bg-white md:bg-transparent shadow-lg md:shadow-none'
      }`}
    >
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 -pr-4">
                  <img className="h-10 w-10" src={logo} alt="Workflow" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-medium text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm"
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {state.isAuthenticated ? (
                    <>
                      <button
                        type="button"
                        className="p-1 rounded-full text-gray-500 hover:text-gray-700"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs rounded-full flex items-center text-sm">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
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
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-900'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/masuk"
                        className="whitespace-nowrap text-base font-medium text-gray-600 hover:text-gray-900"
                      >
                        Masuk
                      </Link>
                      <Link to="/daftar">
                        <Button color="secondary" size="sm" className="ml-8">
                          Daftar
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="text-gray-600 text-sm hover:text-gray-900 hover:bg-gray-100 rounded block px-3 py-2"
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-300">
                {!state.isAuthenticated ? (
                  <div className="px-5">
                    <Link to="/daftar">
                      <Button size="sm" color="secondary" className="w-full">
                        Daftar
                      </Button>
                    </Link>
                    <p className="mt-4 text-center text-sm text-gray-500">
                      Sudah terdaftar?{' '}
                      <Link to="/masuk" className="text-blue-600 hover:text-blue-500">
                        Masuk
                      </Link>
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                      </div>
                      <div className="ml-3">
                        <div className="font-medium text-gray-900">{state.creds?.name}</div>
                        <div className="text-sm text-gray-600">{state.creds?.email}</div>
                      </div>
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 p-1 rounded-full text-gray-600 hover:text-gray-900"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 px-2 space-y-1">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="text-gray-600 text-sm hover:text-gray-900 hover:bg-gray-100 rounded block px-3 py-2"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
