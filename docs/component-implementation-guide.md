# Component Implementation Guide
## New Pattern Components with Design Specs

---

## 1. AnchorMoment

### Purpose
Full-bleed breathing room section. Creates dramatic pause, memorable waypoint.

### Visual Design
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│                                                     │
│                                                     │
│                                                     │
│          "Access determines attention."             │
│                                                     │
│                                                     │
│                                                     │
│                                                     │
└─────────────────────────────────────────────────────┘

Colors:
- Background: Linear gradient #FAFAF9 → #F5F5F4
- Text: #0A0A0A (offline-black)
- Optional accent line: #DC2626 (offline-red), 2px, centered

Typography:
- Font: font-serif
- Size: 3.5rem (56px) desktop, 2.5rem (40px) mobile
- Line height: 1.2
- Max width: 800px, centered
- Letter spacing: -0.01em
```

### Component Code
```tsx
'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

interface AnchorMomentProps {
  text: string;
  showAccent?: boolean;
}

export const AnchorMoment: React.FC<AnchorMomentProps> = ({
  text,
  showAccent = false
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="min-h-[60vh] flex items-center justify-center py-24 bg-gradient-to-b from-cream to-offline-border/10"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        {showAccent && (
          <div className="w-16 h-0.5 bg-offline-red mx-auto mb-12" />
        )}
        <h2 className="font-serif text-4xl md:text-6xl text-offline-black leading-tight tracking-tight">
          {text}
        </h2>
        {showAccent && (
          <div className="w-16 h-0.5 bg-offline-red mx-auto mt-12" />
        )}
      </div>
    </motion.div>
  );
};
```

### Usage Example
```tsx
<AnchorMoment
  text="Access determines attention. Attention shapes experience."
  showAccent={true}
/>
```

---

## 2. SidebarCallout

### Purpose
Provide contextual information without interrupting main flow.

### Visual Design
```
┌─────────────────────────────────┬───────────────────┐
│  Main content text continues    │ ┌───────────────┐ │
│  flowing in the primary column. │ │ Quick note    │ │
│  This is where the core message │ │               │ │
│  lives. Readers scan here first.│ │ Supporting    │ │
│                                  │ │ information   │ │
│  The sidebar doesn't interrupt  │ │ lives here    │ │
│  this flow—it supports it.      │ │               │ │
│                                  │ └───────────────┘ │
└─────────────────────────────────┴───────────────────┘

Grid: 70% / 30% on desktop, stacked on mobile

Sidebar styling:
- Background: #FAFAF9 (cream)
- Border: 1px solid #E5E5E5
- Border radius: 12px
- Padding: 1.5rem
- Font size: 0.875rem (14px)
- Color: #737373 (offline-gray)
```

### Component Code
```tsx
'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

interface SidebarCalloutProps {
  mainContent: React.ReactNode;
  sidebarContent: React.ReactNode;
  sidebarTitle?: string;
}

export const SidebarCallout: React.FC<SidebarCalloutProps> = ({
  mainContent,
  sidebarContent,
  sidebarTitle
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="mb-20 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8"
    >
      {/* Main content */}
      <div className="font-sans text-lg text-offline-gray leading-relaxed">
        {mainContent}
      </div>

      {/* Sidebar */}
      <div className="bg-cream border border-offline-border rounded-xl p-6">
        {sidebarTitle && (
          <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-offline-gray mb-3">
            {sidebarTitle}
          </h4>
        )}
        <div className="font-sans text-sm text-offline-gray leading-relaxed">
          {sidebarContent}
        </div>
      </div>
    </motion.div>
  );
};
```

### Usage Example
```tsx
<SidebarCallout
  mainContent={
    <>
      <p>Over time, your mind adapts. Not by focusing less — but by scanning more.</p>
      <p>That adaptation feels like mental tiredness, low-grade anxiety...</p>
    </>
  }
  sidebarTitle="What are open loops?"
  sidebarContent={
    <p>
      An open loop is when something starts but doesn't complete. Your brain
      keeps a background process running until it's resolved.
    </p>
  }
