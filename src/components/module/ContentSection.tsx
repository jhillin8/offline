'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

type Emphasis = 'standard' | 'important' | 'climactic';

interface ContentSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  emphasis?: Emphasis;
}

const emphasisStyles: Record<Emphasis, { wrapper: string; title: string }> = {
  standard: {
    wrapper: 'mb-breath-md',
    title: 'font-serif text-2xl text-offline-black mb-6'
  },
  important: {
    wrapper: 'mb-breath-lg',
    title: 'font-serif text-3xl md:text-4xl text-offline-black mb-8 leading-tight'
  },
  climactic: {
    wrapper: 'mb-breath-xl',
    title: 'font-serif text-4xl md:text-display-sm text-offline-black mb-10 leading-tight tracking-tight'
  }
};

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  children,
  className = '',
  emphasis = 'standard'
}) => {
  const styles = emphasisStyles[emphasis];

  return (
    <motion.div variants={fadeInUp} className={`${styles.wrapper} ${className}`}>
      {title && (
        <h3 className={styles.title}>{title}</h3>
      )}
      {children}
    </motion.div>
  );
};
