import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-10 py-6 grid grid-cols-3 items-center bg-background/50 backdrop-blur-md border-b border-white/5"
    >
      {/* Left: Links */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
        <a href="#" className="hover:text-primary transition-colors">Approach</a>
      </div>
      
      {/* Center: Logo */}
      <div className="flex justify-center">
        <div className="flex flex-col items-center -mb-2">
          <Leaf className="w-3 h-3 text-primary fill-primary/20 rotate-45 ml-6" />
          <div className="text-2xl font-serif tracking-tight leading-none group cursor-pointer hover:text-primary transition-colors">
            BottleBuzz
          </div>
        </div>
      </div>

      {/* Right: CTA Button */}
      <div className="flex justify-end gap-8 items-center">
        <a 
          href="https://forms.gle/eBoAQp7LK1qy1p9M7" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="px-6 py-2 rounded-full glass border-primary/20 hover:border-primary/50 text-xs font-bold uppercase tracking-widest transition-all hover:neon-border whitespace-nowrap">
            Start Campaign
          </button>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
