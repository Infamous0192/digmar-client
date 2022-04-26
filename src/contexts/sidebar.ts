import { createContext } from 'react'

export interface ISidebarContext {
  open: boolean
  toggleOpen: () => void
  setOpen: (value: boolean) => void
}

export const defaultState = {
  open: false,
  toggleOpen: () => {},
  setOpen: (value: boolean) => {},
}

export const SidebarContext = createContext<ISidebarContext>(defaultState)
