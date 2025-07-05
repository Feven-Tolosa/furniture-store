// app/products/[id]/page.tsx
import { supabase } from '@/lib/supabase'
import AddToCart from '@/components/AddToCart'

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const { data: product } = await supabase
    .from('products')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!product) return <div>Product not found</div>

  return (
    <div className='container mx-auto p-4'>
      <div className='grid md:grid-cols-2 gap-8'>
        <img
          src={product.image_url}
          alt={product.name}
          className='w-full rounded-lg shadow-md'
        />
        <div>
          <h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
          <p className='text-xl text-gray-800 mb-6'>
            ${product.price.toFixed(2)}
          </p>
          <p className='text-gray-600 mb-8'>{product.description}</p>
          <AddToCart
            product={{
              id: product.id,
              name: product.name,
              price: product.price,
              imageUrl: product.image_url,
            }}
          />
        </div>
      </div>
    </div>
  )
}
