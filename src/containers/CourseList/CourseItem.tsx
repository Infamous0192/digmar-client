import { Link } from 'react-router-dom'

import { ClockIcon, UsersIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

const CourseItem: React.FC = () => {
  return (
    <div className="w-full mx-auto bg-white rounded shadow-sm border border-gray-200">
      <div className="flex md:block items-center">
        <div className="relative bg-gray-200 w-24 md:w-full aspect-square md:aspect-video rounded rounded-b-none overflow-hidden">
          <Link to="/kelas/123">
          <img
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            alt="placeholder"
            className="absolute w-full h-full inset-0 object-center object-cover"
          />
          </Link>
        </div>
        <div className="p-4 space-y-2 truncate">
          <Link to="/kelas/123">
            <h3 className="font-bold hover:underline truncate">Full-Stack Javascript Developer</h3>
          </Link>

          <p className="leading-none text-gray-600">Rp. 10.000</p>
        </div>
      </div>
    </div>
  )
}

export default CourseItem
