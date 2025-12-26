'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
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

interface UnclutterModuleProps {
  onNavigate: (id: ModuleId) => void;
}

const UnclutterModule: React.FC<UnclutterModuleProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="max-w-3xl mx-auto pb-24"
    >
      <ModuleHeader
        number="05"
        title="UNCLUTTER"
        description="Chaos without shame. Clutter isn't a character flaw. It's postponed decisions made visible."
      />

      <PermissionQuote
        lines={[
          "This step isn't about organization.",
          "It's about neutrality — removing the low-grade signal that something is unfinished."
        ]}
        label="Clarity begins"
      />

      {/* Visual noise */}
      <ContentSection title="Visual noise becomes mental noise.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Too many tabs. Too many files. Too many small reminders that you'll "get to this later."
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Individually, they're harmless. Together, they create background pressure.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed font-medium">
          Not urgency — weight.
        </p>
      </ContentSection>

      {/* Two surfaces */}
      <motion.div variants={fadeInUp} className="mb-20 p-8 bg-white border border-offline-border rounded-xl">
        <h3 className="font-serif text-2xl text-offline-black mb-6">We're touching only two surfaces.</h3>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-6">
          Nothing more.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-cream rounded-lg text-center">
            <span className="font-serif text-lg text-offline-black">Browser tabs</span>
          </div>
          <div className="p-4 bg-cream rounded-lg text-center">
            <span className="font-serif text-lg text-offline-black">Desktop files</span>
          </div>
        </div>
        <p className="font-sans text-sm text-offline-gray mt-6 text-center">
          We're not fixing your system. We're quieting the places that shout the loudest.
        </p>
      </motion.div>

      {/* Action Block 1: Browser Tabs */}
      <ActionBlock title="UNCLUTTER: Browser Tabs" duration="7 min">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-4 h-4 text-offline-gray" />
          <span className="font-mono text-sm text-offline-gray">You're closing loops — not consuming content</span>
        </div>

        <div className="mb-8">
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-4">Rules</h4>
          <BulletList
            items={[
              "Don't read",
              "Don't organize",
              "Don't revisit"
            ]}
          />
        </div>

        <div className="mb-8">
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-4">For each open tab, choose one</h4>
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-cream rounded-lg text-center">
              <span className="font-sans text-sm text-offline-red font-medium">Close</span>
            </div>
            <div className="p-3 bg-cream rounded-lg text-center">
              <span className="font-sans text-sm text-offline-black">Bookmark</span>
              <p className="text-xs text-offline-gray mt-1">one folder: "Later"</p>
            </div>
            <div className="p-3 bg-cream rounded-lg text-center">
              <span className="font-sans text-sm text-offline-gray">Keep open</span>
              <p className="text-xs text-offline-gray mt-1">max 3</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-cream rounded-lg space-y-2">
          <p className="font-sans text-sm text-offline-gray">
            If a tab has been open for days, it isn't urgent.
          </p>
          <p className="font-sans text-sm text-offline-black font-medium">
            When done: Close browser completely. Reopen with only the tabs you kept.
          </p>
        </div>
      </ActionBlock>

      {/* Action Block 2: Desktop Files */}
      <ActionBlock title="UNCLUTTER: Desktop Files" duration="10 min">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-4 h-4 text-offline-gray" />
          <span className="font-mono text-sm text-offline-gray">This is not deep cleaning</span>
        </div>

        <div className="mb-8">
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-4">Rules</h4>
          <BulletList
            items={[
              'One pass',
              'No renaming',
              'No sorting'
            ]}
          />
        </div>

        <div className="mb-8">
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-4">Create one folder</h4>
          <div className="p-4 bg-cream rounded-lg">
            <span className="font-mono text-offline-black">Desktop — Archive</span>
          </div>
        </div>

        <div className="p-4 bg-white border border-offline-border rounded-lg">
          <p className="font-sans text-sm text-offline-gray mb-2">
            Move everything on your desktop into it <span className="text-offline-black font-medium">except</span>:
          </p>
          <BulletList
            items={[
              'files you are actively working on today',
              'one to three shortcuts you truly use'
            ]}
          />
        </div>

        <p className="font-sans text-sm text-offline-black mt-6 text-center font-medium">
          A clear desktop isn't empty. It's intentional.
        </p>
      </ActionBlock>

      {/* Pause */}
      <motion.div variants={fadeInUp} className="mb-20 py-12 border-t border-b border-offline-border/40">
        <h3 className="font-serif text-xl text-offline-black mb-6 text-center">Pause here.</h3>
        <p className="font-sans text-offline-gray text-center mb-6">
          Look at your screen.
        </p>
        <div className="max-w-md mx-auto">
          <p className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-3 text-center">Notice</p>
          <div className="flex flex-col items-center gap-2 text-offline-black">
            <span>less scanning</span>
            <span>less visual tension</span>
            <span>fewer reminders pulling at you</span>
          </div>
        </div>
        <p className="font-sans text-offline-black text-center mt-8 font-medium">
          Neutral is restful.
        </p>
      </motion.div>

      <QuietTruth
        lines={["Order isn't discipline.", "It's kindness to your future self."]}
        highlight={1}
      />

      <Divider />

      {/* Don't keep going */}
      <ContentSection title="Don't keep going.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          This is enough. More cleaning now will drain the benefit.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed font-medium">
          Stop while it feels light.
        </p>
      </ContentSection>

      <Divider />

      {/* What may come up */}
      <ContentSection title="What may come up">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          A small urge to optimize. A temptation to finish everything.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          That's habit — not necessity.
        </p>
        <p className="font-sans text-offline-black font-medium">
          Let neutral be enough.
        </p>
      </ContentSection>

      <ModuleTransition
        closingLines={["You're not 'finally getting organized.'", "You're removing unnecessary friction."]}
        nextModule={ModuleId.UNINSTALL}
        nextNumber="6"
        onNavigate={onNavigate}
      />
    </motion.div>
  );
};

export default UnclutterModule;
