import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} bg-primary-100`}>
        <header className='sticky top-0 z-50 bg-white shadow-sm'>
          <nav className='container mx-auto px-4 py-4'>
            <div className='flex justify-between items-center'>
              <h1
                className={`${playfair.className} text-2xl font-bold text-primary-900`}
              >
                Modern Furnish
              </h1>
              <div className='flex gap-6'>
                <a href='#' className='hover:text-primary-500'>
                  Shop
                </a>
                <a href='#' className='hover:text-primary-500'>
                  Collections
                </a>
                <a href='#' className='hover:text-primary-500'>
                  About
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className='bg-primary-900 text-white py-8'>
          <div className='container mx-auto px-4'>
            <p>© 2024 Modern Furnish. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
