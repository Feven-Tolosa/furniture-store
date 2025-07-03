// app/cart/page.tsx
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'

export default async function CartPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className='p-4'>
      <h1>Your Cart</h1>
      {/* Your cart content here */}
    </div>
  )
}
