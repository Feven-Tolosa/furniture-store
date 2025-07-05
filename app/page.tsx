// app/page.tsx
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default async function Home() {
  const { data: featuredProducts } = await supabase
    .from('products')
    .select('*')
    .limit(3);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Modern Furniture Store</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {featuredProducts?.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
            <img 
              src={product.image_url} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-2">${product.price}</p>
              <Link 
                href={`/products/${product.id}`}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}