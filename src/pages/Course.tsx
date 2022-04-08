import { CourseDataList } from 'containers/CourseList'

const Course: React.FC = () => {
  return (
    <main className="flex-grow py-24">
      <div className="max-w-7xl pb-12 md:pb-20 mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-4">Daftar Kelas</h1>
        <CourseDataList />
      </div>
    </main>
  )
}

export default Course