/>
```

---

## 3. ConceptCard Grid

### Purpose
Present parallel concepts as discrete, scannable units.

### Visual Design
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  📱          │  │  🔔          │  │  🔧          │
│              │  │              │  │              │
│  Feeds       │  │  Alerts      │  │  Tools       │
│              │  │              │  │              │
│  Short desc  │  │  Short desc  │  │  Short desc  │
│  explaining  │  │  explaining  │  │  explaining  │
│  concept     │  │  concept     │  │  concept     │
│              │  │              │  │              │
└──────────────┘  └──────────────┘  └──────────────┘

Card styling:
- Background: white
- Border: 1px solid #E5E5E5
- Border radius: 16px
- Padding: 2rem
- Hover: translateY(-2px), shadow: 0 8px 16px rgba(0,0,0,0.06)
- Transition: 200ms ease
```

### Component Code
```tsx
'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from './animations';
import { LucideIcon } from 'lucide-react';

interface ConceptCard {
  icon?: LucideIcon;
  title: string;
  description: string;
  variant?: 'default' | 'muted' | 'accent';
}

interface ConceptCardGridProps {
  cards: ConceptCard[];
  columns?: 2 | 3;
}

export const ConceptCardGrid: React.FC<ConceptCardGridProps> = ({
  cards,
  columns = 3
}) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3'
  };

  const variantStyles = {
    default: 'bg-white border-offline-border',
    muted: 'bg-cream border-offline-border/50',
    accent: 'bg-white border-offline-red/20'
  };

  return (
    <motion.div variants={fadeInUp} className="mb-20">
      <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
        {cards.map((card, i) => {
          const Icon = card.icon;
          const variant = card.variant || 'default';

          return (
            <div
              key={i}
              className={`
                ${variantStyles[variant]}
                border rounded-2xl p-8
                transition-all duration-200
                hover:translate-y-[-2px] hover:shadow-lg
              `}
            >
              {Icon && (
                <Icon className="w-6 h-6 text-offline-red mb-4" />
              )}
              <h3 className="font-serif text-xl text-offline-black mb-3">
                {card.title}
              </h3>
              <p className="font-sans text-sm text-offline-gray leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
```

### Usage Example
```tsx
<ConceptCardGrid
  columns={3}
  cards={[
    {
      title: 'Keep',
      description: 'Accounts that leave you calmer, clearer, or more grounded.',
      variant: 'default'
    },
    {
      title: 'Mute',
      description: 'Accounts you don\'t want to lose — but don\'t want daily.',
      variant: 'muted'
    },
    {
      title: 'Unfollow',
      description: 'Accounts that consistently stir comparison, urgency, or noise.',
      variant: 'accent'
    }
  ]}
/>
```

---

## 4. ProgressCheckpoint

### Purpose
Acknowledge progress, create pacing breaks.

### Visual Design
```
─────────────────────────────────────────────────────
              ━━━━━━━●━━━━━━━

        "You've come this far"
─────────────────────────────────────────────────────

Elements:
- Top/bottom border: 1px solid rgba(229, 229, 229, 0.4)
- Progress line: 200px wide, 2px height, #E5E5E5
- Progress dot: 8px circle, #DC2626, positioned at percentage
- Text: 0.875rem, italic, #737373
```

### Component Code
```tsx
'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

interface ProgressCheckpointProps {
  progress?: number; // 0-100
  message?: string;
}

export const ProgressCheckpoint: React.FC<ProgressCheckpointProps> = ({
  progress = 50,
  message = "You've come this far"
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="mb-20 py-12 border-t border-b border-offline-border/40 text-center"
    >
      {/* Progress line */}
      <div className="relative w-48 h-0.5 bg-offline-border mx-auto mb-6">
        <div
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-offline-red rounded-full"
          style={{ left: `${progress}%` }}
        />
      </div>

      {/* Message */}
      <p className="font-sans text-sm text-offline-gray italic">
        {message}
      </p>
    </motion.div>
  );
};
```

