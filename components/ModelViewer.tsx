import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON || ''
);

type SceneProps = {
  url: string;
  scale?: number;
  textureUrl?: string;
  productId?: string;
};

type RotatingModelProps = Omit<SceneProps, 'productId'> & {
  threshold: number;
};

const processImage = (img: HTMLImageElement, threshold: number): { texture: THREE.Texture; canvas: HTMLCanvasElement } | null => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  canvas.width = 890; // 3.5in = 890mm
  canvas.height = 510; // 2in = 510mm

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const maxWidth = canvas.width * 0.65;
  const maxHeight = canvas.height * 0.65;
  let width = maxWidth;
  let height = maxHeight;
  const aspectRatio = img.width / img.height;

  if (width / height > aspectRatio) {
    width = height * aspectRatio;
  } else {
    height = width / aspectRatio;
  }

  const x = canvas.width * 0.35 + (maxWidth - width) / 2;
  const y = canvas.height * 0.175 + (maxHeight - height) / 2;

  ctx.drawImage(img, x, y, width, height);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const brightness = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
    const pixelValue = brightness > threshold ? 255 : 0;
    data[i] = data[i + 1] = data[i + 2] = pixelValue;
  }

  ctx.putImageData(imageData, 0, 0);

  return { texture: new THREE.CanvasTexture(canvas), canvas };
};

const generateGCode = (canvas: HTMLCanvasElement): string => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let gcode = '';

  gcode += 'G21 ; Set units to millimeters\n';
  gcode += 'G90 ; Use absolute coordinates\n';
  gcode += 'M3 S0 ; Initialize laser power to 0\n';

  const scale = 0.1; // mm per pixel
  const feedRate = 1000; // Adjust this value based on your laser engraver's capabilities
  const laserPower = 255; // Maximum laser power

  for (let y = canvas.height - 1; y >= 0; y--) {
    let laserOn = false;
    for (let x = canvas.width - 1; x >= 0; x--) {
      const i = (y * canvas.width + x) * 4;
      const isWhite = imageData.data[i] === 255;

      if (isWhite) {
        if (!laserOn) {
          gcode += `G0 X${x * scale} Y${(canvas.height - 1 - y) * scale}\n`;
          gcode += `M3 S${laserPower}\n`;
          laserOn = true;
        }
        gcode += `G1 X${(x + 1) * scale} Y${(canvas.height - 1 - y) * scale} F${feedRate}\n`;
      } else if (laserOn) {
        gcode += `M3 S0\n`;
        laserOn = false;
      }
    }
    if (laserOn) {
      gcode += `M3 S0\n`;
    }
  }

  gcode += 'M5 ; Turn off laser\n';
  gcode += 'G0 X0 Y0 ; Return to home position\n';

  return gcode;
};

const RotatingModel: React.FC<RotatingModelProps> = ({ url, scale = 1, textureUrl, threshold }) => {
  const gltf = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [processedTexture, setProcessedTexture] = useState<THREE.Texture | null>(null);

  const baseMaterial = new THREE.MeshPhongMaterial({
    color: '#141414',
    specular: 0xFFFFFF,
    shininess: 30,
  });

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = textureUrl || "/fallbackTexture.png";
    img.onload = () => {
      const result = processImage(img, threshold);
      if (result) setProcessedTexture(result.texture);
    };
  }, [textureUrl, threshold]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX((event.clientX / window.innerWidth) * 2 - 1);
      setMouseY(-(event.clientY / window.innerHeight) * 2 + 1);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = mouseX * Math.PI * 0.06;
      modelRef.current.rotation.x = mouseY * Math.PI * 0.06;
    }
  });

  useEffect(() => {
    if (processedTexture) {
      const textureMaterial = new THREE.MeshPhongMaterial({
        color: '#4f4f4f',
        specular: 0xFFFFFF,
        shininess: 30,
        map: processedTexture,
        bumpMap: processedTexture,
        bumpScale: 0.02,
      });

      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.name === 'mesh0_mesh_14' || child.position.z > 0) {
            child.material = textureMaterial;
          } else {
            child.material = baseMaterial;
          }
        }
      });
    }
  }, [gltf.scene, processedTexture]);

  return (
    <primitive object={gltf.scene} ref={modelRef} scale={[scale, scale, scale]} />
  );
};

const Scene: React.FC<SceneProps> = ({ url, scale, textureUrl, productId }) => {
  const [threshold, setThreshold] = useState(0.5);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateAndUploadGCode = useCallback(async () => {
    if (!productId) {
      console.log('No productId provided, skipping G-code generation');
      return;
    }

    if (isGenerating) return;
    setIsGenerating(true);

    try {
      const { data, error } = await supabase
        .from('products')
        .select('gcode')
        .eq('id', productId)
        .single();

      if (error) throw error;

      if (data && data.gcode) {
        console.log('G-code already exists for this product');
        setIsGenerating(false);
        return;
      }

      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = textureUrl || "/fallbackTexture.png";
      img.onload = async () => {
        const result = processImage(img, threshold);
        if (result && result.canvas) {
          const generatedGCode = generateGCode(result.canvas);

          const { error: uploadError } = await supabase
            .from('products')
            .update({ gcode: generatedGCode })
            .eq('id', productId);

          if (uploadError) throw uploadError;

          console.log('G-code generated and uploaded successfully');
        }
        setIsGenerating(false);
      };
    } catch (error) {
      console.error('Error generating or uploading G-code:', error);
      setIsGenerating(false);
    }
  }, [threshold, textureUrl, productId, isGenerating]);

  useEffect(() => {
    if (productId) {
      generateAndUploadGCode();
    }
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="relative w-full h-full">
        <Canvas className="absolute inset-0">
          <ambientLight intensity={5} />
          <pointLight position={[0, 0, 5]} />
          <pointLight position={[0, 0, -5]} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <RotatingModel
            url={url}
            scale={scale}
            textureUrl={textureUrl}
            threshold={threshold}
          />
        </Canvas>
      </div>
      {!productId && (
        <div className="mt-5 flex flex-col items-center w-full max-w-[300px]">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={threshold}
            onChange={(e) => setThreshold(parseFloat(e.target.value))}
            className="w-full mb-2.5"
          />
          <span className="text-center">Brightness: {threshold.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};

export default Scene;