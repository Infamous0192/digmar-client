import { BookmarkIcon, CheckCircleIcon } from '@heroicons/react/solid'
import { CourseContext } from 'contexts/course'
import { useContext } from 'react'

const CourseMenu: React.FC = () => {
  const { kelas, materi } = useContext(CourseContext)

  const finished = kelas.materi.filter(({ status }) => status == 'selesai')
  const process = kelas.materi.filter(({ status }) => status == 'proses')

  return (
    <nav className="space-y-1 text-sm">
      {finished.map(({ idrecordmateri, judul_materi }) => (
        <div
          key={idrecordmateri}
          className={`px-4 ${
            idrecordmateri === materi.idrecordmateri && 'bg-slate-100'
          } rounded flex py-2 hover:bg-slate-100 cursor-pointer`}
        >
          <div className="w-6 h-6 rounded-full flex-shrink-0">
            <CheckCircleIcon className="text-green-600" />
          </div>
          <h3 className="font-medium ml-2 capitalize">{judul_materi}</h3>
        </div>
      ))}
      {process.slice(0, 1).map(({ idrecordmateri, judul_materi }) => (
        <div
          key={idrecordmateri}
          className={`px-4 ${
            idrecordmateri === materi.idrecordmateri && 'bg-slate-100'
          } rounded flex py-2 hover:bg-slate-100 cursor-pointer`}
        >
          <div className="w-6 h-6 rounded-full flex-shrink-0">
            <BookmarkIcon className="text-orange-500" />
          </div>
          <h3 className="font-medium ml-2 capitalize">{judul_materi}</h3>
        </div>
      ))}
      {process.slice(1).map(({ idrecordmateri, judul_materi }) => (
        <div
          key={idrecordmateri}
          className={`px-4 ${
            idrecordmateri === materi.idrecordmateri && 'bg-slate-100'
          } rounded flex py-2 hover:bg-slate-100 cursor-pointer`}
        >
          <div className="w-6 h-6 rounded-full flex-shrink-0">
            <div className="border-[2.5px] border-slate-400 w-5 h-5 rounded-full"></div>
          </div>
          <h3 className="font-medium ml-2 capitalize">{judul_materi}</h3>
        </div>
      ))}
    </nav>
  )
}

export default CourseMenu
