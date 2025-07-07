// components/OrderButton.tsx
'use client'
import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function OrderButton({
  productId,
  label,
}: {
  productId: string
  label: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const supabase = createClientComponentClient()

  const handleSubmit = async (formData: FormData) => {
    const { error } = await supabase.from('inquiries').insert({
      product_id: productId,
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    })

    if (!error) setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700'
      >
        {label}
      </button>

      {/* Dialog/Popup */}
      {isOpen && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center p-4'>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit(new FormData(e.currentTarget))
            }}
            className='bg-white p-6 rounded-lg max-w-md w-full'
          >
            <h3 className='text-xl font-bold mb-4'>Inquiry Form</h3>
            <input name='name' placeholder='Your Name' required />
            <input name='email' type='email' placeholder='Email' required />
            <textarea name='message' placeholder='Requirements' rows={4} />
            <button
              type='submit'
              className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      )}
    </>
  )
}
