import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-4 leading-none">
          Bottle<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Buzz</span>
        </h1>
        <p className="text-xl md:text-2xl font-light text-white/60 tracking-widest uppercase">
          Turn every sip into a story.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll to Explore</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary/0 via-primary to-primary/0" />
      </motion.div>

      {/* Floating UI Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] p-4 glass rounded-2xl hidden lg:block"
      >
        <div className="text-[10px] text-primary mb-1">CRAFTED QUALITY</div>
        <div className="text-sm font-semibold tracking-tight leading-none uppercase">Est. 2026</div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-[10%] p-4 glass rounded-2xl hidden lg:block"
      >
        <div className="text-[10px] text-secondary mb-1">PREMIUM SPIRITS</div>
        <div className="text-sm font-semibold tracking-tight leading-none uppercase">Pure Distillate</div>
      </motion.div>
    </section>
  );
};

export default Hero;
