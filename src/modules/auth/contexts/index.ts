import { createContext } from 'react'

export type AuthActionType = 'LOGIN' | 'LOGOUT'

export interface AuthAction {
  type: AuthActionType
  payload?: {
    creds?: Creds,
    token?: string
  }
}

export type Creds = {
  id_user: string | number
  email: string
  username: string
}

export interface AuthState {
  creds: Creds | null
  token: string | null
  isLoaded: boolean
  isAuthenticated: boolean
}

export interface IAuthContext {
  state: AuthState
  dispatch: React.Dispatch<AuthAction>
}

export const initialState = { creds: null, token: null, isLoaded: false, isAuthenticated: false }

export const AuthContext = createContext<IAuthContext>(null!)
