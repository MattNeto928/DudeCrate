"use client";

import React, { useState, useRef } from "react";
import { NavBar } from "@/components/NavBar";
import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function Component() {
  const [image, setImage] = useState<string | null>(null);
  const [silhouette, setSilhouette] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        createSilhouette(reader.result as string);  // Create silhouette after reading image
      };
      reader.readAsDataURL(file);
    }
  };

  const createSilhouette = (src: string) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;

          for (let i = 0; i < data.length; i += 4) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            const threshold = 128;
            const value = avg > threshold ? 255 : 0;
            data[i] = data[i + 1] = data[i + 2] = value;
          }

          ctx.putImageData(imageData, 0, 0);
          setSilhouette(canvas.toDataURL());
        }
      }
    };
  };

  return (
    <>
      <NavBar />

      <div style={{ width: '100vw', height: '100vh' }}>
        <Scene url="/BottleOpener.gltf" scale={50} textureUrl="BottleOpener3d.png" uploadedTextureUrl={image || undefined} /> {/* Pass uploadedTextureUrl */}
      </div>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">Customize Your Product</h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Upload your PNG logo effortlessly and watch it transform into a powerful marketing tool perfect for promoting all brands!
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <input
              type="file"
              accept="image/png"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
            />
            <canvas ref={canvasRef} style={{ display: "none" }} />
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
            {/* Render your custom images here */}
          </div>
        </div>
      </section>
    </>
  );
}
