
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SacredCharacter: React.FC<{ className?: string }> = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 0.8, 0.8, 0.3]);

  return (
    <motion.div
      style={{ rotate, scale, opacity }}
      className={`pointer-events-none ${className}`}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full text-soft-gold">
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="animate-[spin_40s_linear_infinite]" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.2" />
        <motion.path
          d="M50 20 L50 80 M20 50 L80 50"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <rect x="35" y="35" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
      </svg>
    </motion.div>
  );
};

export default SacredCharacter;
