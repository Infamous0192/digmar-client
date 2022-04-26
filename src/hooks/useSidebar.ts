import { useContext } from 'react'
import { SidebarContext } from 'contexts/sidebar'

export const useSidebar = () => useContext(SidebarContext)
