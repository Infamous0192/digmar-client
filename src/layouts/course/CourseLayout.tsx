import { useState } from 'react'

import { CourseSidebar } from 'container/CourseSidebar'
import { SidebarContext } from 'contexts/sidebar'
import CourseHeader from './CourseHeader'

interface Props {
  children: React.ReactNode
}

const CourseLayout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false)

  function toggleOpen() {
    setOpen((prev) => !prev)
  }

  return (
    <SidebarContext.Provider value={{ open, setOpen, toggleOpen }}>
      <div className="flex h-screen overflow-hidden">
        <CourseSidebar />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <CourseHeader />
          <main className="px-6 sm:px-12 lg:px-12 py-8 w-full max-w-7xl mx-auto">{children}</main>
        </div>
      </div>
    </SidebarContext.Provider>
  )
}

export default CourseLayout
