'use client'
import { Product } from '@/types/types';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation';
import React from 'react'
import SelledText from '../selledText/SelledText';

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
                </div>
            </CardHeader>
            <CardBody className="overflow-visible p-0 w-[15rem] h-[15rem]">
                <div className="flex items-center justify-center overflow-hidden">
                    <Image
                        src={product.imgUrl}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain"
                        width="100%"
                        height="100%"
                    />
                </div>
            </CardBody>
            <CardFooter className="text-small justify-between items-baseline">
                <p className="text-default-500">{`$${product.price}`}</p>
                <SelledText value={product.sold} />
            </CardFooter>
        </Card>
    )
}

export default ProductCard