### Usage Example
```tsx
<ProgressCheckpoint
  progress={60}
  message="Halfway through this section"
/>
```

---

## 5. PullQuote

### Purpose
Highlight quotable insights, create emphasis.

### Visual Design
```
┌─────────────────────────────────────────────────────┐
│ ┃                                                   │
│ ┃   "Willpower is fragile in frictionless          │
│ ┃    environments."                                 │
│ ┃                                                   │
│ ┃                    — not a character flaw        │
└─────────────────────────────────────────────────────┘

Styling:
- Background: white or cream
- Left border: 4px solid #DC2626
- Padding: 2rem 2rem 2rem 3rem
- Border radius: 8px
- Quote text: font-serif, 1.75rem (28px), italic
- Attribution: font-sans, 0.875rem, #737373
```

### Component Code
```tsx
'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

interface PullQuoteProps {
  quote: string;
  attribution?: string;
  background?: 'white' | 'cream';
}

export const PullQuote: React.FC<PullQuoteProps> = ({
  quote,
  attribution,
  background = 'white'
}) => {
  const bgClass = background === 'cream' ? 'bg-cream' : 'bg-white';

  return (
    <motion.div
      variants={fadeInUp}
      className={`mb-20 ${bgClass} border-l-4 border-offline-red rounded-lg pl-12 pr-8 py-8`}
    >
      <blockquote className="font-serif text-3xl text-offline-black italic leading-snug mb-4">
        {quote}
      </blockquote>

      {attribution && (
        <p className="font-sans text-sm text-offline-gray">
          — {attribution}
        </p>
      )}
    </motion.div>
  );
};
```

### Usage Example
```tsx
<PullQuote
  quote="Willpower is fragile in frictionless environments."
  attribution="not a character flaw"
  background="cream"
/>
```

---

## 6. BeforeAfterComparison

### Purpose
Show mindset shifts, make transformation tangible.

### Visual Design
```
┌─────────────────────────────┬─────────────────────────────┐
│  BEFORE                     │  AFTER                      │
│  ─────────                  │  ─────────                  │
│                             │                             │
│  ❌ "Why can't I control    │  ✓ "What has constant       │
│     myself?"                │    access to me?"           │
│                             │                             │
│  [self-blame mindset]       │  [systems thinking]         │
│                             │                             │
└─────────────────────────────┴─────────────────────────────┘

Styling:
- Grid: 50/50 on desktop, stacked on mobile
- Before: Muted colors, strikethrough optional
- After: Bold colors, checkmark
- Divider: 1px vertical line between columns
```

### Component Code
```tsx
'use client';

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { fadeInUp } from './animations';

interface ComparisonSide {
  label: string;
  quote: string;
  context?: string;
}

interface BeforeAfterComparisonProps {
  before: ComparisonSide;
  after: ComparisonSide;
}

export const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({
  before,
  after
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="mb-20 bg-white border border-offline-border rounded-2xl overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Before */}
        <div className="p-8 border-b md:border-b-0 md:border-r border-offline-border/50">
          <div className="flex items-center gap-2 mb-4">
            <X className="w-4 h-4 text-offline-gray" />
            <span className="font-mono text-xs uppercase tracking-widest text-offline-gray">
              {before.label}
            </span>
          </div>

          <p className="font-serif text-2xl text-offline-gray italic mb-4 leading-snug">
            "{before.quote}"
          </p>

          {before.context && (
            <p className="font-sans text-sm text-offline-gray/60">
              {before.context}
            </p>
          )}
        </div>

        {/* After */}
        <div className="p-8 bg-cream/30">
          <div className="flex items-center gap-2 mb-4">
            <Check className="w-4 h-4 text-offline-red" />
            <span className="font-mono text-xs uppercase tracking-widest text-offline-black">
              {after.label}
            </span>
          </div>

          <p className="font-serif text-2xl text-offline-black italic mb-4 leading-snug">
            "{after.quote}"
          </p>

          {after.context && (
            <p className="font-sans text-sm text-offline-black/60">
              {after.context}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
```

