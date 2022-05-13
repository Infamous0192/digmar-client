import { useFetch } from 'hooks'
import { useEffect, useState } from 'react'
import ClassButton from './ClassButton'
import ClassItem from './ClassItem'
import ClassSkeleton from './ClassSkeleton'

const ClassList: React.FC = () => {
  const [state, setState] = useState('')
  const [category, setCategory] = useState<string[]>([])
  const { data, loading } = useFetch({ url: '/classes/all' })

  function handleClick(category: string): React.MouseEventHandler<HTMLButtonElement> {
    return () => {
      setState(category)
    }
  }

  useEffect(() => {
    if (loading) return

    // distinct category from data
    const arr = data
      .map(({ nama_kategori }: any) => nama_kategori)
      .filter((name, index, arr) => arr.indexOf(name) == index)
      .sort()

    if (arr.length) {
      setCategory(arr)
      setState(arr[0]) // set default value of index 0
    }
  }, [loading])

  return (
    <>
      <div className="flex items-center justify-center flex-wrap gap-4 mb-8">
        {loading ? (
          <>
            <div className="w-28 h-8 rounded-full bg-slate-200 animate-pulse"></div>
            <div className="w-28 h-8 rounded-full bg-slate-200 animate-pulse"></div>
            <div className="w-28 h-8 rounded-full bg-slate-200 animate-pulse"></div>
            <div className="w-28 h-8 rounded-full bg-slate-200 animate-pulse"></div>
          </>
        ) : (
          <>
            {category.map((item) => (
              <ClassButton key={item} category={item} active={state} onClick={handleClick(item)} />
            ))}
          </>
        )}
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-x-6 gap-y-6">
        {loading ? (
          <>
            <ClassSkeleton />
            <ClassSkeleton />
            <ClassSkeleton />
          </>
        ) : (
          <>
            {data
              .filter(({ nama_kategori }) => nama_kategori == state)
              .slice(0, 3)
              .map((i) => (
                <ClassItem
                  key={i.kode_kelas}
                  name={i.nama_kelas}
                  price={parseInt(i.harga)}
                  photo={i.photo}
                  slug={i.kode_kelas}
                  duration={parseInt(i.durasi.split(':')[0])}
                />
              ))}
          </>
        )}
      </div>
    </>
  )
}

export default ClassList
