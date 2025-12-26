'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from './animations';
import { ModuleId } from '@/lib/types';

interface ModuleTransitionProps {
  closingLines?: string[];
  nextModule: ModuleId;
  nextNumber: string;
  onNavigate: (id: ModuleId) => void;
}

export const ModuleTransition: React.FC<ModuleTransitionProps> = ({
  closingLines,
  nextModule,
  nextNumber,
  onNavigate
}) => {
  return (
    <motion.div variants={fadeInUp} className="text-center py-16 border-t border-offline-border/40">
      {closingLines && closingLines.map((line, i) => (
        <p key={i} className="font-serif text-2xl text-offline-black italic mb-2 last:mb-0">
          {i === 0 ? `"${line}` : i === closingLines.length - 1 ? `${line}"` : line}
        </p>
      ))}
      <div className="mt-12">
        <button
          onClick={() => onNavigate(nextModule)}
          className="text-xs font-mono uppercase tracking-widest text-offline-gray hover:text-offline-red transition-colors"
        >
          Continue to Part {nextNumber} &rarr;
        </button>
      </div>
    </motion.div>
  );
};
