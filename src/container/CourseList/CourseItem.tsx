import { BookmarkIcon, CheckCircleIcon } from '@heroicons/react/solid'
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

const CourseItem: React.FC<Props> = ({ code, course }) => {
  return (
    <Link to={`/member/kelas/${code}/${course.id}`}>
      <div
        className={`w-full ${
          course.status === 'ongoing' ? 'bg-sunglow-100' : 'bg-white hover:bg-slate-50'
        } border border-slate-200 rounded flex items-center mb-1 p-3`}
      >
        {course.status === 'finish' && <CheckCircleIcon className="h-8 w-8 text-green-500" />}
        {course.status === 'ongoing' && <BookmarkIcon className="h-8 w-8 text-orange-500" />}
        {course.status === 'process' && (
          <div className="h-8 w-8 bg-slate-200 rounded-full flex-shrink-0" />
        )}
        <div className="flex items-center flex-grow ml-2">
          <h2 className="text-lgs font-medium leading-none">{course.title}</h2>
          <span className="ml-1 text-sm leading-none text-slate-600">
            ({formatTimestamp(course.duration)})
          </span>
        </div>
        <Button color="primary" size="xs">
          Mulai
        </Button>
      </div>
    </Link>
  )
}

export default CourseItem
