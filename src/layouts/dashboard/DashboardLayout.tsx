import { useState } from 'react'

import { SidebarContext, defaultState } from 'contexts/sidebar'
import { Navigation } from 'types'

import { Sidebar } from 'components/navigation'
import Header from './Header'
import { useAuth } from 'modules/auth'
import { AcademicCapIcon, ChartBarIcon, CogIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

const navigation: Navigation[] = [
  { title: 'Dashboard', href: '/member', icon: ChartBarIcon },
  {
    title: 'Kelas',
    href: '/member/kelas',
    icon: AcademicCapIcon,
    links: [
      { title: 'Semua Kelas', href: '/kelas' },
      {
        title: 'Kelas Saya',
        href: '/member/kelas',
      },
    ],
  },
  { title: 'Transaksi', href: '/member/transaksi', icon: ShoppingCartIcon },
  { title: 'Settings', href: '/member/settings', icon: CogIcon },
]

interface Props {
  children: React.ReactNode
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const [open, setOpen] = useState(defaultState.open)
  const { state } = useAuth()

  const toggleOpen = () => {
    setOpen(!open)
  }

  // useEffect(() => {
  //   if (state.isLoaded && !state.isAuthenticated) {
  //     router.push('/masuk')
  //   }
  // }, [state])

  // if (!state.isLoaded || !state.isAuthenticated) return null

  return (
    <SidebarContext.Provider value={{ open, toggleOpen, setOpen }}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar navigation={navigation} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header />
          <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">{children}</main>
        </div>
      </div>
    </SidebarContext.Provider>
  )
}

export default DashboardLayout
