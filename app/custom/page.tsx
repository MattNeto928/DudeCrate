"use client";

import React, { useState, useRef } from "react";
import { NavBar } from "@/components/NavBar";
import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('@/components/ModelViewer'), { ssr: false });
import Cropper from 'react-easy-crop';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import { getCroppedImg } from '@/utils/cropImage'; // Ensure correct path

export default function Component() {
  const [image, setImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [cropping, setCropping] = useState(false); // State to manage cropping UI visibility
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setCropping(true); // Show cropping UI immediately after image upload
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropImage = async () => {
    try {
      if (!canvasRef.current || !image) return;
      const croppedImage = await getCroppedImg(image, crop, zoom);
      setCroppedImage(croppedImage);
      setCropping(false); // Hide cropping UI after image is cropped
    } catch (error) {
      console.error('Error cropping image:', error);
    }
  };

  const onCropChange = (crop: { x: number; y: number }) => {
    setCrop(crop);
  };

  const onZoomChange = (event: React.ChangeEvent<{}>, zoom: number | number[]) => {
    if (typeof zoom === 'number') {
      setZoom(zoom);
    }
  };

  return (
    <>
      <NavBar />

      <div style={{ width: '100vw', height: '100vh' }}>
        <Scene url="/BottleOpener.gltf" scale={50} textureUrl="BottleOpener3d.png" uploadedTextureUrl={croppedImage || undefined} />
      </div>

      {cropping && image && (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-4">Adjust Image</h2>
            <div className="flex justify-center items-center mb-4">
              <div className="crop-container">
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={onCropChange}
                  onZoomChange={onZoomChange}
                  cropShape="round"
                />
              </div>
            </div>
            <div className="flex justify-center items-center mb-4">
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                onChange={onZoomChange}
                style={{ width: '80%' }}
              />
            </div>
            <div className="flex justify-center items-center">
              <Button variant="contained" color="primary" onClick={handleCropImage}>Crop Image</Button>
            </div>
          </div>
        </section>
      )}

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
                <img src={image} alt="Uploaded" className="uploaded-image" style={{ maxWidth: '100%', cursor: 'pointer' }} onClick={() => setCropping(true)} />
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
