'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

interface QuietTruthProps {
  lines: string[];
  highlight?: number; // Index of line to highlight in red
}

export const QuietTruth: React.FC<QuietTruthProps> = ({ lines, highlight }) => {
  return (
    <motion.div variants={fadeInUp} className="mb-20 py-12 bg-cream text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-offline-border/20 pointer-events-none" />
      {lines.map((line, i) => (
        <h3
          key={i}
          className={`relative font-serif text-3xl md:text-4xl leading-tight mb-4 last:mb-0 ${
            i === highlight ? 'text-offline-red' : 'text-offline-black'
          }`}
        >
          {line}
        </h3>
      ))}
    </motion.div>
  );
};