### Usage Example
```tsx
<BeforeAfterComparison
  before={{
    label: 'OLD QUESTION',
    quote: 'Why can\'t I control myself?',
    context: 'self-blame, willpower focus'
  }}
  after={{
    label: 'NEW QUESTION',
    quote: 'What has constant access to me?',
    context: 'systems thinking, environment focus'
  }}
/>
```

---

## 7. MicroInteraction

### Purpose
Quick engagement, self-awareness building, no heavy lift.

### Visual Design
```
┌─────────────────────────────────────────────────────┐
│  How do you feel after seeing this?                 │
│                                                     │
│  ○ More settled     ○ More stirred                  │
│                                                     │
│  (No submit needed - selection is the point)        │
└─────────────────────────────────────────────────────┘

Interaction:
- Radio buttons or checkboxes
- Visual feedback on selection (color change, checkmark)
- Optional: Brief animation (200ms)
- No form submission - just awareness
```

### Component Code
```tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

interface MicroInteractionProps {
  question: string;
  options: string[];
  variant?: 'radio' | 'checkbox';
}

export const MicroInteraction: React.FC<MicroInteractionProps> = ({
  question,
  options,
  variant = 'radio'
}) => {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const handleSelect = (index: number) => {
    if (variant === 'radio') {
      setSelected(new Set([index]));
    } else {
      const newSelected = new Set(selected);
      if (newSelected.has(index)) {
        newSelected.delete(index);
      } else {
        newSelected.add(index);
      }
      setSelected(newSelected);
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      className="mb-20 p-8 bg-cream border border-offline-border/50 rounded-xl"
    >
      <p className="font-sans text-lg text-offline-black mb-6">
        {question}
      </p>

      <div className="space-y-3">
        {options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className={`
              w-full text-left p-4 rounded-lg border-2 transition-all
              ${selected.has(i)
                ? 'border-offline-red bg-white text-offline-black'
                : 'border-offline-border bg-white text-offline-gray hover:border-offline-gray'
              }
            `}
          >
            <div className="flex items-center gap-3">
              <div className={`
                w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                ${selected.has(i)
                  ? 'border-offline-red bg-offline-red'
                  : 'border-offline-gray'
                }
              `}>
                {selected.has(i) && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
              <span className="font-sans text-sm">
                {option}
              </span>
            </div>
          </button>
        ))}
      </div>

      <p className="font-sans text-xs text-offline-gray mt-4 italic">
        No submit needed — just notice your response
      </p>
    </motion.div>
  );
};
```

### Usage Example
```tsx
<MicroInteraction
  question="How do you feel after seeing this?"
  options={[
    'More settled',
    'More stirred',
    'Unsure'
  ]}
  variant="radio"
/>
```

---

## 8. ExpandableDetail

### Purpose
Progressive disclosure - keep main flow clean, offer depth on demand.

### Visual Design
```
Collapsed:
┌─────────────────────────────────────────────────────┐
│  Main explanation visible by default                │
│                                                     │
│  [+ Show detailed example] ← Clickable             │
└─────────────────────────────────────────────────────┘

Expanded:
┌─────────────────────────────────────────────────────┐
│  Main explanation visible by default                │
│                                                     │
│  [− Hide example] ← Clickable                      │
│  ┌───────────────────────────────────────────────┐ │
│  │ Detailed example or edge case                 │ │
│  │ explanation that would clutter main flow      │ │
│  └───────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

### Component Code
```tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ExpandableDetailProps {
  summary: string;
  children: React.ReactNode;
}

