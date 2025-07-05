// app/cart/page.tsx
'use client'
import { useCart } from '@/lib/store/cart-store'

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCart()

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-6'>Your Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='space-y-4'>
          {items.map((item) => (
            <div
              key={item.id}
              className='flex items-center justify-between border-b pb-4'
            >
              <div className='flex items-center gap-4'>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className='w-20 h-20 object-cover rounded'
                />
                <div>
                  <h3 className='font-medium'>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <input
                  type='number'
                  min='1'
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                  className='w-16 p-1 border rounded'
                />
                <button
                  onClick={() => removeItem(item.id)}
                  className='text-red-500 hover:text-red-700'
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className='mt-8 flex justify-between items-center'>
            <button
              onClick={clearCart}
              className='text-gray-500 hover:text-gray-700'
            >
              Clear Cart
            </button>
            <div className='text-lg font-semibold'>
              Total: ${total.toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
