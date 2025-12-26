'use client';

interface BulletListProps {
  items: string[];
  title?: string;
  variant?: 'default' | 'strikethrough' | 'muted';
}

export const BulletList: React.FC<BulletListProps> = ({
  items,
  title,
  variant = 'default'
}) => {
  const itemClasses = {
    default: 'text-offline-black/80',
    strikethrough: 'text-offline-gray line-through decoration-offline-red/40',
    muted: 'text-offline-gray'
  };

  return (
    <div className={`space-y-4 ${variant === 'strikethrough' ? 'opacity-50' : ''}`}>
      {title && (
        <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest">
          {title}
        </h4>
      )}
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className={`flex items-start gap-3 ${itemClasses[variant]}`}>
            {variant !== 'strikethrough' && (
              <span className="w-1.5 h-1.5 bg-offline-black/20 rounded-full mt-2 flex-shrink-0" />
            )}
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
