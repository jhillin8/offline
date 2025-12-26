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
    <motion.div variants={fadeInUp} className="mb-20">
      <div className="pl-6 border-l-2 border-offline-red/30 space-y-6">
        {lines.map((line, i) => (
          <p key={i} className="font-serif text-2xl md:text-3xl italic text-offline-black leading-tight">
            {i === 0 ? `"${line}` : i === lines.length - 1 ? `${line}"` : line}
          </p>
        ))}
      </div>
      <p className="mt-4 text-sm text-offline-gray font-mono uppercase tracking-wide">{label}</p>
    </motion.div>
  );
};
