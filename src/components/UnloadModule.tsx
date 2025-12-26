'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Sparkles, X } from 'lucide-react';

const UnloadModule: React.FC = () => {
  const [inputs, setInputs] = useState({
    noisy: '',
    drains: '',
    leaveBehind: ''
  });
  const [reflection, setReflection] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof typeof inputs, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleReflect = async () => {
    if (!inputs.noisy && !inputs.drains && !inputs.leaveBehind) return;
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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="max-w-3xl mx-auto pb-24"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="mb-16">
        <span className="font-mono text-xs text-offline-red tracking-widest uppercase mb-4 block">Module 01</span>
        <h1 className="font-serif text-5xl md:text-6xl text-offline-black mb-6">UNLOAD</h1>
        <p className="font-sans text-lg text-offline-gray leading-relaxed max-w-xl">
          Job is emotional readiness, not behavior change. Lower defenses. Reduce shame. Create psychological safety.
        </p>
      </motion.div>

      {/* Avoid Section */}
      <motion.div variants={fadeInUp} className="mb-16 p-8 bg-white border border-offline-border rounded-xl shadow-sm">
        <h2 className="font-serif text-2xl text-offline-black mb-6">What to avoid in UNLOAD</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['Tips', 'Advice', 'Explanations', 'Frameworks', '"Here\'s what we\'ll do"'].map((item) => (
            <div key={item} className="flex items-center gap-3 text-offline-gray">
              <X className="w-4 h-4 text-offline-red opacity-60" />
              <span className="font-sans text-sm">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Section A: Permission */}
      <motion.div variants={fadeInUp} className="mb-20">
        <div className="pl-6 border-l-2 border-offline-red/30 space-y-6">
          <p className="font-serif text-2xl md:text-3xl italic text-offline-black leading-tight">
            "You don't need to fix everything.
          </p>
          <p className="font-serif text-2xl md:text-3xl italic text-offline-black leading-tight">
            You don't need to quit technology.
          </p>
          <p className="font-serif text-2xl md:text-3xl italic text-offline-black leading-tight">
            You don't need more discipline."
          </p>
        </div>
        <p className="mt-4 text-sm text-offline-gray font-mono uppercase tracking-wide">Permission Granted</p>
      </motion.div>

      {/* Section B: Normalize */}
      <motion.div variants={fadeInUp} className="mb-20">
        <h3 className="font-serif text-2xl text-offline-black mb-8">Normalize the exhaustion</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest">How it feels</h4>
            <ul className="space-y-3">
              {['Mentally tired even after rest', 'Constant low-level noise in the mind', 'Reaching for the phone without deciding', 'Feeling behind without knowing why'].map(item => (
                <li key={item} className="flex items-start gap-3 text-offline-black/80">
                  <span className="w-1.5 h-1.5 bg-offline-black/20 rounded-full mt-2" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 opacity-50">
            <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest">Avoid these words</h4>
            <ul className="space-y-3">
              {['Addiction', 'Dopamine', 'Broken attention'].map(item => (
                <li key={item} className="flex items-start gap-3 text-offline-gray line-through decoration-offline-red/40">
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Section C: Reframe */}
      <motion.div variants={fadeInUp} className="mb-20 py-12 bg-cream text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-offline-border/20 pointer-events-none" />
        <h3 className="relative font-serif text-3xl md:text-4xl text-offline-black leading-tight mb-4">
          Years don't reset attention.
        </h3>
        <h3 className="relative font-serif text-3xl md:text-4xl text-offline-red leading-tight">
          Only decisions do.
        </h3>
      </motion.div>

      {/* Section D: Nothing to do */}
      <motion.div variants={fadeInUp} className="mb-20 flex justify-center">
        <div className="bg-white px-8 py-6 rounded-full border border-offline-border shadow-sm flex items-center gap-4">
          <div className="w-2 h-2 bg-offline-red rounded-full animate-pulse" />
          <p className="font-sans text-sm text-offline-gray">There is nothing to do in this section. Just read.</p>
        </div>
      </motion.div>

      {/* Section E: Exercise */}
      <motion.div variants={fadeInUp} className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-5 h-5 text-offline-red" />
          <h3 className="font-serif text-2xl text-offline-black">Mental Download</h3>
        </div>

        <div className="space-y-8 bg-white p-8 md:p-10 rounded-2xl border border-offline-border shadow-sm relative overflow-hidden">

          <div className="space-y-2">
            <label className="block font-sans text-sm font-medium text-offline-black">What feels noisy right now?</label>
            <textarea
              value={inputs.noisy}
              onChange={(e) => handleInputChange('noisy', e.target.value)}
              className="w-full bg-cream border-0 rounded-lg p-4 text-offline-black focus:ring-1 focus:ring-offline-gray/50 resize-none h-24 placeholder:text-offline-gray/40 transition-all"
              placeholder="e.g., The constant notifications, the unfinished projects..."
            />
          </div>

          <div className="space-y-2">
            <label className="block font-sans text-sm font-medium text-offline-black">What drains me digitally?</label>
            <textarea
              value={inputs.drains}
              onChange={(e) => handleInputChange('drains', e.target.value)}
              className="w-full bg-cream border-0 rounded-lg p-4 text-offline-black focus:ring-1 focus:ring-offline-gray/50 resize-none h-24 placeholder:text-offline-gray/40 transition-all"
              placeholder="e.g., doomscrolling at night, email first thing in the morning..."
            />
          </div>

          <div className="space-y-2">
            <label className="block font-sans text-sm font-medium text-offline-black">What do I not want to bring into 2025?</label>
            <textarea
              value={inputs.leaveBehind}
              onChange={(e) => handleInputChange('leaveBehind', e.target.value)}
              className="w-full bg-cream border-0 rounded-lg p-4 text-offline-black focus:ring-1 focus:ring-offline-gray/50 resize-none h-24 placeholder:text-offline-gray/40 transition-all"
              placeholder="e.g., The feeling of always being reachable..."
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={handleReflect}
              disabled={isLoading || (!inputs.noisy && !inputs.drains && !inputs.leaveBehind)}
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
              <h4 className="font-serif text-lg text-offline-black mb-2">Reflection</h4>
              <p className="font-sans text-offline-gray leading-relaxed">{reflection}</p>
            </motion.div>
          )}

        </div>
      </motion.div>

      {/* Section F: Closing */}
      <motion.div variants={fadeInUp} className="text-center py-16 border-t border-offline-border/40">
        <p className="font-serif text-2xl text-offline-black italic mb-2">"You don't need clarity yet.</p>
        <p className="font-serif text-2xl text-offline-black italic">Just honesty."</p>

        <div className="mt-12">
          <button className="text-xs font-mono uppercase tracking-widest text-offline-gray hover:text-offline-red transition-colors">
            Continue to Part 2 &rarr;
          </button>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default UnloadModule;
