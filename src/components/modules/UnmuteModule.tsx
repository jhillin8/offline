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

interface UnmuteModuleProps {
  onNavigate: (id: ModuleId) => void;
}

const UnmuteModule: React.FC<UnmuteModuleProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="max-w-3xl mx-auto pb-24"
    >
      <ModuleHeader
        number="04"
        title="UNMUTE"
        description="Signal vs. Noise. Not everything that can interrupt you deserves to. This step is about deciding what is allowed to break your focus."
      />

      <PermissionQuote
        lines={[
          "Silence doesn't mean disappearance.",
          "It means choice."
        ]}
        label="Sovereignty restored"
      />

      {/* Most interruptions */}
      <ContentSection title="Most interruptions aren't urgent.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          They just arrive urgently.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-6">
          Notifications are designed to feel immediate — even when nothing meaningful is happening.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Over time, this trains your nervous system to stay slightly alert:
        </p>
        <BulletList items={['waiting', 'checking', 'bracing']} />
        <p className="font-sans text-lg text-offline-gray leading-relaxed mt-8">
          That background vigilance often feels like anxiety.
        </p>
        <p className="font-sans text-offline-black mt-4">
          Not because anything is wrong — but because too many things are allowed to interrupt you.
        </p>
      </ContentSection>

      {/* Alerts are requests */}
      <ContentSection title="Alerts are requests, not commands.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Every notification is asking for access.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Some requests matter. Most can wait.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed font-medium">
          The problem isn't noise itself. The problem is noise that can interrupt at will.
        </p>
      </ContentSection>

      {/* Two lanes */}
      <motion.div variants={fadeInUp} className="mb-20">
        <h3 className="font-serif text-2xl text-offline-black mb-8">Two lanes only</h3>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-8">
          You don't need complex settings. Just this distinction:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white border border-offline-border rounded-xl">
            <h4 className="font-serif text-lg text-offline-black mb-4">Signal</h4>
            <p className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-3">
              Things that justify interruption
            </p>
            <BulletList
              items={[
                'real people',
                'coordination that\'s time-sensitive',
                'responsibility or safety'
              ]}
            />
          </div>
          <div className="p-6 bg-cream border border-offline-border/50 rounded-xl">
            <h4 className="font-serif text-lg text-offline-gray mb-4">Noise</h4>
            <p className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-3">
              Things that can wait
            </p>
            <BulletList
              items={[
                'updates',
                'promotions',
                'reactions',
                '"just in case" alerts'
              ]}
              variant="muted"
            />
          </div>
        </div>
        <p className="font-sans text-sm text-offline-gray mt-6 text-center">
          Noise isn't bad. It just doesn't get to interrupt you.
        </p>
      </motion.div>

      {/* Action Block */}
      <ActionBlock title="The UNMUTE action" duration="10 min">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-4 h-4 text-offline-gray" />
          <span className="font-mono text-sm text-offline-gray">Open your notification settings</span>
        </div>

        <div className="mb-8">
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-4">Rules</h4>
          <BulletList
            items={[
              "Don't open apps",
              "Don't customize deeply",
              'One pass only'
            ]}
          />
        </div>

        <div className="mb-8">
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-4">For each app, choose one</h4>
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-cream rounded-lg text-center">
              <span className="font-sans text-sm text-offline-black font-medium">Allow</span>
            </div>
            <div className="p-3 bg-cream rounded-lg text-center">
              <span className="font-sans text-sm text-offline-gray">Deliver quietly</span>
            </div>
            <div className="p-3 bg-cream rounded-lg text-center">
              <span className="font-sans text-sm text-offline-gray/50">Off</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-cream rounded-lg">
          <p className="font-sans text-sm text-offline-gray">
            <span className="text-offline-black font-medium">If you're unsure, choose "Deliver quietly."</span> That's enough.
          </p>
        </div>
      </ActionBlock>

      {/* Protect what matters */}
      <ContentSection title="Protect what matters">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Before you finish, make sure a few essentials remain able to reach you:
        </p>
        <BulletList
          items={[
            'calls from contacts',
            'messages from key people',
            'calendar alerts (if useful)'
          ]}
        />
        <p className="font-sans text-offline-black mt-6 font-medium">
          Quiet doesn't mean unreachable. It means intentional.
        </p>
      </ContentSection>

      {/* Pause */}
      <motion.div variants={fadeInUp} className="mb-20 py-12 border-t border-b border-offline-border/40">
        <h3 className="font-serif text-xl text-offline-black mb-6 text-center">Pause here.</h3>
        <p className="font-sans text-offline-gray text-center mb-6">
          Lock your phone. Sit for 30 seconds.
        </p>
        <div className="max-w-md mx-auto">
          <p className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-3 text-center">Notice</p>
          <div className="flex flex-col items-center gap-2 text-offline-black">
            <span>the absence of anticipation</span>
            <span>the lack of pull</span>
            <span>the subtle calm</span>
          </div>
        </div>
        <p className="font-sans text-offline-black text-center mt-8 font-medium">
          This is what fewer false alarms feels like.
        </p>
      </motion.div>

      <QuietTruth
        lines={["Silence isn't absence.", "It's sovereignty over your attention."]}
        highlight={1}
      />

      {/* What may happen */}
      <ContentSection title="What may happen next">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          You might reach for your phone out of habit, feel a brief sense of "something missing," check anyway.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          That's normal.
        </p>
        <p className="font-sans text-offline-black font-medium">
          Nothing important breaks when noise is removed. Clarity usually shows up instead.
        </p>
      </ContentSection>

      <ModuleTransition
        closingLines={["Your attention doesn't need to be on call."]}
        nextModule={ModuleId.UNCLUTTER}
        nextNumber="5"
        onNavigate={onNavigate}
      />
    </motion.div>
  );
};

export default UnmuteModule;
