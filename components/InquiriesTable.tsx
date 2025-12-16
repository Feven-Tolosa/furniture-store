'use client'
import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

type Inquiry = {
  id: string
  created_at: string
  product_name: string
  customer_name: string
  email: string
  message: string
  status: 'pending' | 'contacted' | 'completed'
}

export default function InquiriesTable() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const supabase = createClientComponentClient()

  useEffect(() => {
    const fetchInquiries = async () => {
      const { data } = await supabase
        .from('inquiries')
        .select(
          `
          *,
          products(name)
        `
        )
        .order('created_at', { ascending: false })

      setInquiries(
        data?.map((i) => ({
          ...i,
          product_name: i.products?.name,
        })) || []
      )
    }

    fetchInquiries()
  }, [])

  const updateStatus = async (id: string, status: string) => {
    await supabase.from('inquiries').update({ status }).eq('id', id)

    setInquiries(inquiries.map((i) => (i.id === id ? { ...i, status } : i)))
  }

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry) => (
            <tr key={inquiry.id}>
              <td>{inquiry.product_name}</td>
              <td>{inquiry.customer_name}</td>
              <td>{inquiry.email}</td>
              <td className='max-w-xs truncate'>{inquiry.message}</td>
              <td>
                <select
                  value={inquiry.status}
                  onChange={(e) => updateStatus(inquiry.id, e.target.value)}
                  className='border rounded p-1'
                >
                  <option value='pending'>Pending</option>
                  <option value='contacted'>Contacted</option>
                  <option value='completed'>Completed</option>
                </select>
              </td>
              <td>
                <a
                  href={`mailto:${inquiry.email}`}
                  className='text-blue-500 hover:underline'
                >
                  Reply
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
