import Image from 'next/image'
import { Link } from 'components/elements'
import { useSidebar } from 'hooks'
import CourseMenu from './CourseMenu'

const CourseLayout: React.FC = () => {
  const { open, toggleOpen } = useSidebar()

  return (
    <>
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
        onClick={toggleOpen}
      ></div>

      <div
        id="sidebar"
        // ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-80 shrink-0 bg-white border-r border-slate-200 p-4 transition-all duration-200 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-80'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            // ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={toggleOpen}
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

        <CourseMenu />
      </div>
    </>
  )
}

export default CourseLayout
