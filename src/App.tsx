import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import Storytelling from './components/Storytelling';
import CTA from './components/CTA';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import SquareBackground from './components/SquareBackground';
import TorusBackground from './components/TorusBackground';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-primary/30 selection:text-white">
      <TorusBackground />
      <SquareBackground />
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <Storytelling />
        <CTA />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-white/40 glass">
        <p>© 2026 BottleBuzz. Turn every sip into a story.</p>
      </footer>
    </div>
  );
}

export default App;
