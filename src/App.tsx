import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import 'styles/globals.scss'

import AOS from 'aos'
import { LandingLayout } from 'components/layouts'

import Home from 'pages/Home'

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
    <>
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
