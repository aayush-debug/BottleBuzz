import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Droplets, Shield, Sparkles } from 'lucide-react';

const featureData = [
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Pure Source",
    desc: "Sourced from the heart of the Alps, filtered through centuries of limestone."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Kinetic Infusion",
    desc: "Proprietary mixing process that preserves the flavor profile at a molecular level."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Eco-Armor",
    desc: "100% recyclable glass with UV-protective coating for infinite shelf life."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Aura Glow",
    desc: "Internal luminescence technology that responds to your environment's mood."
  }
];

const Features = () => {
  return (
    <section className="py-32 px-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold uppercase tracking-tight">Technical Excellence</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featureData.map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="p-8 glass rounded-3xl border-white/5 hover:border-primary/30 transition-all duration-500 group"
          >
            <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-primary/20 group-hover:text-primary transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
