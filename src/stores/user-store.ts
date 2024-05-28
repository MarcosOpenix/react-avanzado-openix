import { ProductCart, User } from '@/types/types'
import { createJSONStorage, persist } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

export type UserState = {
  user?: User;
  cart: ProductCart[];
}

export type UserActions = {
  setUser: (data?: User) => void
  setCart: (cart?: ProductCart[]) => void;
  addCartProduct: (proudctCart: ProductCart) => void;
  changeQuantityProduct: (proudctId: number, quantity: number) => void;
  deleteProductCart: (productId: number) => void;
  // getQuantityAll: () => number;
}

export type UserStore = UserState & UserActions

export const initUserStore = (): UserState => {
  return defaultInitState
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
      (set, get) => ({
        ...initState,
        setUser: (data) => set((state) => ({ ...state, user: data })),
        setCart: (cart) => set((state) => ({ ...state, cart: cart })),
        addCartProduct: (productCart) => set((state) => {
          const isAdded = state.cart.some(value => value.product.id === productCart.product.id);
          if (isAdded) {
            const aux = state.cart.map(value => {
              if (value.product.id === productCart.product.id) {
                return {
                  ...value,
                  quantity: value.quantity + productCart.quantity
                }
              }
              return value
            })
            return { ...state, cart: aux }
          } else {
            return { ...state, cart: [...state.cart, productCart] }
          }
        }),
        changeQuantityProduct: (productId, quantity) => set((state) => {
          const aux = state.cart.map(value => {
            if (value.product.id === productId) {
              return {
                ...value,
                quantity: quantity
              }
            }
            return value
          })
          return { ...state, cart: aux }
        }),
        deleteProductCart: (productId) => set((state) => {
          const aux = state.cart.filter(value => value.product.id != productId);
          return {
            ...state,
            cart: aux
          }
        }),
        // getQuantityAll: () => {
        //   const state = get();
        //   let quantityProducts = 0;
        //   state.cart.forEach(value => {
        //     quantityProducts = value.quantity + quantityProducts;
        //   })
        //   return quantityProducts
        // }
      }),
      {
        name: "currentUser",
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
}