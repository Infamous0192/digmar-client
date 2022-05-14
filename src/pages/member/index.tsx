import type { NextPage } from 'next'
import { DashboardLayout } from 'layouts/dashboard'

const Dashboard: NextPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-slate-800 leading-none mb-8">Progress Kelas</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-6">
        <div className="bg-white rounded-lg shadow flex">
          <div className="rounded-lg rounded-r-none h-full aspect-square bg-slate-200 flex-shrink-0"></div>
          <div className="p-4 flex-grow">
            <div className="flex items-center mb-4">
              <div className="flex-grow">
                <h2 className="text-lg font-semibold leading-none mb-2">
                  Mencoba Hal Mudah : Volume I
                </h2>
                <p className="text-slate-600">Kelas Akuntansi</p>
              </div>
              <div className="flex-shrink-0 text-slate-600">12/12</div>
            </div>
            <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="w-full h-full bg-sunglow-500"></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow flex">
          <div className="rounded-lg rounded-r-none h-full aspect-square bg-slate-200 flex-shrink-0"></div>
          <div className="p-4 flex-grow">
            <div className="flex items-center mb-4">
              <div className="flex-grow">
                <h2 className="text-lg font-semibold leading-none mb-2">
                  Mencoba Hal Mudah : Volume II
                </h2>
                <p className="text-slate-600">Kelas Akuntansi</p>
              </div>
              <div className="flex-shrink-0 text-slate-600">7/12</div>
            </div>
            <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="w-7/12 h-full bg-sunglow-500"></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow flex">
          <div className="rounded-lg rounded-r-none h-full aspect-square bg-slate-200 flex-shrink-0"></div>
          <div className="p-4 flex-grow">
            <div className="flex items-center mb-4">
              <div className="flex-grow">
                <h2 className="text-lg font-semibold leading-none mb-2">
                  Mencoba Hal Mudah : Volume III
                </h2>
                <p className="text-slate-600">Kelas Akuntansi</p>
              </div>
              <div className="flex-shrink-0 text-slate-600">1/7</div>
            </div>
            <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="w-1/12 h-full bg-sunglow-500"></div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
