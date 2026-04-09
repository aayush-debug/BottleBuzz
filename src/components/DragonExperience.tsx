import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import Dragon from './Dragon';
import { Environment } from '@react-three/drei';

const DragonExperience = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
        <Suspense fallback={null}>
          <Dragon scrollProgress={scrollYProgress} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DragonExperience;
