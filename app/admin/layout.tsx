// app/admin/layout.tsx
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth()

  // Replace with your admin user ID check
  if (userId !== process.env.ADMIN_USER_ID) {
    redirect('/')
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <AdminNavbar />
      <div className='p-4'>{children}</div>
    </div>
  )
}
