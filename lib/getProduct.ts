import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON || ''
)

export async function getProduct(productId: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', productId)
    .single()

  if (error) {
    console.error('Error fetching product:', error)
    return null
  }

  if (!data) {
    return null
  }

  return {
    id: data.id,
    name: data.name,
    price: data.price,
    imageUrl: data.image_url,
    description: data.description
  }
}