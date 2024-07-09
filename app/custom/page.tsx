"use client";
import React, { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function Component() {
  const [image, setImage] = useState<string | null>(null);
  const [textureUrl, setTextureUrl] = useState<string>("/DudeCrateLogo.png");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setTextureUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <NavBar />
      <section className="w-full p-20 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="space-y-4 lg:col-span-1">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">Customize Your Product</h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Upload your PNG logo effortlessly and watch it transform into a powerful marketing tool perfect for promoting all brands!
            </p>
          </div>
          <div className="col-span-1 mt-8 lg:mt-0">
            <input
              type="file"
              accept="image/png"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
            />
            {image && (
              <img src={image} alt="Uploaded" className="mt-4 rounded-lg shadow-lg" style={{ maxWidth: "100%", maxHeight: "400px" }} />
            )}
          </div>
          <div className="col-span-1 mt-8 lg:mt-0">
            <BackgroundGradient className="h-80 rounded-[22px] bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Scene url="/BottleOpener.gltf" scale={60} textureUrl={textureUrl} />
            </BackgroundGradient>
            <div className="text-center mt-6 text-lg font-semibold">
              Preview
            </div>
          </div>
        </div>
      </section>
    </>
  );
}