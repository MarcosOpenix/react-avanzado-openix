
import { Metadata } from 'next';
import { fetchProduct, fetchProductsByCategory } from '@/actions/productAction';
import { notFound } from 'next/navigation';
import ProductDetail from '@/components/productDetail/ProductDetail';
import ProductCard from '@/components/productCard/ProductCard';

export const metadata: Metadata = {
  title: 'Edit',
};

export default async function CategoryProducts({ params }: { params: { id: string } }) {
  const id = params.id;
  const products = await fetchProductsByCategory(id);
    console.log(products)
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
