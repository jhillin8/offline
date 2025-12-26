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
    <motion.div variants={fadeInUp} className="mb-breath-xl relative">
      {/* Progress indicator with dots */}
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-xs text-offline-red tracking-widest uppercase">
          {number}/{totalModules}
        </span>
        <div className="flex gap-1.5">
          {Array.from({ length: totalModules }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i < moduleNum
                  ? 'bg-offline-red'
                  : i === moduleNum
                  ? 'bg-offline-red/40'
                  : 'bg-offline-border'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Title with display typography */}
      <h1 className="font-serif text-display-md md:text-display-lg lg:text-display-xl text-offline-black mb-8 leading-ultra-tight tracking-ultra-tight">
        {title}
      </h1>

      {/* Description with refined spacing */}
      <p className="font-sans text-lg md:text-xl text-offline-gray leading-relaxed max-w-2xl">
        {description}
      </p>

      {/* Subtle decorative line */}
      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-offline-red/20 via-offline-red/5 to-transparent hidden lg:block" />
    </motion.div>
  );
};
