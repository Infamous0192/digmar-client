import { ClockIcon, BookOpenIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import { Link } from 'components/elements'
import Image from 'next/image'

interface Props {
  name: string
  price: number
  slug: string
  photo: string
}

const CourseItem: React.FC<Props> = ({ name, price, slug }) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded shadow border border-gray-200">
      <div className="block items-center">
        <div className="relative bg-gray-200 w-full aspect-video rounded rounded-b-none overflow-hidden">
          <Link to={`/kelas/${slug}`}>
            <Image
              src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
              alt="placeholder"
              className="absolute w-full h-full inset-0 object-center object-cover"
              layout="fill"
            />
          </Link>
        </div>
        <div className="p-4 truncate">
          <Link to={`/kelas/${slug}`}>
            <h3 className="font-bold hover:underline truncate text-lg capitalize">{name}</h3>
          </Link>

          <div className="flex items-center space-x-3 text-gray-700 mt-1.5 mb-3">
            <div className="flex items-center text-sm space-x-1.5">
              <ClockIcon className="w-5 h-5" />
              <span className="leading-none font-medium">2 Jam</span>
            </div>
            <div className="flex items-center text-sm space-x-1.5">
              <BookOpenIcon className="w-5 h-5" />
              <span className="leading-none font-medium">23 Materi</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              <StarIcon className="w-6 h-6 text-sunglow-500" />
              <span className="leading-none font-bold">5.0</span>
            </div>

            {price > 0 ? (
              <div className="px-3 py-1 bg-green-200 text-green-500 font-medium rounded-full text-sm">
                {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)}
              </div>
            ) : (
              <div className="px-3 py-1 bg-red-200 text-red-500 font-medium rounded-full text-sm">
                Gratis
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseItem
