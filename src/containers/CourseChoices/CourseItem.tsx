import { AcademicCapIcon } from '@heroicons/react/solid'

const CourseItem: React.FC = () => {
  return (
    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
      <img
        className="absolute w-full h-full inset-0 object-cover object-center"
        src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        alt=""
      />
      <div className="bg-black absolute inset-0 w-full h-full bg-opacity-50"></div>
      <div className="absolute bottom-4 left-4 z-10 text-white">
        <h2 className="font-semibold text-xl">Fullstack Javascript Developer</h2>
        <div className="flex items-center space-x-2 text-sm">
          <AcademicCapIcon className="inline w-5 h-5 text-sunglow-600" />
          <span>Marketing</span>
        </div>
      </div>
    </div>
  )
}

export default CourseItem
