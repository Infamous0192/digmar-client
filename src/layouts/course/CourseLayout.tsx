import { BookmarkIcon, CheckCircleIcon } from '@heroicons/react/solid'
import { Button, Link } from 'components/elements'
import Header from './Header'
import Image from 'next/image'

const CourseLayout: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          true ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
        // onClick={() => toggleOpen()}
      ></div>

      <div
        id="sidebar"
        // ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-80 shrink-0 bg-white border-r border-gray-200 p-4 transition-all duration-200 ease-in-out ${
          true ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            // ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            // onClick={() => toggleOpen()}
            aria-controls="sidebar"
            aria-expanded={true}
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
        <Header />
        <main className="px-6 sm:px-12 lg:px-12 py-8 w-full max-w-7xl mx-auto">
          <div className="w-full aspect-video bg-gray-200 rounded-md mb-4"></div>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Introduction</h1>
            <Button color="secondary">Next Video</Button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default CourseLayout
