'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ModuleHeader,
  PermissionQuote,
  ContentSection,
  BulletList,
  QuietTruth,
  Divider,
  staggerChildren,
  fadeInUp
} from '@/components/module';
import ShareButton from '@/components/ShareButton';

const Confetti: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; color: string }>>([]);

  useEffect(() => {
    const colors = ['#D94F2B', '#1A1A1A', '#888888'];
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -20, x: `${p.x}vw`, opacity: 1 }}
          animate={{ y: '100vh', opacity: 0 }}
          transition={{ duration: 3, delay: p.delay, ease: 'easeOut' }}
          className="absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: p.color }}
        />
      ))}
    </div>
  );
};

const UnburdenedModule: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Check if we've shown confetti before
    const hasSeenConfetti = localStorage.getItem('offline_confetti_shown');
    if (!hasSeenConfetti) {
      setShowConfetti(true);
      localStorage.setItem('offline_confetti_shown', 'true');
      // Hide after animation
      setTimeout(() => setShowConfetti(false), 4000);
    }
  }, []);
  return (
    <>
      {showConfetti && <Confetti />}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="max-w-3xl mx-auto pb-24"
      >
        <ModuleHeader
        number="10"
        title="UNBURDENED"
        description="This is how you live now. You didn't fix yourself. You returned to yourself."
      />

      <PermissionQuote
        lines={[
          "Nothing dramatic happened.",
          "That's why this works."
        ]}
        label="Complete"
      />

      {/* Notice what's quieter */}
      <ContentSection title="Notice what's quieter.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Not perfect. Just quieter.
        </p>
        <BulletList
          items={[
            'fewer interruptions',
            'less background urgency',
            'fewer things asking for you',
            'more moments that feel complete'
          ]}
        />
        <p className="font-sans text-lg text-offline-black leading-relaxed mt-8">
          You didn't add anything to your life.
        </p>
        <p className="font-sans text-offline-black font-medium mt-2">
          You removed what didn't belong.
        </p>
      </ContentSection>

      <Divider />

      {/* Not a transformation story */}
      <ContentSection title="This isn't a transformation story.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          You didn't:
        </p>
        <BulletList
          items={[
            'quit technology',
            'become disciplined',
            'eliminate distraction forever'
          ]}
          variant="strikethrough"
        />
        <p className="font-sans text-lg text-offline-black leading-relaxed mt-8 font-medium">
          You stopped letting everything in by default.
        </p>
        <p className="font-sans text-offline-gray mt-4">
          That's it. And that's enough.
        </p>
      </ContentSection>

      <Divider />

      {/* Who you are now */}
      <motion.div variants={fadeInUp} className="mb-20 p-8 bg-white border border-offline-border rounded-xl">
        <h3 className="font-serif text-2xl text-offline-black mb-6">Who you are now (gently named)</h3>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-6">
          You're someone who:
        </p>
        <BulletList
          items={[
            'chooses exposure instead of absorbing it',
            'protects attention without effort',
            'designs environments instead of fighting habits',
            'trusts quiet more than urgency'
          ]}
        />
        <p className="font-sans text-offline-gray mt-8">
          This isn't an identity you perform.
        </p>
        <p className="font-sans text-offline-black font-medium mt-2">
          It's one you inhabit.
        </p>
      </motion.div>

      <Divider />

      {/* Maintenance */}
      <ContentSection title="Maintenance is rare — and light.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Nothing here requires daily effort.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Occasionally:
        </p>
        <BulletList
          items={[
            "you'll revisit what you follow",
            "you'll silence new noise",
            "you'll reinforce a wall",
            "you'll adjust a default"
          ]}
        />
        <p className="font-sans text-offline-black mt-6 font-medium">
          Maintenance isn't failure. It's care.
        </p>
      </ContentSection>

      <Divider />

      {/* If you slip */}
      <ContentSection title="If you slip">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Nothing broke.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          You didn't undo the work. You didn't fail.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed font-medium mb-4">
          You noticed.
        </p>
        <p className="font-sans text-offline-gray">
          Noticing is the skill. Returning is the practice. You already know how to do that now.
        </p>
      </ContentSection>

      {/* Truths to carry */}
      <motion.div variants={fadeInUp} className="mb-20 p-8 bg-cream rounded-xl">
        <h3 className="font-serif text-xl text-offline-black mb-6">A few truths to carry with you</h3>
        <div className="space-y-4">
          <p className="font-serif text-lg text-offline-black">Freedom is rarely loud.</p>
          <p className="font-serif text-lg text-offline-black">Less noise doesn't mean less life.</p>
          <p className="font-serif text-lg text-offline-black">Attention is a finite resource — not a moral one.</p>
          <p className="font-serif text-lg text-offline-red">Calm doesn't need to compete.</p>
        </div>
        <p className="font-sans text-sm text-offline-gray mt-6">
          Let these settle.
        </p>
      </motion.div>

      <QuietTruth
        lines={["What you named at the beginning —", "much of it is quieter now."]}
        highlight={1}
      />

      <Divider />

      {/* Close the loop */}
      <ContentSection title="Close the loop">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Not because you worked harder.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed font-medium">
          Because you stopped carrying what wasn't yours.
        </p>
      </ContentSection>

      <Divider />

      {/* Nothing left to do */}
      <motion.div variants={fadeInUp} className="mb-20 py-16 text-center">
        <h3 className="font-serif text-2xl text-offline-black mb-6">There's nothing left to do.</h3>
        <div className="space-y-2 text-offline-gray">
          <p>Don't optimize this.</p>
          <p>Don't turn it into a system.</p>
          <p>Don't measure it.</p>
        </div>
        <p className="font-sans text-lg text-offline-black mt-8">
          Just live a few days like this.
        </p>
        <p className="font-sans text-offline-gray mt-2">
          Notice what holds.
        </p>
      </motion.div>

      {/* Final */}
        <motion.div variants={fadeInUp} className="text-center py-16 border-t border-offline-border/40">
          <p className="font-serif text-4xl md:text-5xl text-offline-red mb-8">
            You're unburdened.
          </p>
          <ShareButton className="inline-flex justify-center" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default UnburdenedModule;
