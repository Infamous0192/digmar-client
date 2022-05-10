import { useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { BookmarkIcon, CheckCircleIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import { Button, Link } from 'components/elements'
import Header from 'layouts/dashboard/Header'
import UserMenu from 'layouts/dashboard/UserMenu'

const TestPage: NextPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
        onClick={() => setOpen(!open)}
      ></div>

      <div
        id="sidebar"
        // ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-80 shrink-0 bg-white border-r border-gray-200 p-4 transition-all duration-200 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-80'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            // ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setOpen(!open)}
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

        <ul className="space-y-1">
          <li className="px-4 bg-gray-100 rounded flex py-2 cursor-pointer">
            <div className="w-6 h-6 rounded-full flex-shrink-0">
              <CheckCircleIcon className="text-green-600" />
            </div>
            <h3 className="font-medium ml-2">Introduction</h3>
          </li>
          <li className="px-4 hover:bg-gray-50 flex py-2 cursor-pointer">
            <div className="w-6 h-6 rounded-full flex-shrink-0">
              <BookmarkIcon className="text-orange-500" />
            </div>
            <h3 className="font-medium ml-2">Basic Fundamental</h3>
          </li>
          <li className="px-4 hover:bg-gray-50 flex py-2 cursor-pointer">
            <div className="w-6 h-6 rounded-full flex-shrink-0">
              <div className="border-[2.5px] border-gray-400 w-5 h-5 rounded-full"></div>
            </div>
            <h3 className="font-medium ml-2">Environtment Setup</h3>
          </li>
          <li className="px-4 hover:bg-gray-50 flex py-2 cursor-pointer">
            <div className="w-6 h-6 rounded-full flex-shrink-0">
              <div className="border-[2.5px] border-gray-400 w-5 h-5 rounded-full"></div>
            </div>
            <h3 className="font-medium ml-2">Studi Case & Implementation</h3>
          </li>
        </ul>
      </div>
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <header className="sticky top-0 bg-white border-b border-slate-200 z-20">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 -mb-px">
              {/* Header: Left side */}
              <div className="flex lg:hidden">
                {/* Hamburger button */}
                <button
                  className="text-slate-500 hover:text-slate-600"
                  onClick={() => setOpen(!open)}
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
              <Link to="/member">
                <div className="font-semibold items-center text-gray-900 hidden lg:flex hover:text-gray-600">
                  <ChevronLeftIcon className="w-5 h-5 inline mr-1" /> Dashboard
                </div>
              </Link>

              <div className="flex items-center">
                {/* <Notifications /> */}
                {/*  Divider */}
                <button
                  id="theme-toggle"
                  type="button"
                  className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                >
                  <svg
                    id="theme-toggle-dark-icon"
                    className="hidden w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  <svg
                    id="theme-toggle-light-icon"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <hr className="w-px h-6 bg-slate-200 mx-3" />
                <UserMenu />
              </div>
            </div>
          </div>
        </header>
        <main className="px-6 sm:px-12 lg:px-12 py-8 w-full max-w-7xl mx-auto">
          <div className="w-full aspect-video bg-gray-200 rounded-md overflow-hidden mb-4">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/-uleG_Vecis?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Introduction</h1>
            <Button color="secondary">Next Video</Button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default TestPage
