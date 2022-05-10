import type { NextPage } from 'next'
import { DashboardLayout } from 'layouts/dashboard'
import { BookmarkIcon, CheckCircleIcon, CheckIcon, PlayIcon } from '@heroicons/react/solid'
import { Button } from 'components/elements'
import { Link } from 'components/elements'
import Image from 'next/image'

const curriculums = [
  {
    id: '1',
    title: 'Introduction',
    durasi: '3:14',
    status: 'finish',
  },
  {
    id: '2',
    title: 'Basic Fundamental',
    durasi: '4:09',
    status: 'finish',
  },
  {
    id: '3',
    title: 'Environment Setup',
    durasi: '5:12',
    status: 'ongoing',
  },
  {
    id: '3',
    title: 'Studi Case & Implementation',
    durasi: '15:15',
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
        {curriculums.map((i) => (
          <Link key={i.id} to="/member/kelas/KL-123/1">
            <div
              className={`w-full ${
                i.status === 'ongoing' ? 'bg-sunglow-100' : 'bg-white hover:bg-gray-50'
              } border border-gray-200 rounded flex items-center mb-1 p-3`}
            >
              {i.status === 'finish' && <CheckCircleIcon className="h-8 w-8 text-green-500" />}
              {i.status === 'ongoing' && <BookmarkIcon className="h-8 w-8 text-orange-500" />}
              {i.status === 'process' && (
                <div className="h-8 w-8 bg-gray-200 rounded-full flex-shrink-0" />
              )}
              <div className="flex items-center flex-grow ml-2">
                <h2 className="text-lgs font-medium leading-none">{i.title}</h2>
                <span className="ml-1 text-sm leading-none text-gray-600">({i.durasi})</span>
              </div>
              <Button color="primary" size="xs">
                Mulai
              </Button>
            </div>
          </Link>
        ))}
      </section>

      <div className="max-w-xl mx-auto w-full mt-8 relative">
        <Image src="/sertifikat_dicoding.png" width={2339} height={1654} />
        <div className="bg-black w-full h-full inset-0 z-10 absolute bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 cursor-pointer"></div>
      </div>
    </DashboardLayout>
  )
}

export default MemberCourseDetail
