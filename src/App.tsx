import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import Storytelling from './components/Storytelling';
import CTA from './components/CTA';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-primary/30 selection:text-white">
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
