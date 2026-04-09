import { motion } from 'framer-motion';

const SquareBackground = () => {
  // Create an array of 20 squares with random properties
  const squares = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 10,
    color: Math.random() > 0.5 ? 'border-primary/20' : 'border-secondary/20',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-background">
      {squares.map((square) => (
        <motion.div
           key={square.id}
           initial={{ 
             opacity: 0, 
             scale: 0,
             x: `${square.x}%`, 
             y: `${square.y}%`,
             rotate: 0 
           }}
           animate={{ 
             opacity: [0.1, 0.3, 0.1], 
             scale: [1, 1.2, 1],
             x: [`${square.x}%`, `${(square.x + 10) % 100}%`, `${square.x}%`],
             y: [`${square.y}%`, `${(square.y + 10) % 100}%`, `${square.y}%`],
             rotate: [0, 180, 360]
           }}
           transition={{ 
             duration: square.duration, 
             repeat: Infinity, 
             delay: square.delay,
             ease: "linear"
           }}
           style={{
             width: square.size,
             height: square.size,
           }}
           className={`absolute border-[1px] ${square.color} rounded-sm`}
        />
      ))}
      
      {/* Radial Gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(5,5,5,1)_100%)]" />
    </div>
  );
};

export default SquareBackground;
