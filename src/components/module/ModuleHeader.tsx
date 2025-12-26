'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

interface ModuleHeaderProps {
  number: string;
  title: string;
  description: string;
}

export const ModuleHeader: React.FC<ModuleHeaderProps> = ({ number, title, description }) => {
  return (
    <motion.div variants={fadeInUp} className="mb-16">
      <span className="font-mono text-xs text-offline-red tracking-widest uppercase mb-4 block">
        Module {number}
      </span>
      <h1 className="font-serif text-5xl md:text-6xl text-offline-black mb-6">{title}</h1>
      <p className="font-sans text-lg text-offline-gray leading-relaxed max-w-xl">
        {description}
      </p>
    </motion.div>
  );
};
