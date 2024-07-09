import { createClient } from '@supabase/supabase-js'
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { NavBar } from "@/components/NavBar"

export const revalidate = 0; // needed to prevent caching error with Next.js

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON || ''
)

export default async function NBATeamsCollection() {
  // Fetch all products
  const { data: nbaProducts, error } = await supabase
    .from('products')
    .select('*')
    .eq('collection', 'nba')
    .order('name', { ascending: true }) // Order by name alphabetically

  if (error) {
    console.error('Error fetching products:', error)
    return <div>Error loading products. Please try again later.</div>
  }

  console.log('All products:', nbaProducts)

  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">NBA Teams Bottle Openers</h1>
        <p className="text-xl mb-4">Total products: {nbaProducts?.length || '0'}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {nbaProducts.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="h-full">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-4 flex flex-col items-center justify-between h-full">
                  <div className="flex-grow flex items-center justify-center">
                    <img
                      src={product.image_url || '/placeholder.png'}
                      alt={`${product.name} logo`}
                      width={100}
                      height={100}
                      className="object-contain h-24 w-24"
                    />
                  </div>
                  <p className="text-sm text-center mt-2">{product.name}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}