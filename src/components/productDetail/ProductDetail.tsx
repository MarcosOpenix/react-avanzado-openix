'use client'
import { useUserStore } from '@/providers/user-store-provider'
import { Product, ProductCart } from '@/types/types'
import { Button, Divider, Image } from '@nextui-org/react'
import React from 'react'
import { useState } from 'react';
import QuantitySelector from '../common/quantitySelector/QuantitySelector'
import SelledText from '../selledText/SelledText'

interface Props {
    product: Product
}

const ProductDetail = ({ product }: Props) => {
    const [productCart, setProductCard] = useState<ProductCart>({ product: product, quantity: 1 })
    const { addCartProduct } = useUserStore(
        (state) => state,
    )

    const handleAddProduct = () => {
        addCartProduct(productCart)
    }

    const handleChangeQuantity = (value: number) => {
        setProductCard({ ...productCart, quantity: productCart.quantity + value })
    }

    return (
        <div className='bg-white flex flex-row gap-4 p-4 w-full'>
            <div className='flex justify-center items-center border-solid border-1 w-[60%] rounded-lg p-4'>
                <Image
                    alt="NextUI hero Image"
                    src={product.imgUrl}
                    className='max-w-[100%]'
                />
            </div>
            <div className='flex flex-col border-solid border-1 w-[40%] rounded-lg p-4 place-content-between'>
                <div>
                    <SelledText value={product.sold}/>
                    <div className='text-2xl font-semibold'>{product.name}</div>
                    <div className='text-3xl font-light'>$ {product.price}</div>
                    <Divider className="my-4" />
                    <div>{product.description}</div>
                    <Divider className="my-4" />
                </div>
                <div className='flex flex-col space-y-3'>
                    <div className='flex gap-4 items-center'>
                        <span>Cantidad: </span>
                        <QuantitySelector value={productCart.quantity} onChange={handleChangeQuantity} />
                    </div>
                    <Button color='primary'>Comprar </Button>
                    <Button color='primary' variant='flat' onPress={handleAddProduct}>Agregar al Carrito</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail