


import React from 'react'
import ProductCard from '../productCard/ProductCard'
import { products } from '../../services/data'
import { Button } from '@nextui-org/react';
import Link from 'next/link';

interface Props {
    categoryName: string;
    categoryId: number
}

const FeaturedSection = ({ categoryName, categoryId }: Props) => {
    
    return (
        <div className='flex flex-col bg-green-300 rounded-3xl'>
            <h1 className='text-xl'>
                Destacados en {categoryName}
            </h1>
            <div className=' flex flex-row w-full h-full flex-wrap p-4 '>
                <div className='flex flex-row flex-nowrap gap-4 overflow-y-auto'>
                    {
                        products.map(value => (
                            <ProductCard
                                key={value.id}
                                product={value}
                            />
                        ))
                    }
                </div>
            </div>
            <Link className='text-center' href={`/home/products/categories/${categoryId}`}>Ver Todo</Link>
        </div>
    )
}

export default FeaturedSection