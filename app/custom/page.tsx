"use client";

import React, { useState, useRef, useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { BackgroundGradient } from "@/components/ui/background-gradient";

import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function Component() {
  const [image, setImage] = useState<string | null>(null);
  const [textureUrl, setTextureUrl] = useState<string>("/BottleOpener3d.png"); // Default texture URL
  const [imageScale, setImageScale] = useState<number>(100); // Initial image scale set to 100%
  const [xOffset, setXOffset] = useState<number>(0); // Initial X offset
  const [yOffset, setYOffset] = useState<number>(0); // Initial Y offset
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (image) {
      createSilhouette(image);
    }
  }, [image, imageScale, xOffset, yOffset]); // Update canvas whenever image, imageScale, xOffset, or yOffset changes

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const createSilhouette = (src: string) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const dpi = 96; // 96 pixels per inch
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing

          // Calculate dimensions and scaling
          const canvasWidth = 3.5 * dpi;
          const canvasHeight = 2 * dpi;
          const scaleValue = Math.min(canvasWidth / img.width, canvasHeight / img.height) * (imageScale / 100);
          const newWidth = img.width * scaleValue;
          const newHeight = img.height * scaleValue;
          const offsetX = (canvasWidth - newWidth) * 0.5 + xOffset; // Adjusted X offset
          const offsetY = (canvasHeight - newHeight) * 0.5 + yOffset; // Adjusted Y offset

          // Draw the image scaled and positioned within the canvas
          ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

          // Convert canvas content to a new image file (silhouette)
          const silhouetteDataUrl = canvas.toDataURL();
          setTextureUrl(silhouetteDataUrl); // Set canvas image as textureUrl for 3D model viewer
        }
      }
    };
  };

  const handleImageScaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newImageScale = Number(event.target.value);
    setImageScale(newImageScale);
  };

  const handleXOffsetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newXOffset = Number(event.target.value);
    setXOffset(newXOffset);
  };

  const handleYOffsetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newYOffset = Number(event.target.value);
    setYOffset(newYOffset);
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
          <div>
            <BackgroundGradient className="col-span-1 h-80 rounded-[22px] bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Scene url="/BottleOpener.gltf" scale={60} textureUrl={textureUrl} /> {/* Pass textureUrl here */}
            </BackgroundGradient>
            <div className="text-center mt-6 text-lg font-semibold">
              Preview
            </div>
            <div className="mt-4 flex items-center justify-center flex-col">
              <div className="flex items-center mb-2">
                <label className="text-gray-600 mr-2" htmlFor="imageScaleSlider">Scale:</label>
                <input
                  id="imageScaleSlider"
                  type="range"
                  min="10"
                  max="200"
                  value={imageScale}
                  onChange={handleImageScaleChange}
                  className="w-64"
                />
                <span className="ml-2 text-gray-600">{imageScale}%</span>
              </div>
              <div className="flex items-center mb-2">
                <label className="text-gray-600 mr-2" htmlFor="xOffsetSlider">X Offset:</label>
                <input
                  id="xOffsetSlider"
                  type="range"
                  min="-150"
                  max="150"
                  value={xOffset}
                  onChange={handleXOffsetChange}
                  className="w-64"
                />
                <span className="ml-2 text-gray-600">{xOffset}</span>
              </div>
              <div className="flex items-center">
                <label className="text-gray-600 mr-2" htmlFor="yOffsetSlider">Y Offset:</label>
                <input
                  id="yOffsetSlider"
                  type="range"
                  min="-150"
                  max="150"
                  value={yOffset}
                  onChange={handleYOffsetChange}
                  className="w-64"
                />
                <span className="ml-2 text-gray-600">{yOffset}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Canvas for rendering the dynamic silhouette */}
      <canvas ref={canvasRef} width={3.5 * 96} height={2 * 96} style={{ display: "none" }} />
    </>
  );
}
