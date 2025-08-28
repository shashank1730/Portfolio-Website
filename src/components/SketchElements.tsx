import { motion } from "framer-motion";

export const SketchDoodle = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.6 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <svg width="100" height="60" viewBox="0 0 100 60" className="text-primary">
        <motion.path
          d="M 10 30 Q 30 10, 50 30 T 90 30"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="2,3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
    </motion.div>
  );
};

export const SketchArrow = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 5 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <svg width="80" height="40" viewBox="0 0 80 40" className="text-primary">
        <motion.path
          d="M 10 20 Q 40 10, 60 20 L 55 15 M 60 20 L 55 25"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </svg>
    </motion.div>
  );
};

export const FloatingDoodles = () => {
  const doodles = [
    { emoji: "✨", delay: 0, duration: 6 },
    { emoji: "☕", delay: 2, duration: 8 },
    { emoji: "💡", delay: 4, duration: 7 },
    { emoji: "🚀", delay: 6, duration: 9 },
    { emoji: "⭐", delay: 8, duration: 5 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {doodles.map((doodle, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-20"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            rotate: 0 
          }}
          animate={{ 
            y: -50,
            rotate: 360,
            x: Math.random() * window.innerWidth
          }}
          transition={{ 
            duration: doodle.duration,
            delay: doodle.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {doodle.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export const SketchHighlight = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
      <motion.div
        className="absolute inset-0 bg-primary/20 -z-10 rounded-md"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.span>
  );
};