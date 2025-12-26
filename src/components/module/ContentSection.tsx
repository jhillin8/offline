'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

type Emphasis = 'standard' | 'important' | 'climactic';
type Variant = 'default' | 'inset' | 'elevated' | 'highlight';
type Separator = 'none' | 'line' | 'dots' | 'space';

interface ContentSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  emphasis?: Emphasis;
  variant?: Variant;
  separator?: Separator;
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

const variantStyles: Record<Variant, string> = {
  default: '',
  inset: 'p-8 md:p-10 bg-cream rounded-2xl',
  elevated: 'p-8 md:p-10 bg-white border border-offline-border/60 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)]',
  highlight: 'pl-6 md:pl-8 border-l-4 border-offline-red/60'
};

// Separator components
const SeparatorLine = () => (
  <div className="flex justify-center my-breath-section">
    <div className="w-16 h-px bg-offline-border/60" />
  </div>
);

const SeparatorDots = () => (
  <div className="flex justify-center gap-3 my-breath-section">
    <span className="w-1.5 h-1.5 rounded-full bg-offline-gray/30" />
    <span className="w-1.5 h-1.5 rounded-full bg-offline-gray/30" />
    <span className="w-1.5 h-1.5 rounded-full bg-offline-gray/30" />
  </div>
);

const SeparatorSpace = () => (
  <div className="h-breath-section" />
);

const separatorElements: Record<Separator, React.ReactNode> = {
  none: null,
  line: <SeparatorLine />,
  dots: <SeparatorDots />,
  space: <SeparatorSpace />
};

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  children,
  className = '',
  emphasis = 'standard',
  variant = 'default',
  separator = 'none'
}) => {
  const emStyles = emphasisStyles[emphasis];
  const varStyle = variantStyles[variant];

  return (
    <>
      <motion.div
        variants={fadeInUp}
        className={`${emStyles.wrapper} ${varStyle} ${className}`}
      >
        {title && <h3 className={emStyles.title}>{title}</h3>}
        {children}
      </motion.div>
      {separatorElements[separator]}
    </>
  );
};
