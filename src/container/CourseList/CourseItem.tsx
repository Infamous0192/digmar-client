import { BookmarkIcon, CheckCircleIcon, LockClosedIcon } from '@heroicons/react/solid'
import { Button, Link } from 'components/elements'
import { formatTimestamp } from 'utils/format'

export type Course = {
  id: string
  title: string
  duration: string
  status: 'finish' | 'ongoing' | 'process'
}

interface Props {
  code: string
  course: Course
}

const icon = {
  finish: <CheckCircleIcon className="h-7 w-7 text-green-500 flex-shrink-0" />,
  ongoing: <BookmarkIcon className="h-7 w-7 text-orange-500 flex-shrink-0" />,
  process: <LockClosedIcon className="h-7 w-7 text-slate-200 flex-shrink-0" />,
}

const CourseItem: React.FC<Props> = ({ code, course }) => {
  return (
    <Link to={`/member/kelas/${code}/${course.id}`}>
      <div
        className={`w-full ${
          course.status === 'ongoing'
            ? 'bg-sunglow-50 hover:bg-sunglow-100'
            : 'bg-white hover:bg-slate-50'
        } border border-slate-200 rounded flex sm:items-center mb-1 p-3 transition-all duration-200`}
      >
        {icon[course.status]}
        <div className="flex items-center flex-grow ml-2">
          <h2 className="font-medium capitalize">{course.title}</h2>
        </div>
          <span className="ml-1 hidden sm:block leading-none text-slate-600">
            ({formatTimestamp(course.duration)})
          </span>
        {/* <div className="hidden md:block">
          <Button color="primary" size="xs">
            Mulai
          </Button>
        </div> */}
      </div>
    </Link>
  )
}

export default CourseItem
