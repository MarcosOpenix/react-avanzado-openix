

import React from 'react'
import ProductCard from '../productCard/ProductCard'
import { products } from '../../services/data'
import { Button } from '@nextui-org/react';

interface Props {
    categoryName: string;
    categoryId: number
}

const FeaturedSection = ({ categoryName, categoryId }: Props) => {
    return (
        <div className='flex flex-col'>
            <h1 className='text-xl'>
                Destacados en {categoryName}
            </h1>
            <div className='bg-green-300 flex flex-row w-full h-full flex-wrap p-4 rounded-3xl'>
                <div className='flex flex-row flex-wrap gap-4'>
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
            <Button color='primary'>Ver Todo</Button>
        </div>
    )
}

export default FeaturedSection