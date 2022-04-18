import { SearchIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import CourseItem from './CourseItem'
import CourseSkeleton from './CourseSkeleton'

const CourseDataList: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    setTimeout(() => {
      if (!isMounted) return
      console.log('awes')
      setLoading(false)
    }, 500)

    return () => {
      isMounted = false
    }
  }, [keyword])

  return (
    <div className="lg:flex gap-8">
      <div className="w-full lg:w-60 flex-shrink-0 mb-8">
        <div className="bg-white rounded border border-gray-200 px-4 lg:divide-y divide-gray-300">
          <div className="py-2 lg:py-4">
            <h3 className="font-semibold mb-3">Kategori Kelas</h3>
            <div className="flex items-center mb-2">
              <input
                id="pemasaran"
                name="pemasaran"
                type="checkbox"
                className="h-4 w-4 text-sunglow-600 focus:ring-0 border-gray-300 rounded"
              />
              <label htmlFor="pemasaran" className="ml-2 block text-sm text-gray-700">
                Pemasaran
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="operasional"
                name="operasional"
                type="checkbox"
                className="h-4 w-4 text-sunglow-600 focus:ring-0 border-gray-300 rounded"
              />
              <label htmlFor="operasional" className="ml-2 block text-sm text-gray-700">
                Operasional
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="sdm"
                name="sdm"
                type="checkbox"
                className="h-4 w-4 text-sunglow-600 focus:ring-0 border-gray-300 rounded"
              />
              <label htmlFor="sdm" className="ml-2 block text-sm text-gray-700">
                Sumber Daya Manusia
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="keuangan"
                name="keuangan"
                type="checkbox"
                className="h-4 w-4 text-sunglow-600 focus:ring-0 border-gray-300 rounded"
              />
              <label htmlFor="keuangan" className="ml-2 block text-sm text-gray-700">
                Keuangan
              </label>
            </div>
          </div>
          <div className="py-2 lg:py-4">
            <h3 className="font-semibold mb-3">Tingkat</h3>
            <div className="flex items-center mb-2">
              <input
                id="dasar"
                name="dasar"
                type="checkbox"
                className="h-4 w-4 text-sunglow-600 focus:ring-0 border-gray-300 rounded"
              />
              <label htmlFor="dasar" className="ml-2 block text-sm text-gray-700">
                Dasar
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="pemula"
                name="pemula"
                type="checkbox"
                className="h-4 w-4 text-sunglow-600 focus:ring-0 border-gray-300 rounded"
              />
              <label htmlFor="pemula" className="ml-2 block text-sm text-gray-700">
                Pemula
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="menengah"
                name="menengah"
                type="checkbox"
                className="h-4 w-4 text-sunglow-600 focus:ring-0 border-gray-300 rounded"
              />
              <label htmlFor="menengah" className="ml-2 block text-sm text-gray-700">
                Menengah
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="mahir"
                name="mahir"
                type="checkbox"
                className="h-4 w-4 text-sunglow-600 focus:ring-0 border-gray-300 rounded"
              />
              <label htmlFor="mahir" className="ml-2 block text-sm text-gray-700">
                Mahir
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="professional"
                name="professional"
                type="checkbox"
                className="h-4 w-4 text-sunglow-600 focus:ring-0 border-gray-300 rounded"
              />
              <label htmlFor="professional" className="ml-2 block text-sm text-gray-700">
                Professional
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="w-4 h-4 text-gray-700" />
          </div>
          <input
            type="text"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Cari kelas"
            className="focus:ring-sunglow-500 focus:border-sunglow-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-lg"
          />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6">
          {loading ? (
            <>
              <CourseSkeleton />
              <CourseSkeleton />
              <CourseSkeleton />
              <CourseSkeleton />
              <CourseSkeleton />
              <CourseSkeleton />
            </>
          ) : (
            <>
              <CourseItem />
              <CourseItem />
              <CourseItem />
              <CourseItem />
              <CourseItem />
              <CourseItem />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CourseDataList
