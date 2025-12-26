'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Lock, Check } from 'lucide-react';
import {
  ModuleHeader,
  PermissionQuote,
  ContentSection,
  BulletList,
  ActionBlock,
  QuietTruth,
  ModuleTransition,
  Divider,
  staggerChildren,
  fadeInUp
} from '@/components/module';
import { ModuleId } from '@/lib/types';

interface Default {
  category: 'attention' | 'work' | 'personal';
  description: string;
}

interface UnlockModuleProps {
  onNavigate: (id: ModuleId) => void;
}

const UnlockModule: React.FC<UnlockModuleProps> = ({ onNavigate }) => {
  const [defaults, setDefaults] = useState<Default[]>([
    { category: 'attention', description: '' },
    { category: 'attention', description: '' },
    { category: 'work', description: '' },
    { category: 'work', description: '' },
    { category: 'personal', description: '' }
  ]);
  const [locked, setLocked] = useState(false);

  const updateDefault = (index: number, value: string) => {
    setDefaults(prev => prev.map((d, i) =>
      i === index ? { ...d, description: value } : d
    ));
  };

  const updateCategory = (index: number, category: Default['category']) => {
    setDefaults(prev => prev.map((d, i) =>
      i === index ? { ...d, category } : d
    ));
  };

  const handleLock = () => {
    if (defaults.filter(d => d.description).length >= 5) {
      setLocked(true);
    }
  };

  const filledCount = defaults.filter(d => d.description).length;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="max-w-3xl mx-auto pb-24"
    >
      <ModuleHeader
        number="09"
        title="UNLOCK"
        description="Decisions you don't have to make again. Most people don't slide back because they failed. They slide back because old defaults quietly return."
      />

      <PermissionQuote
        lines={[
          "UNLOCK is where you decide — once —",
          "so you don't have to keep deciding later."
        ]}
        label="Permanence begins"
      />

      {/* Bridging context */}
      <ContentSection title="Everything you removed created space.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          You unfollowed. You unmuted. You uncluttered. You unsubscribed. You unplugged.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          But space doesn't stay empty on its own.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed font-medium">
          Now we anchor it — with defaults that keep old patterns from silently returning.
        </p>
      </ContentSection>

      <Divider />

      {/* Nothing drifts back */}
      <ContentSection title="Nothing drifts back by accident.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          When life gets busy, tired, or emotionally full, the environment takes over.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          If defaults aren't chosen deliberately:
        </p>
        <BulletList
          items={[
            'notifications creep back',
            'apps reinstall themselves',
            'boundaries soften',
            'old habits feel "normal" again'
          ]}
        />
        <p className="font-sans text-offline-black mt-6 font-medium">
          Not because you chose them — but because they were waiting.
        </p>
      </ContentSection>

      <Divider />

      {/* Your life runs on defaults */}
      <ContentSection title="Your life runs on defaults.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Not intentions. Not motivation. Not willpower.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed font-medium mb-4">
          Defaults are what happen when you're tired.
        </p>
        <p className="font-sans text-offline-gray">
          UNLOCK is where you choose what happens by default.
        </p>
      </ContentSection>

      {/* Not goal-setting */}
      <motion.div variants={fadeInUp} className="mb-20 p-8 bg-white border border-offline-border rounded-xl text-center">
        <h3 className="font-serif text-xl text-offline-black mb-4">This is not goal-setting.</h3>
        <p className="font-sans text-offline-gray mb-6">
          You're not planning a better future. You're removing future negotiation.
        </p>
        <p className="font-serif text-2xl text-offline-red italic mb-4">
          "What do I want to be true on an average day?"
        </p>
        <p className="font-sans text-sm text-offline-gray">
          Not your best day. Not your ideal self. Your real life.
        </p>
      </motion.div>

      {/* Action Block - 5 Defaults */}
      <ActionBlock title="UNLOCK: Set your defaults" duration="15 min">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-4 h-4 text-offline-gray" />
          <span className="font-mono text-sm text-offline-gray">You'll set five defaults. No more.</span>
        </div>

        <div className="mb-6">
          <p className="font-sans text-sm text-offline-gray mb-4">They should feel:</p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-cream rounded-full text-sm text-offline-black">slightly conservative</span>
            <span className="px-3 py-1 bg-cream rounded-full text-sm text-offline-black">easy to follow</span>
            <span className="px-3 py-1 bg-cream rounded-full text-sm text-offline-black">protective rather than ambitious</span>
          </div>
        </div>

        {!locked ? (
          <div className="space-y-4">
            {defaults.map((d, index) => (
              <div key={index} className="flex gap-3">
                <select
                  value={d.category}
                  onChange={(e) => updateCategory(index, e.target.value as Default['category'])}
                  className="bg-cream border-0 rounded-lg px-3 py-3 text-sm text-offline-black focus:ring-1 focus:ring-offline-gray/50 w-32"
                >
                  <option value="attention">Attention</option>
                  <option value="work">Work</option>
                  <option value="personal">Personal</option>
                </select>
                <input
                  type="text"
                  value={d.description}
                  onChange={(e) => updateDefault(index, e.target.value)}
                  placeholder={
                    d.category === 'attention'
                      ? 'e.g., No phone first hour of day'
                      : d.category === 'work'
                      ? 'e.g., Deep work before meetings'
                      : 'e.g., Dinner without screens'
                  }
                  className="flex-1 bg-cream border-0 rounded-lg p-3 text-offline-black focus:ring-1 focus:ring-offline-gray/50 placeholder:text-offline-gray/40"
                />
              </div>
            ))}

            <div className="flex items-center justify-between pt-4">
              <span className="font-mono text-xs text-offline-gray">
                {filledCount}/5 defaults set
              </span>
              <button
                onClick={handleLock}
                disabled={filledCount < 5}
                className="bg-offline-black text-white px-6 py-2 rounded-full font-sans text-sm hover:bg-offline-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Lock className="w-4 h-4" />
                Lock for 30 days
              </button>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 bg-cream rounded-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Check className="w-5 h-5 text-offline-red" />
              <span className="font-serif text-lg text-offline-black">Defaults locked</span>
            </div>
            <div className="space-y-3">
              {defaults.filter(d => d.description).map((d, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <span className="font-mono text-xs text-offline-gray uppercase w-20">{d.category}</span>
                  <p className="font-sans text-sm text-offline-black">{d.description}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-sm text-offline-gray mt-4">
              Do not revisit these defaults for 30 days. Not to tweak. Not to optimize. Not to "improve."
            </p>
          </motion.div>
        )}
      </ActionBlock>

      {/* Pause */}
      <motion.div variants={fadeInUp} className="mb-20 py-12 border-t border-b border-offline-border/40">
        <h3 className="font-serif text-xl text-offline-black mb-6 text-center">Pause here.</h3>
        <p className="font-sans text-offline-gray text-center mb-6">
          Picture a normal week: distractions, responsibilities, imperfect energy.
        </p>
        <div className="max-w-md mx-auto text-center">
          <p className="font-sans text-offline-black mb-2">Ask yourself:</p>
          <p className="font-sans text-offline-gray italic">Do these defaults still hold?</p>
          <p className="font-sans text-offline-gray italic">Do they reduce decisions?</p>
          <p className="font-sans text-offline-gray italic">Do they protect what matters without effort?</p>
        </div>
        <p className="font-sans text-offline-black text-center mt-8 font-medium">
          If yes, they're correct.
        </p>
      </motion.div>

      <QuietTruth
        lines={["You don't need better discipline.", "You need fewer decisions."]}
        highlight={1}
      />

      <Divider />

      {/* Defaults = self-trust */}
      <motion.div variants={fadeInUp} className="mb-20 py-12 bg-cream text-center">
        <p className="font-serif text-2xl text-offline-black italic">
          Defaults are self-trust, written down.
        </p>
        <p className="font-serif text-2xl text-offline-red italic mt-4">
          Freedom is rarely loud.
        </p>
      </motion.div>

      <Divider />

      {/* Adjustments */}
      <ContentSection title="Adjustments have a place.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          You can change a default later.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Just not in moments of fatigue.
        </p>
        <p className="font-sans text-offline-black font-medium">
          Changes happen deliberately — not reactively. That's how this lasts.
        </p>
      </ContentSection>

      <ModuleTransition
        closingLines={["You've cleared noise.", "You've built walls.", "You've chosen defaults."]}
        nextModule={ModuleId.UNBURDENED}
        nextNumber="10"
        onNavigate={onNavigate}
      />
    </motion.div>
  );
};

export default UnlockModule;
