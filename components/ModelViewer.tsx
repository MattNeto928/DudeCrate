import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

type ModelProps = {
  url: string;
  scale?: number;
  textureUrl?: string; // Updated to be optional
  uploadedTextureUrl?: string; // New prop for uploaded image URL
};

const RotatingModel: React.FC<ModelProps> = ({ url, scale = 1, textureUrl, uploadedTextureUrl }) => {
  const gltf = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null!);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Material properties
  const material = new THREE.MeshPhongMaterial({
    color: '#737373', // Base color
    specular: 0xFFFFFF,
    shininess: 50,
    map: new THREE.TextureLoader().load(uploadedTextureUrl || textureUrl || "/fallbackTexture.png"), // Use uploadedTextureUrl if available, else textureUrl, else fallback
  });

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

  // Apply material to the loaded model
  gltf.scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = material;
    }
  });

  return (
    <primitive object={gltf.scene} ref={modelRef} scale={[scale, scale, scale]} />
  );
};

const Scene: React.FC<ModelProps> = ({ url, scale, textureUrl, uploadedTextureUrl }) => {
  return (

    <Canvas>
      <ambientLight intensity={5} />
      <pointLight position={[0, 0, 5]} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <RotatingModel url={url} scale={scale} textureUrl={textureUrl} uploadedTextureUrl={uploadedTextureUrl} />
    </Canvas>

  );
};

export default Scene;
