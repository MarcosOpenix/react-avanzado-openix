import { UserStoreContext, useUserStore } from '@/providers/user-store-provider'
import React from 'react'

const ProductContainer = () => {
    const { user, setUser } = useUserStore((state) => state)
  return (
    <div>{user?.email}</div>
  )
}

export default ProductContainer