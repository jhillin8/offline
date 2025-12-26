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
    <motion.div variants={fadeInUp} className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="w-5 h-5 text-offline-red" />
        <h3 className="font-serif text-2xl text-offline-black">{title}</h3>
        {duration && (
          <span className="font-mono text-xs text-offline-gray bg-offline-border/50 px-2 py-1 rounded">
            {duration}
          </span>
        )}
      </div>
      <div className="bg-white p-8 md:p-10 rounded-2xl border border-offline-border shadow-sm">
        {children}
      </div>
    </motion.div>
  );
};
