'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Plus, Check } from 'lucide-react';
import {
  ModuleHeader,
  PermissionQuote,
  ContentSection,
  BulletList,
  ActionBlock,
  QuietTruth,
  ModuleTransition,
  staggerChildren,
  fadeInUp
} from '@/components/module';
import { ModuleId } from '@/lib/types';

interface Wall {
  type: 'time' | 'place' | 'context';
  description: string;
  protects: string;
}

interface UnplugModuleProps {
  onNavigate: (id: ModuleId) => void;
}

const UnplugModule: React.FC<UnplugModuleProps> = ({ onNavigate }) => {
  const [walls, setWalls] = useState<Wall[]>([
    { type: 'time', description: '', protects: '' },
    { type: 'place', description: '', protects: '' }
  ]);
  const [wallsSet, setWallsSet] = useState(false);

  const updateWall = (index: number, field: keyof Wall, value: string) => {
    setWalls(prev => prev.map((wall, i) =>
      i === index ? { ...wall, [field]: value } : wall
    ));
  };

  const handleSetWalls = () => {
    if (walls.every(w => w.description && w.protects)) {
      setWallsSet(true);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="max-w-3xl mx-auto pb-24"
    >
      <ModuleHeader
        number="08"
        title="UNPLUG"
        description="Build walls around attention. Boundaries aren't restriction. They're automation. This step is about designing your environment so attention doesn't need defending."
      />

      <PermissionQuote
        lines={[
          "Willpower fades.",
          "Design holds."
        ]}
        label="Environment over effort"
      />

      {/* Willpower fades */}
      <ContentSection>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Most people don't "fail" at focus.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          They just ask themselves to make the same decision — again, and again, and again.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Every repeated decision creates fatigue. Fatigue reopens old patterns.
        </p>
        <p className="font-sans text-offline-black font-medium">
          UNPLUG ends that loop.
        </p>
      </ContentSection>

      {/* Rules vs Walls */}
      <motion.div variants={fadeInUp} className="mb-20">
        <h3 className="font-serif text-2xl text-offline-black mb-8">Rules ask for effort. Walls remove negotiation.</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-cream border border-offline-border/50 rounded-xl">
            <h4 className="font-serif text-lg text-offline-gray mb-4">Rules sound like</h4>
            <div className="space-y-3">
              <p className="font-sans text-sm text-offline-gray italic">"I shouldn't check my phone at night."</p>
              <p className="font-sans text-sm text-offline-gray italic">"I'll try not to scroll during work."</p>
            </div>
          </div>
          <div className="p-6 bg-white border border-offline-border rounded-xl">
            <h4 className="font-serif text-lg text-offline-black mb-4">Walls sound like</h4>
            <div className="space-y-3">
              <p className="font-sans text-sm text-offline-black">"My phone doesn't live in the bedroom."</p>
              <p className="font-sans text-sm text-offline-black">"These apps only exist on desktop."</p>
            </div>
          </div>
        </div>
        <p className="font-sans text-offline-black mt-6 text-center font-medium">
          Walls work even when you're tired.
        </p>
      </motion.div>

      {/* One principle */}
      <motion.div variants={fadeInUp} className="mb-20 p-8 bg-white border border-offline-border rounded-xl text-center">
        <h3 className="font-serif text-xl text-offline-black mb-4">One principle only</h3>
        <p className="font-serif text-2xl text-offline-red italic mb-6">
          "If it requires motivation, it's not a wall."
        </p>
        <p className="font-sans text-offline-gray">Walls must be:</p>
        <div className="flex justify-center gap-6 mt-4">
          <span className="text-offline-black">boring</span>
          <span className="text-offline-black">enforceable without thinking</span>
          <span className="text-offline-black">work on your worst days</span>
        </div>
      </motion.div>

      {/* Wall types */}
      <ContentSection title="Choose from three types">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-offline-border rounded-xl">
            <h4 className="font-serif text-lg text-offline-black mb-3">Time walls</h4>
            <BulletList
              items={[
                'No phone before a set time',
                'No social apps after a set time'
              ]}
            />
          </div>
          <div className="p-6 bg-white border border-offline-border rounded-xl">
            <h4 className="font-serif text-lg text-offline-black mb-3">Place walls</h4>
            <BulletList
              items={[
                'Phone charges outside the bedroom',
                'No phone at the desk or table'
              ]}
            />
          </div>
          <div className="p-6 bg-white border border-offline-border rounded-xl">
            <h4 className="font-serif text-lg text-offline-black mb-3">Context walls</h4>
            <BulletList
              items={[
                'Social apps only on desktop',
                'Entertainment apps only on Wi-Fi'
              ]}
            />
          </div>
        </div>
        <p className="font-sans text-sm text-offline-gray mt-6 text-center">
          Pick what feels obvious — not aspirational.
        </p>
      </ContentSection>

      {/* Action Block - Wall Builder */}
      <ActionBlock title="UNPLUG: Build your walls" duration="15 min">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-4 h-4 text-offline-gray" />
          <span className="font-mono text-sm text-offline-gray">You'll install two walls. No more.</span>
        </div>

        {!wallsSet ? (
          <div className="space-y-6">
            {walls.map((wall, index) => (
              <div key={index} className="p-6 bg-cream rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-offline-gray uppercase tracking-widest">
                    Wall {index + 1}
                  </span>
                  <select
                    value={wall.type}
                    onChange={(e) => updateWall(index, 'type', e.target.value as Wall['type'])}
                    className="bg-white border border-offline-border rounded-lg px-3 py-1 text-sm text-offline-black focus:ring-1 focus:ring-offline-gray/50"
                  >
                    <option value="time">Time</option>
                    <option value="place">Place</option>
                    <option value="context">Context</option>
                  </select>
                </div>
                <div>
                  <label className="block font-sans text-sm text-offline-black mb-2">The wall</label>
                  <input
                    type="text"
                    value={wall.description}
                    onChange={(e) => updateWall(index, 'description', e.target.value)}
                    placeholder="e.g., No phone in bedroom"
                    className="w-full bg-white border border-offline-border rounded-lg p-3 text-offline-black focus:ring-1 focus:ring-offline-gray/50 placeholder:text-offline-gray/40"
                  />
                </div>
                <div>
                  <label className="block font-sans text-sm text-offline-black mb-2">What it protects</label>
                  <input
                    type="text"
                    value={wall.protects}
                    onChange={(e) => updateWall(index, 'protects', e.target.value)}
                    placeholder="e.g., Sleep quality, morning clarity"
                    className="w-full bg-white border border-offline-border rounded-lg p-3 text-offline-black focus:ring-1 focus:ring-offline-gray/50 placeholder:text-offline-gray/40"
                  />
                </div>
              </div>
            ))}

            <div className="flex justify-end pt-4">
              <button
                onClick={handleSetWalls}
                disabled={!walls.every(w => w.description && w.protects)}
                className="bg-offline-black text-white px-6 py-2 rounded-full font-sans text-sm hover:bg-offline-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Set these walls
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
              <span className="font-serif text-lg text-offline-black">Walls set</span>
            </div>
            <div className="space-y-4">
              {walls.map((wall, index) => (
                <div key={index} className="p-4 bg-white rounded-lg">
                  <p className="font-sans text-sm text-offline-black font-medium">{wall.description}</p>
                  <p className="font-sans text-xs text-offline-gray mt-1">Protects: {wall.protects}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-sm text-offline-gray mt-4">
              This is not a promise. It's a default.
            </p>
          </motion.div>
        )}
      </ActionBlock>

      {/* Pause */}
      <motion.div variants={fadeInUp} className="mb-20 py-12 border-t border-b border-offline-border/40">
        <h3 className="font-serif text-xl text-offline-black mb-6 text-center">Pause here.</h3>
        <p className="font-sans text-offline-gray text-center mb-6">
          Imagine a normal tired day: low energy, low motivation, full schedule.
        </p>
        <div className="max-w-md mx-auto text-center">
          <p className="font-sans text-offline-black mb-2">Ask yourself:</p>
          <p className="font-sans text-offline-gray italic">Does this wall still hold?</p>
          <p className="font-sans text-offline-gray italic">Does it protect attention automatically?</p>
        </div>
        <p className="font-sans text-offline-black text-center mt-8 font-medium">
          If yes, it's strong enough.
        </p>
      </motion.div>

      <QuietTruth
        lines={["Environment beats intention.", "Every time."]}
        highlight={0}
      />

      {/* What may happen */}
      <ContentSection title="What may happen next">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Restlessness. A brief sense of emptiness. Reaching for a habit that no longer fits.
        </p>
        <p className="font-sans text-offline-black font-medium">
          That's not loss. That's space.
        </p>
      </ContentSection>

      {/* Don't add more */}
      <ContentSection title="Don't add more walls.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          More rules increase resistance.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed font-medium">
          Two walls done well protect more than ten done poorly.
        </p>
        <p className="font-sans text-offline-gray mt-4">
          Let this settle.
        </p>
      </ContentSection>

      <ModuleTransition
        closingLines={["Discipline fades.", "Design holds."]}
        nextModule={ModuleId.UNLOCK}
        nextNumber="9"
        onNavigate={onNavigate}
      />
    </motion.div>
  );
};

export default UnplugModule;
