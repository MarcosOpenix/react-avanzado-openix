'use client'
import { Product } from '@/types/types';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation';
import React from 'react'

interface Props {
    product: Product
}

const ProductCard = ({ product }: Props) => {
    const router = useRouter();

    const handleViewDetails = () => {
        router.push(`/home/products/product/${product.id}`)
    }
    return (
        <Card className='' shadow="sm" key={"5161"} isPressable onPress={handleViewDetails}>
            <CardHeader>
                <div className='flex flex-col flex-wrap bg'>
                    <b>{product.name}</b>
                    <b>Vendidos: {product.sold}</b>
                </div>
            </CardHeader>
            <CardBody className="overflow-visible p-0 w-[20rem] h-[20rem]">
                <Image
                    alt={product.name}
                    className="object-contain bg-transparent"
                    src={product.imgUrl}
                    width={200}
                    height={50}
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <p className="text-default-500">{`$${product.price}`}</p>
            </CardFooter>
        </Card>
    )
}

export default ProductCard