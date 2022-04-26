import { useState } from 'react'

import { useSidebar } from 'hooks'

import Notifications from './Notifications'
import UserMenu from './UserMenu'

const Header: React.FC = () => {
  const { open, toggleOpen } = useSidebar()

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              onClick={() => toggleOpen()}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          <div className="flex items-center">
            {/* <Notifications /> */}
            {/*  Divider */}
            {/* <hr className="w-px h-6 bg-slate-200 mx-3" /> */}
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
