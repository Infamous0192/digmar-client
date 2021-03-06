const ClassSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded shadow border border-slate-200">
      <div className="block items-center">
        <div className="relative bg-slate-200 w-full aspect-video rounded rounded-b-none overflow-hidden"></div>
        <div className="p-4 truncate">
          <h3 className="w-3/4 h-5 rounded animate-pulse bg-slate-200 mb-4"></h3>

          <div className="flex items-center space-x-3 text-slate-700 mt-1.5 mb-4">
            <div className="w-16 h-4 bg-slate-200 rounded animate-pulse"></div>
            <div className="w-16 h-4 bg-slate-200 rounded animate-pulse"></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="w-14 h-5 bg-slate-200 rounded animate-pulse"></div>
            <div className="w-14 h-5 bg-slate-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassSkeleton
