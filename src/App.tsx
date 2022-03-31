import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import AOS from 'aos'
import { LandingLayout } from 'components/layouts'

import Home from 'pages/Home'
import Login from 'pages/Login'
import { AuthProvider } from 'components/providers'
import Course from 'pages/Course'
import CourseDetail from 'pages/CourseDetail'

const App: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  useEffect(() => {
    document.querySelector('html')!.style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html')!.style.scrollBehavior = ''
  }, [location.pathname])

  return (
    <AuthProvider>
      <Routes>
        <Route path="/masuk" element={<Login />} />
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Home />} />
          <Route path="/kelas/:id" element={<CourseDetail />} />
          <Route path="/kelas" element={<Course />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
