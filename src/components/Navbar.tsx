import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between items-center bg-background/50 backdrop-blur-md border-b border-white/5"
    >
      <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
        <span className="text-primary">BOTTLE</span>
        <span>BUZZ</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
        <a href="#" className="hover:text-primary transition-colors">Vintages</a>
        <a href="#" className="hover:text-primary transition-colors">Heritage</a>
        <a href="#" className="hover:text-primary transition-colors">Process</a>
        <a href="#" className="hover:text-primary transition-colors">Club</a>
      </div>

      <button className="px-6 py-2 rounded-full glass border-primary/20 hover:border-primary/50 text-xs font-bold uppercase tracking-widest transition-all hover:neon-border">
        Reserve Now
      </button>
    </motion.nav>
  );
};

export default Navbar;
