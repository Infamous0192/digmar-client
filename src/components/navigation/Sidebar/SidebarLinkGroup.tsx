import { useState } from 'react'

import { Link } from 'components/elements'
import { ChevronDownIcon } from '@heroicons/react/outline'

const SidebarLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <li className="mb-1 last:mb-0">
    <Link
      to={to}
      className="block text-slate-900 hover:text-sunglow-800 transition duration-150 truncate"
    >
      <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
        {children}
      </span>
    </Link>
  </li>
)

type Props = {
  active: boolean
  title: string
  navigation: {
    title: string
    href: string
  }[]
  icon: React.FC<any>
}

export const SidebarLinkGroup: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(props.active)

  const toggleOpen = () => setOpen(!open)
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    toggleOpen()
  }

  return (
    <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${props.active && 'bg-sunglow-50'}`}>
      <a
        href="#"
        className={`block text-slate-900 truncate transition duration-150 ${
          props.active && 'hover:text-sunglow-900'
        }`}
        onClick={handleClick}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <props.icon
              className={`h-6 w-6 ${props.active ? 'text-sunglow-500' : 'text-slate-700'}`}
            />
            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              {props.title}
            </span>
          </div>
          <div className="flex shrink-0 ml-2">
            <ChevronDownIcon
              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-900 ${
                open && 'transform rotate-180'
              }`}
            />
          </div>
        </div>
      </a>
      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
          {props.navigation.map(({ title, href }) => (
            <li key={title} className="mb-1 last:mb-0">
              <Link
                to={href}
                className="block text-slate-900 hover:text-sunglow-800 transition duration-150 truncate"
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                  {title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}
