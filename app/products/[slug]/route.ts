// app/[lang]/products/[slug]/route.ts
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params: { slug, lang },
}: {
  params: { slug: string; lang: string }
}) {
  const t = await getTranslations({ locale: lang })
  const product = await getProduct(slug)

  return {
    title: `${product.name} | ${t('productPage')}`,
    description: product.description.slice(0, 160),
  }
}
