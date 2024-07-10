"use client";
import { getProduct } from '@/lib/getProduct'
import { NavBar } from "@/components/NavBar"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { BackgroundGradient } from "@/components/ui/background-gradient";

const Scene = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function ProductDetail({ params }: { params: { productId: string } }) {
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProduct(params.productId).then((data) => {
      setProduct(data)
      setLoading(false)
    })
  }, [params.productId])

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (!product) {
    return <div className="flex justify-center items-center h-screen">Product not found</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 flex items-center justify-center">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Product Image */}
              <div className="flex justify-center">
                <div className="w-48 h-48 p-2 bg-gray-800 rounded-lg">
                  <img
                    className="w-full h-full object-contain rounded-lg"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{product.name}</h1>
                <p className="text-gray-400 md:text-xl dark:text-gray-400">{product.description}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-4xl font-bold">${product.price.toFixed(2)}</span>
                </div>
                <div>
                  <Button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* 3D Model */}
              <div className="flex justify-center">
                <BackgroundGradient className="h-80 w-80 rounded-[22px] bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  {product.imageUrl &&
                    <Scene url="/BottleOpener.gltf" scale={60} textureUrl={product.imageUrl} productId={product.id}/>
                  }
                </BackgroundGradient>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}