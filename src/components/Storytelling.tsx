import { useRef, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, Float } from '@react-three/drei';
import Bottle from './Bottle';

const Storytelling = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], [0, 1, 1, 0]);

  const scale1 = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const scale2 = useTransform(scrollYProgress, [0.4, 0.5], [0.8, 1]);
  const scale3 = useTransform(scrollYProgress, [0.7, 0.8], [0.8, 1]);

  return (
    <section ref={containerRef} className="h-[300vh] relative px-10">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* 3D Bottle Background/Focus */}
        <div className="absolute inset-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Suspense fallback={null}>
              <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <group>
                  <Bottle scrollProgress={scrollYProgress} />
                </group>
              </Float>
              <Environment preset="city" />
              <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
            </Suspense>
          </Canvas>
        </div>

        {/* Scene 1 */}
        <motion.div 
          style={{ opacity: opacity1, scale: scale1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-8xl font-serif tracking-tight mb-8 leading-none">THE POWER OF TOUCH</h2>
          <p className="text-xl text-white/60 font-light">Your message doesn't just exist in a feed—it lives in their world.</p>
        </motion.div>

        {/* Scene 2 */}
        <motion.div 
          style={{ opacity: opacity2, scale: scale2 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-8xl font-serif tracking-tight mb-8 leading-none italic uppercase">Unrivaled Recall</h2>
          <p className="text-xl text-white/60 font-light">Passive viewing is over. Active engagement is here.</p>
        </motion.div>

        {/* Scene 3 */}
        <motion.div 
          style={{ opacity: opacity3, scale: scale3 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-8xl font-serif tracking-tight mb-8 leading-none uppercase text-primary">Buzz Starts Here</h2>
          <p className="text-xl text-white/60 font-light">Turn every sip into a story. Let's build your campaign.</p>
        </motion.div>

        {/* Dynamic Background Elements */}
        <motion.div 
          style={{ 
            rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1])
          }}
          className="w-[150vw] h-[150vw] border-[1px] border-primary/20 rounded-full absolute -z-10"
        />
      </div>
    </section>
  );
};

export default Storytelling;
