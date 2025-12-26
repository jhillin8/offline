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
  staggerChildren,
  fadeInUp
} from '@/components/module';
import { ModuleId } from '@/lib/types';

interface UninstallModuleProps {
  onNavigate: (id: ModuleId) => void;
}

const UninstallModule: React.FC<UninstallModuleProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="max-w-3xl mx-auto pb-24"
    >
      <ModuleHeader
        number="06"
        title="UNINSTALL"
        description="The phone works for you. A tool that controls you isn't a tool. This step is about returning your phone to its original purpose: useful, quiet, supportive."
      />

      <PermissionQuote
        lines={[
          "Nothing here is permanent.",
          "Reinstalling is always allowed."
        ]}
        label="Freedom to choose"
      />

      {/* Access is not value */}
      <ContentSection title="Access is not the same as value.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Just because something is available doesn't mean it's helpful.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Many apps don't take time in large chunks. They take it in reflexes:
        </p>
        <BulletList
          items={[
            'quick checks',
            'idle opens',
            'unconscious taps'
          ]}
        />
        <p className="font-sans text-offline-black mt-6 font-medium">
          That's not failure. That's design doing what it was built to do.
        </p>
      </ContentSection>

      {/* Targeting reflex */}
      <ContentSection title="We're not targeting enjoyment.">
        <p className="font-sans text-lg text-offline-black leading-relaxed font-medium mb-4">
          We're targeting reflex.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          An app can be enjoyable and still stay. An app can be useful and still stay.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed">
          This step is only about apps you open <span className="text-offline-black font-medium">without deciding</span>.
        </p>
      </ContentSection>

      {/* One question */}
      <motion.div variants={fadeInUp} className="mb-20 p-8 bg-white border border-offline-border rounded-xl text-center">
        <h3 className="font-serif text-xl text-offline-black mb-4">One question only</h3>
        <p className="font-serif text-2xl text-offline-red italic mb-6">
          "Does this reliably give me more than it takes?"
        </p>
        <div className="space-y-2 text-offline-gray">
          <p>Not: "Is this bad?"</p>
          <p>Not: "Should I quit this?"</p>
          <p>Not: "What will people think?"</p>
        </div>
        <p className="font-sans text-offline-black mt-6 font-medium">
          Just the balance. More given than taken? It stays.
        </p>
      </motion.div>

      {/* Action Block */}
      <ActionBlock title="UNINSTALL: The action" duration="10-15 min">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-4 h-4 text-offline-gray" />
          <span className="font-mono text-sm text-offline-gray">Start with your home screen only</span>
        </div>

        <div className="mb-8">
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-4">Rules</h4>
          <BulletList
            items={[
              'One pass',
              'No debating',
              'No optimizing'
            ]}
          />
        </div>

        <div className="mb-8">
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-4">For each app</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-cream rounded-lg">
              <span className="font-sans text-sm text-offline-black font-medium">If you would install it again today</span>
              <p className="text-sm text-offline-gray mt-1">→ keep</p>
            </div>
            <div className="p-4 bg-cream rounded-lg">
              <span className="font-sans text-sm text-offline-gray">If not</span>
              <p className="text-sm text-offline-red mt-1">→ uninstall or move off home screen</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-cream rounded-lg space-y-3">
          <p className="font-sans text-sm text-offline-gray">
            <span className="text-offline-black font-medium">If you hesitate</span>, move it to a hidden folder instead of deleting.
          </p>
          <p className="font-sans text-sm text-offline-gray">
            Begin with <span className="text-offline-black font-medium">three to five apps</span>. Stopping early is intentional.
          </p>
        </div>
      </ActionBlock>

      {/* Friction */}
      <ContentSection title="Friction is not punishment.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Removing apps isn't about deprivation.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-6">
          It's about creating a pause — just long enough for choice to reappear.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed mb-4">
          Small friction changes everything:
        </p>
        <BulletList
          items={[
            'searching instead of tapping',
            'logging in instead of auto-opening',
            'choosing instead of reacting'
          ]}
        />
        <p className="font-sans text-offline-black mt-6 font-medium">
          Friction restores agency.
        </p>
      </ContentSection>

      {/* Pause */}
      <motion.div variants={fadeInUp} className="mb-20 py-12 border-t border-b border-offline-border/40">
        <h3 className="font-serif text-xl text-offline-black mb-6 text-center">Pause here.</h3>
        <p className="font-sans text-offline-gray text-center mb-6">
          Lock your phone. Unlock it again.
        </p>
        <div className="max-w-md mx-auto">
          <p className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-3 text-center">Notice</p>
          <div className="flex flex-col items-center gap-2 text-offline-black">
            <span>fewer options</span>
            <span>slower impulse</span>
            <span>less urgency</span>
          </div>
        </div>
        <p className="font-sans text-offline-black text-center mt-8 font-medium">
          This is what a tool feels like.
        </p>
      </motion.div>

      <QuietTruth
        lines={["You're not giving something up.", "You're taking something back."]}
        highlight={1}
      />

      {/* What may happen */}
      <ContentSection title="What may happen next">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          You might reach for something that's gone. Feel a brief blank moment. Notice the reflex itself.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed font-medium mb-4">
          That pause is the win.
        </p>
        <p className="font-sans text-offline-gray">
          Noticing is control beginning.
        </p>
      </ContentSection>

      <ModuleTransition
        closingLines={["Less choice often creates more freedom."]}
        nextModule={ModuleId.UNSUBSCRIBE}
        nextNumber="7"
        onNavigate={onNavigate}
      />
    </motion.div>
  );
};

export default UninstallModule;
