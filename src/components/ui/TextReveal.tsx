'use client';
import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className }: TextRevealProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 12, stiffness: 100 },
    },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      className={`overflow-hidden flex flex-wrap gap-x-2 ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, idx) => (
        <motion.span key={`${word}-${idx}`} variants={child} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
