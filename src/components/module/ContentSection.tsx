'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

interface ContentSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  children,
  className = ''
}) => {
  return (
    <motion.div variants={fadeInUp} className={`mb-20 ${className}`}>
      {title && (
        <h3 className="font-serif text-2xl text-offline-black mb-8">{title}</h3>
      )}
      {children}
    </motion.div>
  );
};
