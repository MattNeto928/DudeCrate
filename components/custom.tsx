/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iBHKGwdXNHB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import React from "react"
import { NavBar } from "@/components/NavBar"

export default function Component() {
  return (
    <> 
    <NavBar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">Customize Your Product</h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Upload your PNG logo effortlessly and watch it transform into a powerful marketing tool perfect for promoting all brands! 
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              src="/placeholder.svg"
              width={550}
              height={310}
              alt="Hero Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="mt-4">
              <input
                type="file"
                accept="image/png"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            <img
              src="/placeholder.svg"
              width={300}
              height={400}
              alt="Additional Image 1"
              className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover object-center"
            />
            <img
              src="/placeholder.svg"
              width={300}
              height={400}
              alt="Additional Image 2"
              className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover object-center"
            />
            <img
              src="/placeholder.svg"
              width={300}
              height={400}
              alt="Additional Image 3"
              className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover object-center"
            />
            <img
              src="/placeholder.svg"
              width={300}
              height={400}
              alt="Additional Image 4"
              className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover object-center"
            />
            <img
              src="/placeholder.svg"
              width={300}
              height={400}
              alt="Additional Image 5"
              className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </section>
    </>
  )
}