export const ExpandableDetail: React.FC<ExpandableDetailProps> = ({
  summary,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-offline-gray hover:text-offline-black transition-colors font-sans text-sm"
      >
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
        <span>{isOpen ? 'Hide' : 'Show'} {summary}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 p-6 bg-cream border border-offline-border/50 rounded-lg">
              <div className="font-sans text-sm text-offline-gray leading-relaxed">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
```

### Usage Example
```tsx
<ExpandableDetail summary="detailed example">
  <p>
    Here's how this works in practice. When you receive a notification,
    your brain doesn't just register "new information." It creates an
    open loop that demands resolution...
  </p>
</ExpandableDetail>
```

---

## Component Export Index

Create `/Users/josephhillin/Resolution/app/src/components/module/patterns/index.ts`:

```tsx
export { AnchorMoment } from './AnchorMoment';
export { SidebarCallout } from './SidebarCallout';
export { ConceptCardGrid } from './ConceptCardGrid';
export { ProgressCheckpoint } from './ProgressCheckpoint';
export { PullQuote } from './PullQuote';
export { BeforeAfterComparison } from './BeforeAfterComparison';
export { MicroInteraction } from './MicroInteraction';
export { ExpandableDetail } from './ExpandableDetail';
```

---

## Accessibility Checklist

All components must meet:

### Color Contrast
- Text on cream: 4.5:1 minimum
- Text on white: 4.5:1 minimum
- Interactive elements: 3:1 minimum

### Keyboard Navigation
- All interactive elements focusable
- Focus indicators visible (2px outline, offset)
- Logical tab order

### Screen Readers
- Semantic HTML (article, section, aside)
- ARIA labels where needed
- Alt text for decorative elements (empty string)

### Motion
- Respect prefers-reduced-motion
- Provide no-animation fallback

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Performance Considerations

### Bundle Size
- Each new component: ~2-3kb gzipped
- Total new patterns: ~20kb gzipped
- Acceptable impact given engagement gains

### Animation Performance
- Use transform/opacity only (GPU accelerated)
- Avoid layout thrashing (height animations are ok if infrequent)
- Stagger animations: max 5 components in parallel

### Image Optimization
- Icons: Use Lucide (tree-shakeable)
- No decorative images unless < 50kb
- Lazy load components below fold

---

## Implementation Phases

### Phase 1: Foundation (Week 1)
1. Create `/components/module/patterns/` directory
2. Implement AnchorMoment, ProgressCheckpoint, PullQuote
3. Add to export index
4. Update Tailwind config if needed

### Phase 2: Refactor (Week 2)
5. Refactor UnderstandModule with new patterns
6. Test accessibility, mobile responsiveness
7. Gather user feedback

### Phase 3: Expansion (Week 3-4)
8. Implement remaining components
9. Apply to 3 more modules
10. Performance audit

### Phase 4: Polish (Week 5)
11. Animation timing refinements
12. Final accessibility audit
13. Documentation complete

---

## Testing Scenarios

### Component Tests
```tsx
describe('AnchorMoment', () => {
  it('renders text correctly', () => {
    // Test text rendering
  });

  it('shows accent when specified', () => {
    // Test conditional accent line
  });

  it('maintains accessibility', () => {
    // Test ARIA, semantic HTML
  });
});
```

### Integration Tests
```tsx
describe('Module with new patterns', () => {
  it('maintains scroll rhythm', () => {
    // Test no jarring jumps
  });

  it('respects reduced motion', () => {
    // Test prefers-reduced-motion
  });

  it('works on mobile', () => {
    // Test responsive breakpoints
  });
});
```

---

## Design Tokens (Add to Tailwind Config)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'soft': '0 8px 16px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 12px 24px rgba(0, 0, 0, 0.08)',
      },
    },
  },
};
```

---

## Next Steps

1. **Review**: Share this guide with team/stakeholders
2. **Prioritize**: Decide which components to build first
3. **Build**: Implement Phase 1 (3 components)
4. **Test**: Apply to UnderstandModule as proof-of-concept
5. **Iterate**: Refine based on real content
6. **Scale**: Apply patterns to remaining 9 modules

---

**Final Note**: These components are tools, not rules. The goal is varied rhythm—not rigid structure. If a module naturally flows without AnchorMoments, that's fine. The pattern library exists to solve monotony, not create new constraints.
