import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, MeshWobbleMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const Bottle = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        {/* Simple Bottle Shape using Cylinder and Torus */}
        <cylinderGeometry args={[0.5, 1, 3, 32]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          transmission={0.95}
          thickness={0.5}
          roughness={0.05}
          envMapIntensity={2}
          clearcoat={1}
          metalness={0.1}
        />
        
        {/* Bottle Cap */}
        <mesh position={[0, 1.6, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 0.2, 32]} />
          <meshStandardMaterial color="#00f3ff" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Liquid Indicator */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.9, 0.9, 2, 32]} />
          <meshStandardMaterial color="#bc13fe" transparent opacity={0.6} emissive="#bc13fe" emissiveIntensity={0.5} />
        </mesh>
      </mesh>
    </Float>
  );
};

export default Bottle;
