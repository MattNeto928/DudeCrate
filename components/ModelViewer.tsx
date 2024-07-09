import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

type SceneProps = {
  url: string;
  scale?: number;
  textureUrl?: string;
};

type RotatingModelProps = SceneProps & {
  threshold: number;
};

const RotatingModel: React.FC<RotatingModelProps> = ({ url, scale = 1, textureUrl, threshold }) => {
  const gltf = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null!);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [processedTexture, setProcessedTexture] = useState<THREE.Texture | null>(null);

  const baseMaterial = new THREE.MeshPhongMaterial({
    color: '#141414',
    specular: 0xFFFFFF,
    shininess: 30,
  });

  const processImage = (img: HTMLImageElement, threshold: number) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    canvas.width = 1024;
    canvas.height = 640;

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
      const engraved = brightness > threshold ? 255 : 0;
      data[i] = data[i + 1] = data[i + 2] = engraved;
    }

    ctx.putImageData(imageData, 0, 0);

    return new THREE.CanvasTexture(canvas);
  };

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = textureUrl || "/fallbackTexture.png";
    img.onload = () => {
      const newTexture = processImage(img, threshold);
      if (newTexture) setProcessedTexture(newTexture);
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

const Scene: React.FC<SceneProps> = ({ url, scale, textureUrl }) => {
  const [threshold, setThreshold] = useState(0.5);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%' }}>
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Canvas style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
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
      <div style={{ 
        marginTop: '20px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '100%', 
        maxWidth: '300px' 
      }}>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={threshold}
          onChange={(e) => setThreshold(parseFloat(e.target.value))}
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <span style={{ textAlign: 'center' }}>Brightness: {threshold.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Scene;