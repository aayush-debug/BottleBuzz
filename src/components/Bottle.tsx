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

        {/* Brandable Label Area */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.92, 0.92, 1.8, 32]} />
          <meshStandardMaterial color="#00f3ff" roughness={0.3} metalness={0.2} transparent opacity={0.8} />
          {/* Subtle logo/text placeholder on label */}
          <mesh position={[0, 0, 0.95]}>
            <planeGeometry args={[0.8, 0.8]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.4} />
          </mesh>
        </mesh>

        {/* Liquid (Water) */}
        <mesh position={[0, -0.8, 0]}>
          <cylinderGeometry args={[0.85, 0.85, 1.2, 32]} />
          <meshPhysicalMaterial 
            color="#ffffff" 
            transmission={1} 
            thickness={0.1} 
            roughness={0} 
          />
        </mesh>
      </mesh>
    </Float>
  );
};

export default Bottle;
