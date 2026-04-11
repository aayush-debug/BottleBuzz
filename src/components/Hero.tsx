import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
        className="text-center z-10 px-4"
      >
        <div className="flex flex-col items-center">
          <Leaf className="w-12 h-12 text-primary mb-4 animate-pulse opacity-50" />
          <h1 className="text-8xl md:text-[10rem] font-serif tracking-tight mb-4 leading-none">
            BottleBuzz
          </h1>
        </div>
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
        <div className="text-[10px] text-primary mb-1">MOBILE ADVERTISING</div>
        <div className="text-sm font-semibold tracking-tight leading-none uppercase">High Visibility</div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-[10%] p-4 glass rounded-2xl hidden lg:block"
      >
        <div className="text-[10px] text-secondary mb-1">SUSTAINABLE REACH</div>
        <div className="text-sm font-semibold tracking-tight leading-none uppercase">Paper & Plastic</div>
      </motion.div>
    </section>
  );
};

export default Hero;
