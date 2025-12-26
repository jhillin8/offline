'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

interface ModuleHeaderProps {
  number: string;
  title: string;
  description: string;
}

export const ModuleHeader: React.FC<ModuleHeaderProps> = ({ number, title, description }) => {
  const moduleNum = parseInt(number);
  const totalModules = 10;

  return (
    <motion.div variants={fadeInUp} className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-offline-red tracking-widest uppercase">
          Module {number} of {totalModules}
        </span>
        <div className="flex-1 h-0.5 bg-offline-border/30 rounded-full max-w-[120px]">
          <div
            className="h-full bg-offline-red rounded-full transition-all duration-500"
            style={{ width: `${(moduleNum / totalModules) * 100}%` }}
          />
        </div>
      </div>
      <h1 className="font-serif text-5xl md:text-6xl text-offline-black mb-6">{title}</h1>
      <p className="font-sans text-lg text-offline-gray leading-relaxed max-w-xl">
        {description}
      </p>
    </motion.div>
  );
};
