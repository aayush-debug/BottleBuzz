import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

const TorusKnot = ({ scrollProgress, position, color, speed }: { 
  scrollProgress: any, 
  position: [number, number, number],
  color: string,
  speed: number
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const scroll = scrollProgress.get();
      meshRef.current.rotation.x = scroll * Math.PI * 2 + state.clock.getElapsedTime() * 0.2 * speed;
      meshRef.current.rotation.y = scroll * Math.PI + state.clock.getElapsedTime() * 0.3 * speed;
    }
  });

  return (
    <Float speed={2 * speed} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <torusKnotGeometry args={[10, 3, 128, 16]} />
        <MeshDistortMaterial 
          color={color}
          transparent
          opacity={0.05}
          distort={0.4}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const TorusBackground = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed inset-0 pointer-events-none -z-30 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#bc13fe" />
        
        <TorusKnot 
          scrollProgress={scrollYProgress} 
          position={[20, 10, -10]} 
          color="#00f3ff" 
          speed={0.5}
        />
        <TorusKnot 
          scrollProgress={scrollYProgress} 
          position={[-25, -15, -20]} 
          color="#bc13fe" 
          speed={0.8}
        />
        <TorusKnot 
          scrollProgress={scrollYProgress} 
          position={[0, 0, -50]} 
          color="#ffffff" 
          speed={0.3}
        />
      </Canvas>
    </div>
  );
};

export default TorusBackground;
