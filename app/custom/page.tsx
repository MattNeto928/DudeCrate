"use client";

import React, { useState, useRef } from "react";
import { NavBar } from "@/components/NavBar";
import { BackgroundGradient } from "@/components/ui/background-gradient";

import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function Component() {
  const [image, setImage] = useState<string | null>(null);
  const [silhouette, setSilhouette] = useState<string | null>(null);
  const [textureUrl, setTextureUrl] = useState<string>("/BottleOpener3d.png"); // Default texture URL
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
      // Calculate dimensions for the canvas (3.5 inches by 2 inches at 96 DPI)
      const dpi = 96; // 96 pixels per inch
      const canvasWidth = 3.5 * dpi;
      const canvasHeight = 2 * dpi;

      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          // Set black background
          ctx.fillStyle = 'black';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Calculate scaling factor for resizing the image (adjust scale factor as needed)
          const scale = Math.min(canvasWidth / img.width, canvasHeight / img.height) * 0.5; // Adjusted to 50% scale
          const newWidth = img.width * scale;
          const newHeight = img.height * scale;

          // Calculate positioning to move the image to the right and center vertically
          const offsetX = (canvasWidth - newWidth) * 0.65; // Adjusted to move 65% to the right
          const offsetY = (canvasHeight - newHeight - 40) / 2; // Center vertically

          // Draw the image scaled and positioned within the canvas
          ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

          // Convert canvas content to grayscale
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;

          for (let i = 0; i < data.length; i += 4) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = data[i + 1] = data[i + 2] = avg; // Set R, G, B channels to average for grayscale
          }

          ctx.putImageData(imageData, 0, 0);

          // Convert canvas content to a new image file (silhouette)
          const silhouetteDataUrl = canvas.toDataURL();
          setSilhouette(silhouetteDataUrl);

          // Set silhouette as textureUrl for 3D model viewer
          setTextureUrl(silhouetteDataUrl);
        }
      }
    };
  };

  return (
    <>
      <NavBar />

      <section className="w-full p-20 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="space-y-4 lg:col-span-1 "> {/* Adjust col-span to 2 columns for larger width */}
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
            <canvas ref={canvasRef} />
          </div>
          <div>
            <BackgroundGradient className="col-span-1 h-80 rounded-[22px] bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Scene url="/BottleOpener.gltf" scale={60} textureUrl={textureUrl} /> {/* Pass textureUrl here */}
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
