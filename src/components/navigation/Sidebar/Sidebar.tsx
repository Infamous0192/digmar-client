import { useEffect, useRef } from 'react'

import { useSidebar } from 'hooks'
import { Navigation } from 'types'

import { SidebarBackdrop } from './SidebarBackdrop'
import { SidebarLink } from './SidebarLink'
import { SidebarLinkGroup } from './SidebarLinkGroup'
import { useRouter } from 'next/router'
import { Link } from 'components/elements'
import Image from 'next/image'

type Props = {
  navigation: Navigation[]
}

export const Sidebar: React.FC<Props> = ({ navigation }) => {
  const router = useRouter()
  const { pathname } = router

  const trigger = useRef<any>(null)
  const sidebar = useRef<any>(null)

  const { open, toggleOpen, setOpen } = useSidebar()

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!open || keyCode !== 27) return
      setOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  useEffect(() => {
    if (open) {
      document.querySelector('body')!.classList.add('sidebar-expanded')
    } else {
      document.querySelector('body')!.classList.remove('sidebar-expanded')
    }
  }, [open])

  return (
    <div>
      <SidebarBackdrop isOpen={open} />

      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white border-r border-gray-200 p-4 transition-all duration-200 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => toggleOpen()}
            aria-controls="sidebar"
            aria-expanded={open}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <Link to="/" className="block flex-shrink-0">
            <Image
              src="/logo.png"
              width="64"
              height="32px"
              objectFit="contain"
              alt="logo siap cuan"
            />
          </Link>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase text-gray-900 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
            </h3>

            <ul className="mt-3">
              {navigation.map(({ title, href, links, icon }) =>
                !links ? (
                  <SidebarLink
                    key={title}
                    to={href}
                    active={href !== '/' ? pathname.includes(href) : pathname === href}
                    title={title}
                    icon={icon}
                  />
                ) : (
                  <SidebarLinkGroup
                    key={title}
                    navigation={links}
                    active={pathname.includes(href)}
                    title={title}
                    icon={icon}
                  />
                )
              )}
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => toggleOpen()}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path
                  className="text-slate-900"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-gray-900" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
