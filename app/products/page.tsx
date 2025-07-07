// app/products/page.tsx
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default async function ProductsPage() {
  const { data: products } = await supabase.from('products').select('*')

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-6'>Our Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {products?.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className='border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
              <img
                src={product.image_url}
                alt={product.name}
                className='w-full h-48 object-cover'
              />

              <div className='p-4'>
                <h2 className='text-lg font-semibold'>{product.name}</h2>
                <p className='text-gray-600'>${product.price.toFixed(2)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
