import { useState } from 'react'
import CourseButton from './CourseButton'
import CourseItem from './CourseItem'

const CourseList: React.FC = () => {
  const [category, setCategory] = useState('pemasaran')

  return (
    <>
      <div className="flex items-center justify-center flex-wrap gap-4 mb-8">
        <CourseButton category="pemasaran" active={category} onClick={setCategory}>
          Pemasaran
        </CourseButton>
        <CourseButton category="operasional" active={category} onClick={setCategory}>
          Operasional
        </CourseButton>

        <CourseButton category="keuangan" active={category} onClick={setCategory}>
          Keuangan
        </CourseButton>
        <CourseButton category="sdm" active={category} onClick={setCategory}>
          Sumber Daya Manusia
        </CourseButton>
      </div>

      <div className="grid md:grid-cols-3 gap-x-4 gap-y-6">
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
    </>
  )
}

export default CourseList
