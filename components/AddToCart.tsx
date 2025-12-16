'use client'
import { useCart } from '@/lib/store/cart-store'

export function AddToCart({
  product,
}: {
  product: { id: string; name: string; price: number; imageUrl: string }
}) {
  const addItem = useCart((state) => state.addItem)

  return (
    <button
      onClick={() => addItem(product)}
      className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'
    >
      Add to Cart
    </button>
  )
}

// Add this if missing:
export default AddToCart
