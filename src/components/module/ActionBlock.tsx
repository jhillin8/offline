'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { fadeInUp } from './animations';

interface ActionBlockProps {
  title: string;
  duration?: string;
  children: React.ReactNode;
}

export const ActionBlock: React.FC<ActionBlockProps> = ({
  title,
  duration,
  children
}) => {
  return (
    <motion.div variants={fadeInUp} className="mb-breath-lg relative">
      {/* Header with visual separator */}
      <div className="flex items-center gap-4 mb-10">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-offline-red/10">
          <Sparkles className="w-5 h-5 text-offline-red" />
        </div>
        <div className="flex-1">
          <h3 className="font-serif text-3xl md:text-4xl text-offline-black leading-tight">{title}</h3>
        </div>
        {duration && (
          <span className="font-mono text-xs text-offline-gray bg-cream px-3 py-1.5 rounded-full border border-offline-border/50">
            {duration}
          </span>
        )}
      </div>

      {/* Content card with subtle depth */}
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-offline-border/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden">
        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.03]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="100" cy="0" r="80" fill="#D94F2B" />
          </svg>
        </div>

        <div className="relative">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
