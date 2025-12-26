'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Search } from 'lucide-react';
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

interface UnsubscribeModuleProps {
  onNavigate: (id: ModuleId) => void;
}

const UnsubscribeModule: React.FC<UnsubscribeModuleProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="max-w-3xl mx-auto pb-24"
    >
      <ModuleHeader
        number="07"
        title="UNSUBSCRIBE"
        description="Close the leaks. Leaks don't announce themselves. They drain quietly. This step is about closing the small, constant asks that keep you slightly reactive."
      />

      <PermissionQuote
        lines={[
          "Nothing here is urgent.",
          "That's the problem."
        ]}
        label="Completion begins"
      />

      {/* Nothing here is urgent */}
      <ContentSection>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Promotional emails. Newsletters you never read. Subscriptions you forgot you agreed to.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Individually, they're harmless. Together, they keep something open in your mind.
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed font-medium">
          Not stress — incompletion.
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
            <span className="font-serif text-lg text-offline-black">Email subscriptions</span>
          </div>
          <div className="p-4 bg-cream rounded-lg text-center">
            <span className="font-serif text-lg text-offline-black">Recurring payments</span>
          </div>
        </div>
        <p className="font-sans text-sm text-offline-gray mt-6 text-center">
          We're not fixing your inbox. We're not fixing your finances. We're stopping quiet drains.
        </p>
      </motion.div>

      {/* Action Block 1: Email */}
      <ActionBlock title="UNSUBSCRIBE: Email" duration="10 min">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-4 h-4 text-offline-gray" />
          <span className="font-mono text-sm text-offline-gray">This is not reading. This is removal.</span>
        </div>

        <div className="mb-8">
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-4">Rules</h4>
          <BulletList
            items={[
              "Don't read content",
              "Don't organize folders",
              'One pass only'
            ]}
          />
        </div>

        <div className="mb-8">
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-4">In your email, search for</h4>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-cream rounded-lg">
              <Search className="w-4 h-4 text-offline-gray" />
              <span className="font-mono text-sm text-offline-black">"unsubscribe"</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-cream rounded-lg">
              <span className="font-mono text-sm text-offline-black">"newsletter"</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-cream rounded-lg">
              <span className="font-mono text-sm text-offline-black">"promo"</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-4">For each result, choose one</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-cream rounded-lg text-center">
              <span className="font-sans text-sm text-offline-red font-medium">Unsubscribe</span>
            </div>
            <div className="p-3 bg-cream rounded-lg text-center">
              <span className="font-sans text-sm text-offline-gray">Archive forever</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-cream rounded-lg">
          <p className="font-sans text-sm text-offline-gray">
            You do not need to remember why you signed up. You do not need to feel grateful. You do not need to explain.
          </p>
          <p className="font-sans text-sm text-offline-black font-medium mt-2">
            If it no longer serves you, it's allowed to go.
          </p>
        </div>
      </ActionBlock>

      {/* Action Block 2: Money */}
      <ActionBlock title="UNSUBSCRIBE: Money" duration="10 min">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-4 h-4 text-offline-gray" />
          <span className="font-mono text-sm text-offline-gray">This is not optimization. It's closure.</span>
        </div>

        <div className="mb-8">
          <p className="font-sans text-offline-gray mb-4">Open your bank or card statement.</p>
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-4">Look for</h4>
          <BulletList
            items={[
              'monthly charges',
              'free trials',
              "tools you don't actively use"
            ]}
          />
        </div>

        <div className="p-4 bg-cream rounded-lg text-center">
          <p className="font-sans text-offline-black font-medium">
            Cancel one or two only.
          </p>
          <p className="font-sans text-sm text-offline-gray mt-2">
            That's enough. Stopping even one leak counts.
          </p>
        </div>
      </ActionBlock>

      {/* Pause */}
      <motion.div variants={fadeInUp} className="mb-20 py-12 border-t border-b border-offline-border/40">
        <h3 className="font-serif text-xl text-offline-black mb-6 text-center">Pause here.</h3>
        <div className="max-w-md mx-auto">
          <p className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-3 text-center">Notice what feels different</p>
          <div className="flex flex-col items-center gap-2 text-offline-black">
            <span>fewer things asking</span>
            <span>fewer small pulls</span>
            <span>a subtle sense of closure</span>
          </div>
        </div>
        <p className="font-sans text-offline-black text-center mt-8 font-medium">
          This is what fewer open loops feels like.
        </p>
      </motion.div>

      <QuietTruth
        lines={["If it's free but costs attention, it isn't free.", "Clarity is a form of wealth."]}
        highlight={1}
      />

      {/* Don't finish everything */}
      <ContentSection title="Don't finish everything.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          You are not supposed to.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Trying to "clean it all" turns relief into work.
        </p>
        <p className="font-sans text-offline-black font-medium">
          Partial closure is still closure.
        </p>
      </ContentSection>

      {/* What may come up */}
      <ContentSection title="What may come up">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          A sense of relief. A small amount of regret. A thought like "What if I need this later?"
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          That's normal. You can always re-subscribe.
        </p>
        <p className="font-sans text-offline-black font-medium">
          What matters is that default access is no longer assumed.
        </p>
      </ContentSection>

      <ModuleTransition
        closingLines={["You don't need to stay informed about everything."]}
        nextModule={ModuleId.UNPLUG}
        nextNumber="8"
        onNavigate={onNavigate}
      />
    </motion.div>
  );
};

export default UnsubscribeModule;
