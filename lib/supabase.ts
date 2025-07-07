// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// lib/supabase.ts
export async function getProduct(slug: string) {
  const { data } = await supabase
    .from('products')
    .select(
      `
        *,
        images:product_images(url, alt_text),
        specifications:product_specs(key, value)
      `
    )
    .eq('slug', slug)
    .single()

  return {
    ...data,
    images: data?.images || [],
    specifications: data?.specifications || [],
  }
}
