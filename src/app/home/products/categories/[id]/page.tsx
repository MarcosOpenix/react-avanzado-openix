
import { Metadata } from 'next';
import { fetchProductsByCategory } from '@/actions/productAction';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/productCard/ProductCard';

export const metadata: Metadata = {
  title: 'Productos',
};

export default async function CategoryProducts({ params }: { params: { id: string } }) {
  const id = params.id;
  const products = await fetchProductsByCategory(id);
  if (!products) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center justify-between gap-5">
      {
        products.map(product => (
            <ProductCard key={product.id} product={product}/>
        ))
      }
    </main>
  );
}
