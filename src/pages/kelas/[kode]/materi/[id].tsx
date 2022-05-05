import { PlayIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { Button } from 'components/elements'
import { LandingLayout } from 'layouts/landing'
import type { NextPage } from 'next'

const CourseDetail: NextPage = () => {
  return (
    <LandingLayout>
      <div className="flex h-screen overflow-hidden mt-16">
        <div className="h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-72 border border-gray-200 p-8 rounded-lg m-2">
          <div className="space-y-4">
            <button className="px-4 py-3 leading-none rounded bg-gray-900 hover:bg-gray-800 text-white flex items-center w-full">
              <PlayIcon className="w-5 h-5" />
              <span className="leading-none ml-2">Pendahuluan</span>
            </button>
            <button className="px-4 py-3 leading-none rounded bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 flex items-center w-full">
              <PlayIcon className="w-5 h-5" />
              <span className="leading-none ml-2">Introduction</span>
            </button>
          </div>
        </div>
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-6xl mx-auto">
            <div className="w-full aspect-video bg-gray-200 rounded-md"></div>
            <div className="flex items-center justify-between mt-4">
              <h1 className="text-xl font-bold">Pendahuluan</h1>
              <Button color="secondary" size="sm">
                Next
              </Button>
            </div>
          </main>
        </div>
      </div>
    </LandingLayout>
  )
}

export default CourseDetail
