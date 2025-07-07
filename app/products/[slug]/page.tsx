import { getProduct } from '@/lib/supabase'
import { getTranslations } from 'next-intl'
import GallerySwitcher from '@/components/GallerySwitcher'
import OrderButton from '@/components/OrderButton'

export default async function ProductPage({
  params: { slug, lang },
}: {
  params: { slug: string; lang: string }
}) {
  const product = await getProduct(slug) // Fetch from Supabase
  const t = await getTranslations({ locale: lang })

  return (
    <div className='max-w-7xl mx-auto p-4'>
      {/* Product Header */}
      <div className='mb-8'>
        <h1 className='text-4xl font-bold'>{product.name}</h1>
        <p className='text-lg text-gray-600'>{product.category}</p>
      </div>

      {/* Gallery + Details Grid */}
      <div className='grid md:grid-cols-2 gap-12'>
        <GallerySwitcher images={product.images} />

        <div className='space-y-6'>
          <div className='prose max-w-none'>
            <h2>{t('description')}</h2>
            <p>{product.description}</p>
          </div>

          <OrderButton productId={product.id} label={t('inquireNow')} />
        </div>
      </div>

      {/* Technical Specs Section */}
      <section className='mt-16'>
        <h2 className='text-2xl font-bold mb-6'>{t('specs')}</h2>
        <SpecsTable specs={product.specifications} />
      </section>
    </div>
  )
}
