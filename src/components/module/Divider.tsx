'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

type DividerVariant = 'line' | 'dots' | 'space';

interface DividerProps {
  variant?: DividerVariant;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  variant = 'line',
  className = ''
}) => {
  if (variant === 'space') {
    return <div className={`h-breath-lg ${className}`} />;
  }

  if (variant === 'dots') {
    return (
      <motion.div
        variants={fadeInUp}
        className={`flex justify-center gap-2 my-breath-lg ${className}`}
      >
        <span className="w-1 h-1 rounded-full bg-offline-red" />
        <span className="w-1 h-1 rounded-full bg-offline-red" />
        <span className="w-1 h-1 rounded-full bg-offline-red" />
      </motion.div>
    );
  }

  // Default: line
  return (
    <motion.div
      variants={fadeInUp}
      className={`flex justify-center my-breath-lg ${className}`}
    >
      <div className="w-12 h-px bg-offline-red" />
    </motion.div>
  );
};
