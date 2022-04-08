import { Link } from 'react-router-dom'

import { ClockIcon, UsersIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

const CourseItem: React.FC = () => {
  return (
    <div className="w-full mx-auto bg-white rounded shadow-sm flex md:block border border-gray-200">
      <Link to="/kelas/123">
        <div className="relative bg-gray-200 h-full w-36 md:w-full md:h-0 pb-[56.25%] rounded rounded-b-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            alt="placeholder"
            className="absolute w-full h-full inset-0 object-center object-cover"
          />
        </div>
      </Link>
      <div className="px-4 py-4 space-y-2">
        <Link to="/kelas/123">
          <h3 className="font-bold hover:underline">Full-Stack Javascript Developer</h3>
        </Link>

        <div className="space-x- flex items-center pb-2">
          <StarIcon className="w-5 h-5 inline text-orange-400" />
          <StarIcon className="w-5 h-5 inline text-orange-400" />
          <StarIcon className="w-5 h-5 inline text-orange-400" />
          <StarIcon className="w-5 h-5 inline text-orange-400" />
          <StarIcon className="w-5 h-5 inline text-orange-400" />
        </div>

        <div className="flex space-x-4 text-sm">
          <div className="space-x-1.5 flex items-center">
            <ClockIcon className="w-5 h-5 inline" />
            <span className="leading-none font-medium">5 Jam</span>
          </div>
          <div className="space-x-1.5 flex items-center">
            <UsersIcon className="w-5 h-5 inline" />
            <span className="leading-none font-medium">2,000 Pendaftar</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseItem
