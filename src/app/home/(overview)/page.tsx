
import FeaturedSection from '@/components/featuredSection/FeaturedSection'
import ProductCard from '@/components/productCard/ProductCard'
import { categories } from '@/services/data'
import React from 'react'

export default async function Home() {
  return (

    <main className="flex flex-col items-center justify-between gap-5">
      {
        categories.map(value => (
          <FeaturedSection key={value.id} categoryId={value.id} categoryName={value.name} />
        ))
      }
    </main>
  )
}