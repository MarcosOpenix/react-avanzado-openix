
import { Metadata } from 'next';
import { Button, Divider, Image } from '@nextui-org/react';

export const metadata: Metadata = {
  title: 'Edit',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <main className="flex flex-col items-center justify-between gap-5">
      <div className='bg-white flex flex-row gap-4 p-4 w-full'>
        <Image
          alt="NextUI hero Image"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          className='max-w-[100%]'
        />
        <div className='flex flex-col border-solid border-1 w-[40%] rounded-lg p-4 place-content-between'>
          <div>
            <div className='text-xs text-gray-500 mb-2'>+100 vendidos</div>
            <div className='text-2xl font-semibold'>Laptop HP 15 PAVILON</div>
            <div className='text-3xl font-light'>$ 156.5465</div>
            <Divider className="my-4" />
            <div>lorem ipstu isod oosooo osdieeei inni asdfasd asdf asdfa sdf asdfasd asdfasd asdfasdf asdfa sdfasd asdfasdf asdf asdf asdfasdfasdf asdf asdf asdf asdf as</div>
          </div>
          <div className='flex flex-col space-y-3'>
            <Button color='primary'>Comprar </Button>
            <Button color='primary' variant='flat'>Agregar al Carrito</Button>
          </div>
        </div>

      </div>
    </main>
  );
}
