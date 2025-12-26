'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Loader2 } from 'lucide-react';
import {
  ModuleHeader,
  PermissionQuote,
  ContentSection,
  BulletList,
  QuietTruth,
  ModuleTransition,
  staggerChildren,
  fadeInUp
} from '@/components/module';
import { ModuleId } from '@/lib/types';

interface UnloadModuleProps {
  onNavigate: (id: ModuleId) => void;
}

const UnloadModule: React.FC<UnloadModuleProps> = ({ onNavigate }) => {
  const [inputs, setInputs] = useState({
    noisy: '',
    draining: '',
    leaveBehind: ''
  });
  const [reflection, setReflection] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof typeof inputs, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleReflect = async () => {
    if (!inputs.noisy && !inputs.draining && !inputs.leaveBehind) return;
    setIsLoading(true);
    try {
      const response = await fetch('/api/reflect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      });
      const data = await response.json();
      setReflection(data.reflection);
    } catch {
      setReflection("Thank you for writing this down. Just naming these things creates space.");
    }
    setIsLoading(false);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="max-w-3xl mx-auto pb-24"
    >
      <ModuleHeader
        number="01"
        title="UNLOAD"
        description="Permission to Stop Carrying"
      />

      <PermissionQuote
        lines={["You don't need to fix anything yet."]}
        label="Begin here"
      />

      {/* SECTION 1: Permission/Expectations - Light, spacious */}
      <ContentSection
        title="There is nothing to do here."
        emphasis="important"
        separator="line"
      >
        <p className="font-sans text-lg md:text-xl text-offline-gray leading-relaxed mb-5">
          You don't need to change your phone.
        </p>
        <p className="font-sans text-lg md:text-xl text-offline-gray leading-relaxed mb-5">
          You don't need to delete anything.
        </p>
        <p className="font-sans text-lg md:text-xl text-offline-gray leading-relaxed mb-5">
          You don't need a plan.
        </p>
        <p className="font-sans text-xl md:text-2xl text-offline-black leading-tight font-medium mb-5">
          For this section, all you need to do is read.
        </p>
        <p className="font-sans text-lg text-offline-gray">
          Most guides rush you into action. This one starts by letting something go.
        </p>
      </ContentSection>

      {/* SECTION 2: Problem Identification - Elevated container, grounded */}
      <ContentSection
        title="If this year felt heavier than it should have"
        variant="elevated"
        emphasis="important"
        separator="dots"
      >
        <p className="font-sans text-lg md:text-xl text-offline-gray leading-relaxed mb-5">
          Even on days that were technically "fine."
        </p>
        <p className="font-sans text-lg md:text-xl text-offline-gray leading-relaxed mb-5">
          Even when nothing was actively wrong.
        </p>
        <p className="font-sans text-xl md:text-2xl text-offline-black leading-tight font-medium mb-8">
          That's not a personal failure.
        </p>
        <p className="font-sans text-lg text-offline-gray mb-5">
          It's what happens when too many things have quiet access to you:
        </p>
        <BulletList
          items={[
            'messages',
            'feeds',
            'updates',
            'requests',
            'reminders',
            'unfinished tabs',
            'background decisions'
          ]}
        />
        <p className="font-sans text-lg text-offline-gray leading-relaxed mt-8">
          None of them are emergencies.
        </p>
        <p className="font-sans text-xl md:text-2xl text-offline-black leading-tight font-medium mt-2">
          Together, they become weight.
        </p>
      </ContentSection>

      {/* SECTION 3: Reassurance/Pivot - Highlighted, emotional */}
      <ContentSection
        title="You are not behind."
        variant="highlight"
        emphasis="climactic"
      >
        <p className="font-sans text-lg md:text-xl text-offline-gray leading-relaxed mb-5">
          If your attention feels scattered...
        </p>
        <p className="font-sans text-lg md:text-xl text-offline-gray leading-relaxed mb-5">
          If your phone feels louder than it used to...
        </p>
        <p className="font-sans text-lg md:text-xl text-offline-gray leading-relaxed mb-8">
          If rest doesn't fully restore you...
        </p>
        <p className="font-sans text-xl md:text-2xl text-offline-black leading-tight font-medium mb-5">
          That doesn't mean something is wrong with you.
        </p>
        <p className="font-sans text-lg md:text-xl text-offline-gray">
          It means your environment has been asking too much, too often, for too long.
        </p>
      </ContentSection>

      {/* Years don't reset attention */}
      <motion.div variants={fadeInUp} className="mb-20 py-12 bg-cream text-center">
        <h3 className="font-serif text-3xl md:text-4xl text-offline-black leading-tight mb-4">
          Years don't reset attention.
        </h3>
        <p className="font-sans text-lg text-offline-gray mb-4">
          January doesn't clear mental clutter.
        </p>
        <p className="font-sans text-lg text-offline-gray mb-6">
          A new calendar doesn't remove old defaults.
        </p>
        <p className="font-sans text-offline-gray mb-4">
          If nothing changes, most people carry the same digital noise into the next year — just with a new label.
        </p>
        <p className="font-sans text-offline-black font-medium">
          This isn't a warning. It's an observation. And it's why this guide exists.
        </p>
      </motion.div>

      {/* Before we clean anything */}
      <ContentSection title="Before we clean anything, we unload.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Not by fixing. Not by optimizing. Not by improving.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed font-medium mb-4">
          By naming.
        </p>
        <p className="font-sans text-offline-gray">
          Because you can't put something down if you haven't noticed you're holding it.
        </p>
      </ContentSection>

      {/* A quiet moment - Exercise */}
      <motion.div variants={fadeInUp} className="mb-20">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="w-5 h-5 text-offline-red" />
          <h3 className="font-serif text-2xl text-offline-black">A quiet moment</h3>
        </div>
        <p className="font-mono text-xs text-offline-gray mb-6">5 minutes</p>

        <div className="bg-white p-8 rounded-2xl border border-offline-border shadow-sm">
          <div className="mb-6 p-4 bg-cream/50 rounded-lg border border-offline-border/30">
            <p className="font-sans text-xs text-offline-gray">
              <span className="font-medium text-offline-black">Your privacy:</span> Nothing you write here is stored, tracked, or sent anywhere. This guide exists only in your browser, for your eyes only.
            </p>
          </div>
          <p className="font-sans text-offline-gray mb-4">
            If now isn't a good time, skip this and come back later. Nothing breaks if you don't do it immediately.
          </p>
          <p className="font-sans text-offline-black mb-6">
            If you're ready, answer these three prompts — briefly, without editing:
          </p>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block font-sans text-sm font-medium text-offline-black">
                1. What feels noisy right now?
              </label>
              <p className="text-xs text-offline-gray mb-2">Not what you should feel. What you actually feel.</p>
              <textarea
                value={inputs.noisy}
                onChange={(e) => handleInputChange('noisy', e.target.value)}
                className="w-full bg-cream border-0 rounded-lg p-4 text-offline-black focus:ring-2 focus:ring-offline-red focus:outline-none resize-none h-24 placeholder:text-offline-gray/40 transition-shadow"
                placeholder="Write freely..."
              />
            </div>

            <div className="space-y-2">
              <label className="block font-sans text-sm font-medium text-offline-black">
                2. What feels digitally draining?
              </label>
              <p className="text-xs text-offline-gray mb-2">Not what's "bad." What leaves you a little more tired afterward.</p>
              <textarea
                value={inputs.draining}
                onChange={(e) => handleInputChange('draining', e.target.value)}
                className="w-full bg-cream border-0 rounded-lg p-4 text-offline-black focus:ring-2 focus:ring-offline-red focus:outline-none resize-none h-24 placeholder:text-offline-gray/40 transition-shadow"
                placeholder="Write freely..."
              />
            </div>

            <div className="space-y-2">
              <label className="block font-sans text-sm font-medium text-offline-black">
                3. What do you not want to carry into the next year?
              </label>
              <p className="text-xs text-offline-gray mb-2">Be honest. You don't owe this answer to anyone.</p>
              <textarea
                value={inputs.leaveBehind}
                onChange={(e) => handleInputChange('leaveBehind', e.target.value)}
                className="w-full bg-cream border-0 rounded-lg p-4 text-offline-black focus:ring-2 focus:ring-offline-red focus:outline-none resize-none h-24 placeholder:text-offline-gray/40 transition-shadow"
                placeholder="Write freely..."
              />
            </div>
          </div>

          <p className="font-sans text-sm text-offline-gray mt-6 text-center">
            You're not solving anything yet. You're just unloading.
          </p>

          <div className="pt-4 flex justify-end">
            <button
              onClick={handleReflect}
              disabled={isLoading || (!inputs.noisy && !inputs.draining && !inputs.leaveBehind)}
              className="bg-offline-black text-white px-6 py-2 rounded-full font-sans text-sm hover:bg-offline-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Reflect'}
            </button>
          </div>

          {reflection && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6 p-6 bg-cream rounded-xl border border-offline-border/50"
            >
              <p className="font-sans text-offline-gray leading-relaxed">{reflection}</p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Stop when you feel done */}
      <ContentSection title="Stop when you feel done.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          You don't need clarity.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          You don't need a breakthrough.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-6">
          You don't need to reach a conclusion.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed font-medium mb-4">
          If something shifted — even slightly — that's enough.
        </p>
        <p className="font-sans text-offline-gray">
          If nothing shifted, that's also fine. This guide works even when you're tired.
        </p>
      </ContentSection>

      <QuietTruth
        lines={[
          "Nothing you named means you failed.",
          "Nothing you named means you're weak.",
          "It just means you've been responsive in a world that constantly asks for response."
        ]}
        highlight={2}
      />

      {/* The goal */}
      <motion.div variants={fadeInUp} className="mb-20 py-12 text-center">
        <p className="font-sans text-lg text-offline-gray mb-2">The goal here isn't control.</p>
        <p className="font-serif text-3xl text-offline-red">It's relief.</p>
      </motion.div>

      {/* Take a breath */}
      <ContentSection title="Take a breath.">
        <p className="font-sans text-lg text-offline-black leading-relaxed font-medium mb-4">
          You don't need to carry everything at once.
        </p>
        <p className="font-sans text-offline-gray">
          Next, we'll gently re-orient — not to explain what's wrong, but to remove blame from the picture entirely.
        </p>
      </ContentSection>

      <ModuleTransition
        closingLines={["You don't need clarity yet.", "Just honesty."]}
        nextModule={ModuleId.UNDERSTAND}
        nextNumber="2"
        onNavigate={onNavigate}
      />
    </motion.div>
  );
};

export default UnloadModule;
