import type { NextPage } from 'next'
import Image from 'next/image'

import { DashboardLayout } from 'layouts/dashboard'
import { Course, CourseList } from 'container/CourseList'

const curriculums: Course[] = [
  {
    id: '1',
    title: 'Introduction',
    duration: '00:03:14',
    status: 'finish',
  },
  {
    id: '2',
    title: 'Basic Fundamental',
    duration: '00:04:09',
    status: 'finish',
  },
  {
    id: '3',
    title: 'Environment Setup',
    duration: '00:05:12',
    status: 'process',
  },
  {
    id: '3',
    title: 'Studi Case & Implementation',
    duration: '00:15:15',
    status: 'process',
  },
]

const MemberCourseDetail: NextPage = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-slate-800 leading-none">Kelas Digital Marketing</h1>
      </div>
      <section>
        <h2 className="font-semibold text-xl mb-4">Materi</h2>
        <CourseList code="KL02" courses={curriculums} />
      </section>

      <div className="max-w-xl mx-auto w-full mt-8 relative">
        <Image
          alt="Sertifikat Dicoding"
          src="/sertifikat_dicoding.png"
          width={2339}
          height={1654}
        />
        <div className="bg-black w-full h-full inset-0 z-10 absolute bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 cursor-pointer"></div>
      </div>
    </DashboardLayout>
  )
}

export default MemberCourseDetail
