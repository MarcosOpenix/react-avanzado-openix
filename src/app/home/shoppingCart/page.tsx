
import ShoppingCartDetail from '@/components/shoppingCartDetail/ShoppingCartDetail'
import React from 'react'

export default async function ShoppingCartPage() {
    return (
        <main className="flex flex-col items-center justify-between gap-5">
            <ShoppingCartDetail/>
        </main>
    )
}