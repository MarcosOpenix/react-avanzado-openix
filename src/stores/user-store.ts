import { User } from '@/types/types'
import { createJSONStorage, persist } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

export type UserState = {
  user?: User
}

export type UserActions = {
  setUser: (data?: User) => void
}

export type UserStore = UserState & UserActions

export const initUserStore = (): UserState => {
  return { user: undefined }
}

export const defaultInitState: UserState = {
  user: undefined
}

export const createUserStore = (
  initState: UserState = defaultInitState,
) => {
  return createStore<UserStore>()(
    persist(
      (set) => ({
        ...initState,
        setUser: (data) => set((state) => ({...state, user: data})),
        
      }),
      {
        name: "currentUser",
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
}