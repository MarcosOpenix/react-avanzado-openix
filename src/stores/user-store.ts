import { ProductCart, User } from '@/types/types'
import { createJSONStorage, persist } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

export type UserState = {
  user?: User;
  cart: ProductCart[];
}

export type UserActions = {
  setUser: (data?: User) => void
  setCart: (cart?: ProductCart[]) => void
}

export type UserStore = UserState & UserActions

export const initUserStore = (): UserState => {
  return { user: undefined, cart: [] }
}

export const defaultInitState: UserState = {
  user: undefined,
  cart: []
}

export const createUserStore = (
  initState: UserState = defaultInitState,
) => {
  return createStore<UserStore>()(
    persist(
      (set) => ({
        ...initState,
        setUser: (data) => set((state) => ({...state, user: data})),
        setCart: (cart) => set((state) => ({...state, cart: cart}))
      }),
      {
        name: "currentUser",
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
}