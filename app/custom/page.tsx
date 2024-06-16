// src/app/page.tsx
"use client"

import React, { useState } from "react"
import { NavBar } from "@/components/NavBar"
import './styles.css'; // Import your custom styles here
import ImageUpload from '@/components/ImageUpload'; 

export default function Component() {
  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (file.type === 'image/png') {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            setImage(reader.result);
          } else {
            alert("Failed to read image file.");
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload a PNG image.");
      }
    } else {
      alert("Please select a file.");
    }
  };

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
            <ImageUpload onChange={handleFileChange} />
            {image && (
              <div>
                <h3>Uploaded Image:</h3>
                <img src={image} alt="Uploaded" className="uploaded-image" style={{ maxWidth: '100%' }} />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            <img
              src={image || "/placeholder.svg"} // Display uploaded image or placeholder
              width={300}
              height={400}
              alt="Custom Image"
              className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover object-center"
            />
            <img
              src={image || "/placeholder.svg"} // Display uploaded image or placeholder
              width={300}
              height={400}
              alt="Custom Image"
              className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover object-center"
            />
            <img
              src={image || "/placeholder.svg"} // Display uploaded image or placeholder
              width={300}
              height={400}
              alt="Custom Image"
              className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover object-center"
            />
            <img
              src={image || "/placeholder.svg"} // Display uploaded image or placeholder
              width={300}
              height={400}
              alt="Custom Image"
              className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover object-center"
            />
            <img
              src={image || "/placeholder.svg"} // Display uploaded image or placeholder
              width={300}
              height={400}
              alt="Custom Image"
              className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover object-center"
            />
            <img
              src={image || "/placeholder.svg"} // Display uploaded image or placeholder
              width={300}
              height={400}
              alt="Custom Image"
              className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover object-center"
            />
            {/* Additional images */}
          </div>
        </div>
      </section>
    </>
  )
}
