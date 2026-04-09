import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import Storytelling from './components/Storytelling';
import CTA from './components/CTA';
import CustomCursor from './components/CustomCursor';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-primary/30 selection:text-white">
      <CustomCursor />
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <Storytelling />
        <CTA />
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-white/40 glass">
        <p>© 2026 BottleBuzz. Turn every sip into a story.</p>
      </footer>
    </div>
  );
}

export default App;
