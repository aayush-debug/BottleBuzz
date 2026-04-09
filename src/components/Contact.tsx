import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-32 px-10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-12 uppercase tracking-tighter">Get in Touch</h2>
          
          <a 
            href="mailto:bottlebuzz7@gmail.com"
            className="group relative inline-block w-full max-w-2xl px-8 py-12 glass rounded-[2rem] border-primary/10 hover:border-primary/40 transition-all duration-500 overflow-hidden"
          >
            {/* Background Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] group-hover:bg-primary/20 transition-all duration-500" />
            
            <div className="flex flex-col items-center gap-6 relative z-10">
              <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              
              <div className="space-y-2">
                <p className="text-white/40 text-sm uppercase tracking-[0.3em]">Drop us a line</p>
                <p className="text-3xl md:text-4xl font-serif tracking-tight text-white group-hover:text-primary transition-colors">
                  bottlebuzz7@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-2 text-primary/60 group-hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest mt-4">
                Open in Mail App <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </a>

          <div className="mt-20 flex flex-wrap justify-center gap-12 text-white/30 text-sm font-medium uppercase tracking-widest">
            <span className="hover:text-primary cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-primary cursor-pointer transition-colors">X (Twitter)</span>
            <span className="hover:text-primary cursor-pointer transition-colors">LinkedIn</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
