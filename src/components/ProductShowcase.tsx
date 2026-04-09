import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import Bottle from './Bottle';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
  return (
    <section className="h-screen relative grid grid-cols-1 lg:grid-cols-2 items-center px-10">
      <div className="z-10 max-w-xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6">Designed for the <span className="text-primary">Bold</span></h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Experience the fusion of craftsmanship and technology. Our bottles are more than containers; they are a statement of luxury and futuristic design.
          </p>
          <div className="flex gap-4">
            <div className="p-4 glass rounded-xl flex-1">
              <div className="text-primary text-xl font-bold">100%</div>
              <div className="text-xs uppercase text-white/40">Pure Distillate</div>
            </div>
            <div className="p-4 glass rounded-xl flex-1">
              <div className="text-secondary text-xl font-bold">Cold</div>
              <div className="text-xs uppercase text-white/40">Filtered</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="h-[60vh] lg:h-full cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bc13fe" />
          <Bottle />
          <Environment preset="city" />
          <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
          <OrbitControls enableZoom={false} makeDefault />
        </Canvas>
      </div>
      
      {/* Background Section Title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase">
        Crafted
      </div>
    </section>
  );
};

export default ProductShowcase;
