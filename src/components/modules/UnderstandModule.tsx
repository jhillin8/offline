'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ModuleHeader,
  PermissionQuote,
  ContentSection,
  BulletList,
  QuietTruth,
  ModuleTransition,
  Divider,
  staggerChildren,
  fadeInUp
} from '@/components/module';
import { ModuleId } from '@/lib/types';

interface UnderstandModuleProps {
  onNavigate: (id: ModuleId) => void;
}

const UnderstandModule: React.FC<UnderstandModuleProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="max-w-3xl mx-auto pb-24"
    >
      <ModuleHeader
        number="02"
        title="UNDERSTAND"
        description="Clarity without shame. Before we change anything, it helps to understand why this feels heavy — without turning it into a diagnosis."
      />

      <PermissionQuote
        lines={[
          "You don't need more discipline.",
          "You don't need to try harder.",
          "You don't need to fix yourself."
        ]}
      />

      {/* Nothing here is a personal failure */}
      <ContentSection title="Nothing here is a personal failure.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-6">
          If your attention feels fragmented, it's not because you're weak or unfocused.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed mb-6">
          It's because you're living inside systems designed to interrupt you:
        </p>
        <BulletList
          items={[
            'feeds that refresh endlessly',
            'alerts that demand immediacy',
            'apps that reward checking',
            'tools that blur work and rest'
          ]}
        />
        <p className="font-sans text-lg text-offline-gray leading-relaxed mt-8 mb-4">
          Over time, your mind adapts. Not by focusing less — but by <span className="text-offline-black font-medium">scanning more</span>.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed">
          That adaptation feels like mental tiredness, low-grade anxiety, difficulty settling, the urge to check "just in case."
        </p>
        <p className="font-sans text-base text-offline-black mt-6 font-medium">
          This isn't a flaw. It's a predictable response.
        </p>
      </ContentSection>

      <Divider />

      {/* The real cost */}
      <ContentSection title="The real cost isn't screen time.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-6">
          It's not about how many hours you spend on your phone.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed mb-4">
          The deeper cost is:
        </p>
        <BulletList
          items={[
            'fewer uninterrupted thoughts',
            'fewer moments of mental quiet',
            'fewer decisions that feel complete'
          ]}
        />
        <p className="font-sans text-lg text-offline-gray leading-relaxed mt-8">
          When attention is constantly pulled, the mind never fully lands.
          That's why rest sometimes doesn't feel restorative.
        </p>
      </ContentSection>

      <Divider />

      {/* This isn't about addiction */}
      <ContentSection title="This isn't about addiction.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-6">
          You don't need a label to explain this.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed mb-4">
          What's happening is simpler:
        </p>
        <BulletList
          items={[
            'interruptions create open loops',
            'open loops create tension',
            'tension creates the urge to check'
          ]}
        />
        <p className="font-sans text-lg text-offline-gray leading-relaxed mt-8">
          The loop isn't moral. It's mechanical.
        </p>
        <p className="font-sans text-base text-offline-black mt-4 font-medium">
          And mechanical problems don't require shame — they require design.
        </p>
      </ContentSection>

      <Divider />

      {/* Willpower */}
      <ContentSection title="Willpower was never the problem.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Most people try to solve this by setting limits, relying on motivation, promising to "be better."
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-6">
          Those strategies fail not because people are lazy, but because <span className="text-offline-black font-medium">willpower is fragile in frictionless environments</span>.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed mb-4">
          If access is instant, attention leaks.
        </p>
        <p className="font-sans text-base text-offline-gray">
          That's not a character issue. It's physics.
        </p>
      </ContentSection>

      <Divider variant="dots" />

      {/* Reframing */}
      <motion.div variants={fadeInUp} className="mb-20 p-8 bg-white border border-offline-border rounded-xl">
        <h3 className="font-serif text-2xl text-offline-black mb-6">A reframing that matters</h3>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">Instead of asking:</p>
        <p className="font-serif text-xl text-offline-gray italic pl-4 border-l-2 border-offline-border mb-6">
          "Why can't I control myself?"
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">Try this:</p>
        <p className="font-serif text-xl text-offline-red pl-4 border-l-2 border-offline-red/30 font-medium">
          "What has constant access to me?"
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mt-8">
          That single shift changes everything. Because access determines attention. And attention shapes experience.
        </p>
      </motion.div>

      {/* Reflection */}
      <motion.div variants={fadeInUp} className="mb-20 p-8 bg-cream rounded-xl border border-offline-border/50">
        <h3 className="font-serif text-xl text-offline-black mb-4">A short reflection (optional)</h3>
        <p className="font-sans text-offline-gray leading-relaxed mb-6">
          Take a moment and answer this — briefly:
        </p>
        <BulletList
          items={[
            'What interrupts you most often?',
            'Which interruptions feel unnecessary in hindsight?',
            'Where does urgency seem louder than it needs to be?'
          ]}
        />
        <p className="font-sans text-offline-gray leading-relaxed mt-6">
          You don't need to solve these yet. Just notice.
        </p>
      </motion.div>

      <QuietTruth
        lines={['Access determines attention.', 'Attention shapes experience.']}
        highlight={1}
      />

      <Divider />

      {/* Closing */}
      <ContentSection title="One important thing before we move on">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          You are not here to eliminate technology.
          You are not here to optimize every moment.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed font-medium mb-6">
          You're here to reduce noise until choice reappears.
        </p>
        <p className="font-sans text-offline-gray">
          Understanding removes blame. The next steps restore agency.
        </p>
      </ContentSection>

      <ModuleTransition
        closingLines={['Understanding removes blame.', 'The next steps restore agency.']}
        nextModule={ModuleId.UNFOLLOW}
        nextNumber="3"
        onNavigate={onNavigate}
      />
    </motion.div>
  );
};

export default UnderstandModule;
