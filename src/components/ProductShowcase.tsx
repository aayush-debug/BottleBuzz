import { motion } from 'framer-motion';

const ProductShowcase = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-10 py-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] -z-10" />
      <div className="absolute bottom-1/2 right-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[150px] -z-10" />

      <div className="z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="mb-8 inline-block px-4 py-1 rounded-full border border-primary/30 text-primary text-[10px] uppercase tracking-widest font-bold">
            Redefining Impressions
          </div>
          <h2 className="text-6xl md:text-8xl font-serif mb-10 leading-tight">Your Brand in <br /><span className="text-primary italic">Every Hand</span></h2>
          <p className="text-white/60 text-xl md:text-2xl leading-relaxed mb-12 font-light italic max-w-2xl mx-auto">
            "A blank canvas for your biggest ideas."
          </p>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-16 font-light max-w-3xl mx-auto">
            We provide a pure, minimalist canvas. Imagine your logo, your colors, and your story printed with precision on high-quality utility items. 
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 glass rounded-[2rem] border-white/5">
              <div className="text-primary text-3xl font-bold mb-1">5M+</div>
              <div className="text-[10px] uppercase text-white/40 tracking-widest font-bold">Impressions</div>
            </div>
            <div className="p-6 glass rounded-[2rem] border-white/5">
              <div className="text-secondary text-3xl font-bold mb-1">Eco</div>
              <div className="text-[10px] uppercase text-white/40 tracking-widest font-bold">Certified</div>
            </div>
            <div className="p-6 glass rounded-[2rem] border-white/5">
              <div className="text-primary text-3xl font-bold mb-1">100%</div>
              <div className="text-[10px] uppercase text-white/40 tracking-widest font-bold">Recyclable</div>
            </div>
            <div className="p-6 glass rounded-[2rem] border-white/5">
              <div className="text-secondary text-3xl font-bold mb-1">HD</div>
              <div className="text-[10px] uppercase text-white/40 tracking-widest font-bold">Printing</div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Section Title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase">
        Impact
      </div>
    </section>
  );
};

export default ProductShowcase;
