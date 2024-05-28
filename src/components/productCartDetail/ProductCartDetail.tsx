'use client'
import { useUserStore } from '@/providers/user-store-provider';
import { Product, ProductCart } from '@/types/types';
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useState } from 'react';
import QuantitySelector from '../common/quantitySelector/QuantitySelector';

interface Props {
    productCart: ProductCart
}

const ProductCartDetail = ({ productCart }: Props) => {
    const router = useRouter();
    const { changeQuantityProduct, deleteProductCart } = useUserStore(state => state);

    const handleViewDetails = () => {
        router.push(`/home/products/product/${productCart.product.id}`)
    }

    const handleChangeQuantity = (value: number) => {
        changeQuantityProduct(productCart.product.id, productCart.quantity + (value))
    }

    const handleDelete = () => {
        deleteProductCart(productCart.product.id)
    }

    return (
        <Card className='p-[16px]' shadow="sm" key={"5161"} >
            <CardBody className="overflow-visible p-0">
                <div className='flex flex-row h-[250px] '>
                    <div className="flex items-center justify-center overflow-hidden">
                        <Image
                            src={productCart.product.imgUrl}
                            alt={productCart.product.name}
                            className="max-w-full max-h-full object-contain"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div>
                            <div className='font-bold'>{productCart.product.name}</div>
                            <div>{productCart.product.description}</div>
                        </div>
                        <div className='flex flex-row'>
                            <Button color='primary' variant='light' disableRipple onPress={handleDelete}>Eliminar</Button>
                            <Button color='primary' variant='light' disableRipple onPress={handleViewDetails}>Ver detalles</Button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <QuantitySelector value={productCart.quantity} onChange={handleChangeQuantity} />
                        <div className='text-3xl font-light whitespace-nowrap'>{`$${productCart.product.price}`}</div>
                    </div>
                    
                </div>
            </CardBody>
        </Card>
    )
}

export default ProductCartDetail