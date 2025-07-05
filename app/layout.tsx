// app/layout.tsx
import Link from 'next/link'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

// app/layout.tsx
import { CartIcon } from '@/components/CartIcon'

// Inside your navigation component:
;<nav className='flex items-center gap-6'>
  <Link href='/products'>Products</Link>
  <CartIcon />
</nav>
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>
          <nav className='bg-white shadow-sm py-4 px-8'>
            <div className='flex justify-between items-center max-w-6xl mx-auto'>
              <Link href='/' className='text-xl font-bold'>
                Furniture Store
              </Link>
              <div className='flex gap-6'>
                <Link href='/products'>Products</Link>
                <Link href='/cart'>Cart</Link>
              </div>
            </div>
          </nav>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
