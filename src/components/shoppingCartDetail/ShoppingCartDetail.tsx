'use client'
import { useUserStore } from '@/providers/user-store-provider'
import React, { useLayoutEffect, useState } from 'react'
import ProductCartDetail from '../productCartDetail/ProductCartDetail';
import { Button, Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import BuySummary from '../buySummary/BuySummary';

const ShoppingCartDetail = () => {
  const { cart } = useUserStore(state => state);
  const [resumen, setResumen] = useState({quantity: 0, price: 0})

  useLayoutEffect(() => {
    getTotalQuantity()
  }, [cart])
  
  const getTotalQuantity = () => {
    let quantityProducts = {quantity: 0, price: 0};
    cart.forEach(value => {
      quantityProducts.quantity = value.quantity + quantityProducts.quantity;
      quantityProducts.price = (value.product.price * value.quantity) + quantityProducts.price
    })
    setResumen(quantityProducts)
  }
  

  return (
    <div className='flex flex-row gap-4'>
      <div className='flex flex-col w-[70%]'>
        {
          cart.map(value => (
            <ProductCartDetail key={value.product.id} productCart={value}></ProductCartDetail>
          ))
        }
      </div>
      <div className='w-[30%]'>
        <BuySummary showBuyButton/>
      </div>
    </div>
  )
}

export default ShoppingCartDetail