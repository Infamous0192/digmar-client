import type { NextPage } from 'next'
import { DashboardLayout } from 'layouts/dashboard'
import { Button, Card, Link } from 'components/elements'
import React, { useState } from 'react'

const courses = [
  {
    id: 'KL-123',
    name: 'Kelas Digital Marketing',
    category: 'marketing',
    status: 'finish',
  },
  {
    id: 'KL-121',
    name: 'Kelas Media Sosial',
    category: 'marketing',
    status: 'ongoing',
  },
  {
    id: 'KL-122',
    name: 'Kelas Akuntansi',
    category: 'akuntansi',
    status: 'ongoing',
  },
]

interface State {
  status: string
}

const MemberCourse: NextPage = () => {
  const [state, setState] = useState<State>({ status: 'ongoing' })

  function handleStatus(status: string) {
    return () => {
      setState((prev) => ({ ...prev, status }))
    }
  }

  return (
    <DashboardLayout>
      <div className="md:flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-slate-800 leading-none">Kelas Terdaftar</h1>
      </div>
      <div className="flex items-center space-x-3 overflow-auto py-1 mb-4">
        <Button
          color={state.status == 'ongoing' ? 'primary' : 'light'}
          size="sm"
          rounded="full"
          onClick={handleStatus('ongoing')}
        >
          Ongoing
        </Button>
        <Button
          color={state.status == 'finish' ? 'primary' : 'light'}
          size="sm"
          rounded="full"
          onClick={handleStatus('finish')}
        >
          Finished
        </Button>
      </div>
      <Card>
        <div className="divide-y divide-gray-200">
          {courses
            .filter(({ status }) => status == state.status)
            .map((course) => (
              <div className="w-full hover:bg-gray-50 transition-colors md:flex items-center justify-between p-4">
                <Link to="/member/kelas/KL-123">
                  <div className="flex items-center h-full w-full">
                    <div className="w-16 h-16 bg-gray-200 flex-shrink-0 rounded-md"></div>
                    <div className="ml-4">
                      <h2 className="text-lg font-semibold capitalize">{course.name}</h2>
                      <div className="text-gray-600 capitalize">{course.category}</div>
                    </div>
                  </div>
                </Link>
                <div className="flex justify-end space-x-4 mt-4 md:mt-0">
                  <Link to="/member/kelas/KL-123">
                    <Button>Lihat Materi</Button>
                  </Link>
                  {course.status == 'finish' && <Button color="secondary">Lihat Sertifikat</Button>}
                </div>
              </div>
            ))}
        </div>
      </Card>
    </DashboardLayout>
  )
}

export default MemberCourse
