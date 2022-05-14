import CourseItem, { Course } from './CourseItem'

interface Props {
  code: string
  courses: Course[]
}

const CourseList: React.FC<Props> = ({ code, courses }) => {
  const finishedCourse = courses.filter(({ status }) => status == 'finish')
  const processCourse = courses.filter(({ status }) => status == 'process')

  return (
    <>
      {finishedCourse.map((course) => (
        <CourseItem key={course.id} code={code} course={course} />
      ))}
      {processCourse.slice(0, 1).map((course) => (
        <CourseItem key={course.id} code={code} course={{ ...course, status: 'ongoing' }} />
      ))}
      {processCourse.slice(1).map((course) => (
        <CourseItem key={course.id} code={code} course={course} />
      ))}
    </>
  )
}

export default CourseList
