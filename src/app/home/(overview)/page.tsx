
import FeaturedSection from '@/components/featuredSection/FeaturedSection'
import { getCategories } from '@/services/apiService';
import React from 'react'

export default async function Home() {
  const categories = await getCategories();
  return (

    <main className="flex flex-col items-center justify-between gap-5">
      {
        categories.map((value: any) => (
          <FeaturedSection key={value.id} categoryId={value.id} categoryName={value.name} />
        ))
      }
    </main>
  )
}