'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

interface PermissionQuoteProps {
  lines: string[];
  label?: string;
}

export const PermissionQuote: React.FC<PermissionQuoteProps> = ({
  lines,
  label = 'Permission Granted'
}) => {
  return (
    <motion.div variants={fadeInUp} className="mb-breath-lg relative">
      {/* Oversized decorative quote mark */}
      <div className="absolute -top-4 -left-4 md:-left-8 text-[120px] md:text-[180px] font-serif text-offline-red/10 leading-none select-none pointer-events-none">
        "
      </div>

      <div className="relative pl-6 md:pl-8 border-l-2 border-offline-red/30">
        <div className="space-y-4 md:space-y-6">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-display-sm md:text-display-md text-offline-black leading-tighter font-light"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Label with subtle separator */}
      <div className="mt-8 flex items-center gap-4">
        <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-offline-red/40 to-transparent" />
        <p className="text-xs text-offline-gray font-mono uppercase tracking-widest">{label}</p>
      </div>
    </motion.div>
  );
};
