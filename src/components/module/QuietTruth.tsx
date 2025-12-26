'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp } from './animations';

interface QuietTruthProps {
  lines: string[];
  highlight?: number;
}

export const QuietTruth: React.FC<QuietTruthProps> = ({ lines, highlight }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="my-breath-xl py-breath-lg bg-cream text-center relative overflow-hidden"
    >
      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #1A1A1A 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-offline-border/10 pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="space-y-6 md:space-y-8">
          {lines.map((line, i) => (
            <motion.h3
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: i * 0.3,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`font-serif text-4xl md:text-5xl lg:text-display-lg leading-ultra-tight tracking-tighter font-light ${
                i === highlight ? 'text-offline-red' : 'text-offline-black'
              }`}
            >
              {line}
            </motion.h3>
          ))}
        </div>
      </div>

      {/* Decorative arc */}
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M 0 100 A 100 100 0 0 1 100 0"
            fill="none"
            stroke="#D94F2B"
            strokeWidth="2"
          />
        </svg>
      </div>
    </motion.div>
  );
};
