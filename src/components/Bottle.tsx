import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { MotionValue } from 'framer-motion';

interface BottleProps {
  scrollProgress?: MotionValue<number>;
}

const Bottle = ({ scrollProgress }: BottleProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      if (scrollProgress) {
        meshRef.current.rotation.y = scrollProgress.get() * Math.PI * 4;
        meshRef.current.position.y = (scrollProgress.get() - 0.5) * -4;
      } else {
        meshRef.current.rotation.y += 0.005;
      }
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
          <meshStandardMaterial color="#cccccc" metalness={0.5} roughness={0.2} />
        </mesh>

        {/* Blank Canvas Label Area */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.92, 0.92, 2.2, 32]} />
          <meshStandardMaterial color="#f0f0f0" roughness={0.3} metalness={0} />
          {/* Mockup Placeholder Text/Indication */}
          <mesh position={[0, 0, 0.95]}>
            <planeGeometry args={[1.2, 1.2]} />
            <meshStandardMaterial color="#e0e0e0" transparent opacity={0.5} />
          </mesh>
        </mesh>

        {/* Minimal Bottle Base (White Porcelain/Plastic style) */}
        <mesh position={[0, -0.8, 0]}>
          <cylinderGeometry args={[0.85, 0.85, 1.2, 32]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} />
        </mesh>
      </mesh>
    </Float>
  );
};

export default Bottle;
