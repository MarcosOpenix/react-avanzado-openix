
import { Metadata } from 'next';
import { fetchProduct } from '@/actions/productAction';
import { notFound } from 'next/navigation';
import ProductDetail from '@/components/productDetail/ProductDetail';

export const metadata: Metadata = {
  title: 'Producto',
};

export default async function ProducDetailPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = await fetchProduct(id);


  if (!product) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center justify-between gap-5">
      <ProductDetail product={product} />
    </main>
  );
}
