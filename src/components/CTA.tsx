import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-40 px-10 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto glass rounded-[4rem] p-20 text-center border-white/5 relative"
      >
        <Leaf className="w-12 h-12 text-primary mx-auto mb-8 opacity-50" />
        <h2 className="text-6xl md:text-8xl font-serif tracking-tight mb-10 leading-none">
          Ready to <br />
          <span className="text-primary italic">Rewrite</span> the Night?
        </h2>
        
        <p className="text-white/50 text-xl max-w-2xl mx-auto mb-12">
          Join our exclusive circle and be the first to experience the next evolution of spirits.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 bg-primary text-background font-bold uppercase tracking-widest rounded-full text-lg hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] transition-all duration-300"
        >
          Join the Buzz
        </motion.button>

        {/* Floating Icons */}
        <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-primary/40 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-6 h-6 rounded-full bg-secondary/40 animate-pulse delay-700" />
      </motion.div>
    </section>
  );
};

export default CTA;
