const CourseSkeleton: React.FC = () => {
  return (
    <div className="w-full mx-auto bg-white rounded shadow-sm flex md:block border border-gray-200">
      <div>
        <div className="bg-gray-200 animate-pulse h-full w-36 md:w-full md:h-0 pb-[56.25%] rounded rounded-b-none overflow-hidden">
        </div>
      </div>
      <div className="px-4 py-4">
        <div className="rounded bg-gray-200 w-full h-6 animate-pulse mb-3"></div>
        <div className="w-2/6 h-5 bg-gray-200 animate-pulse rounded mb-4"></div>
        <div className="flex space-x-4">
          <div className="bg-gray-200 rounded w-20 h-4 animate-pulse"></div>
          <div className="bg-gray-200 rounded w-20 h-4 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default CourseSkeleton
