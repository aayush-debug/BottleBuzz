import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MeshDistortMaterial } from '@react-three/drei';

const Dragon = ({ scrollProgress }: { scrollProgress: any }) => {
  const headRef = useRef<THREE.Group>(null);
  const numSegments = 15;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scroll = scrollProgress.get();

    // Calculate Head Position based on scroll
    // On main page (scroll 0 to 0.1), move around the logo
    let targetX = 0;
    let targetY = 0;
    let targetZ = 0;

    if (scroll < 0.2) {
      // Orbiting the logo
      const angle = t * 2 + scroll * 10;
      const radius = 5 + Math.sin(t) * 2;
      targetX = Math.cos(angle) * radius;
      targetY = Math.sin(angle) * radius;
      targetZ = 2;
    } else {
      // Move downwards and side to side
      targetX = Math.sin(scroll * 10 + t) * 8;
      targetY = (0.2 - scroll) * 40; // Moving down
      targetZ = Math.cos(scroll * 5) * 5;
    }

    if (headRef.current) {
      headRef.current.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.1);
      
      // Update segments to follow head
      let prevPos = headRef.current.position.clone();
      const children = headRef.current.parent?.children;
      if (children) {
        for (let i = 0; i < numSegments; i++) {
          const segment = children[i+1] as THREE.Mesh;
          if (segment) {
             segment.position.lerp(prevPos, 0.15);
             prevPos = segment.position.clone();
          }
        }
      }
    }
  });

  return (
    <group>
      {/* Head */}
      <group ref={headRef}>
        <mesh>
          <sphereGeometry args={[0.6, 32, 32]} />
          <MeshDistortMaterial color="#00f3ff" speed={5} distort={0.6} emissive="#00f3ff" emissiveIntensity={5} />
        </mesh>
        {/* Glow */}
        <pointLight color="#00f3ff" intensity={2} distance={10} />
      </group>

      {/* Segments */}
      {Array.from({ length: numSegments }).map((_, i) => (
        <mesh key={i} position={[0, -i * 0.5, 0]}>
          <sphereGeometry args={[0.45 - (i * 0.02), 16, 16]} />
          <MeshDistortMaterial 
            color="#00f3ff" 
            transparent 
            opacity={0.6 - (i * 0.03)} 
            distort={0.4} 
            speed={2} 
            emissive="#00f3ff" 
            emissiveIntensity={1 - (i * 0.05)} 
          />
        </mesh>
      ))}
    </group>
  );
};

export default Dragon;
