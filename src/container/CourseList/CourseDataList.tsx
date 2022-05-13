import { SearchIcon } from '@heroicons/react/solid'
import { Checkbox } from 'components/forms'
import { useFetch } from 'hooks'
import { useEffect, useState } from 'react'
import { Course } from 'types'
import CourseItem from './CourseItem'
import CourseSkeleton from './CourseSkeleton'

const tingkatan = ['dasar', 'menengah', 'lanjut', 'ahli']

type State = {
  category: { [key: string]: boolean }
  keyword: string
  limit: number
}

const CourseDataList: React.FC = () => {
  const [state, setState] = useState<State>({
    category: {},
    keyword: '',
    limit: 6,
  })
  const [course, setCourse] = useState<Course[]>([])
  const [category, setCategory] = useState<string[]>([])
  const { data, loading } = useFetch({ url: '/Kelas/getAllKelas' })

  /* This hooks is used to initialize data */
  useEffect(() => {
    if (loading) return

    // distinct category from data
    const arr = data
      .map(({ nama_kategori }: Course) => nama_kategori)
      .filter((name, index, arr) => arr.indexOf(name) == index)
      .sort()

    if (arr.length) {
      setCategory(arr)

      // set default value of selected category to false
      setState({
        ...state,
        category: arr.reduce((obj, item) => {
          return {
            ...obj,
            [item]: false,
          }
        }, {}),
      })
    }
  }, [loading])

  /* This hook is used to watch changes in the state */
  useEffect(() => {
    if (loading) return

    let result: Course[] = data

    // get selected category from state
    const activeCategory = Object.entries(state.category)
      .filter((item) => item[1])
      .map((item) => item[0])

    if (activeCategory.length)
      result = result.filter(({ nama_kategori }) => activeCategory.includes(nama_kategori))

    if (state.keyword)
      result = result.filter(({ nama_kelas }) => nama_kelas.match(new RegExp(state.keyword, 'i')))

    setCourse(result)
  }, [state])

  function handleCategory(str: string): React.ChangeEventHandler<HTMLInputElement> {
    return () => {
      const category = state.category

      setState({
        ...state,
        category: {
          ...category,
          [str]: !category[str],
        },
      })
    }
  }

  function handleKeyword(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setState({ ...state, keyword: e.target.value })
  }

  return (
    <div className="lg:flex gap-8">
      <div className="w-full lg:w-60 flex-shrink-0 mb-4">
        <div className="bg-white rounded border border-slate-200 px-4 lg:divide-y divide-slate-300">
          <div className="py-2 lg:py-4">
            <h3 className="font-semibold mb-3">Kategori Kelas</h3>
            {!loading ? (
              category.map((item) => (
                <div key={item} className="mb-2">
                  <Checkbox name={item} onChange={handleCategory(item)}>
                    {item}
                  </Checkbox>
                </div>
              ))
            ) : (
              <>
                <div className="bg-slate-200 rounded h-5 w-32 animate-pulse mb-2"></div>
                <div className="bg-slate-200 rounded h-5 w-32 animate-pulse mb-2"></div>
                <div className="bg-slate-200 rounded h-5 w-32 animate-pulse mb-2"></div>
              </>
            )}
          </div>
          <div className="py-2 lg:py-4">
            <h3 className="font-semibold mb-3">Tingkat</h3>
            {!loading ? (
              tingkatan.map((item) => (
                <div key={item} className="mb-2">
                  <Checkbox name={item}>{item}</Checkbox>
                </div>
              ))
            ) : (
              <>
                <div className="bg-slate-200 rounded h-5 w-32 animate-pulse mb-2"></div>
                <div className="bg-slate-200 rounded h-5 w-32 animate-pulse mb-2"></div>
                <div className="bg-slate-200 rounded h-5 w-32 animate-pulse mb-2"></div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="w-4 h-4 text-slate-700" />
          </div>
          <input
            type="text"
            onChange={handleKeyword}
            placeholder="Cari kelas"
            className="focus:ring-sunglow-500 focus:border-sunglow-500 block w-full pl-9 pr-12 sm:text-sm border-slate-300 rounded-lg"
          />
        </div>
        {loading ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6">
            <CourseSkeleton />
            <CourseSkeleton />
            <CourseSkeleton />
            <CourseSkeleton />
            <CourseSkeleton />
            <CourseSkeleton />
          </div>
        ) : course.length ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6">
            {course.map((i) => (
              <CourseItem
                key={i.id_kelas}
                name={i.nama_kelas}
                photo={i.photo}
                price={parseInt(i.harga)}
                slug={i.kode_kelas}
              />
            ))}
          </div>
        ) : (
          <div className="w-full text-center text-slate-600 mt-8">Kelas tidak ditemukan</div>
        )}
      </div>
    </div>
  )
}

export default CourseDataList
