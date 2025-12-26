'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
  const pauseRef = useRef(null);
  const pauseInView = useInView(pauseRef, { once: true, margin: "-20%" });

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="max-w-3xl mx-auto pb-breath-2xl"
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

      {/* What you didn't know was draining */}
      <ContentSection title="What you didn't know was draining." emphasis="important">
        <p className="font-sans text-lg md:text-xl text-offline-gray leading-relaxed mb-6">
          Promotional emails. Newsletters you never read. Subscriptions you forgot you agreed to.
        </p>
        <p className="font-sans text-lg md:text-xl text-offline-gray leading-relaxed mb-6">
          Individually, they're harmless. Together, they keep something open in your mind.
        </p>
        <p className="font-sans text-xl md:text-2xl text-offline-black leading-tight font-medium">
          Not stress — incompletion.
        </p>
      </ContentSection>

      {/* Two surfaces - upgraded card */}
      <motion.div
        variants={fadeInUp}
        className="mb-breath-lg p-10 md:p-12 bg-white border border-offline-border/60 rounded-3xl relative overflow-hidden"
      >
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'radial-gradient(circle, #1A1A1A 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />

        <div className="relative">
          <h3 className="font-serif text-3xl md:text-4xl text-offline-black mb-6 leading-tight">
            We're touching only two surfaces.
          </h3>
          <p className="font-sans text-lg text-offline-gray leading-relaxed mb-8">
            Nothing more.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-cream rounded-2xl text-center">
              <span className="font-serif text-xl md:text-2xl text-offline-black">Email subscriptions</span>
            </div>
            <div className="p-6 bg-cream rounded-2xl text-center">
              <span className="font-serif text-xl md:text-2xl text-offline-black">Recurring payments</span>
            </div>
          </div>
          <p className="font-sans text-sm text-offline-gray mt-8 text-center">
            We're not fixing your inbox. We're not fixing your finances. We're stopping quiet drains.
          </p>
        </div>
      </motion.div>

      {/* Action Block 1: Email */}
      <ActionBlock title="UNSUBSCRIBE: Email" duration="10 min">
        <div className="flex items-center gap-2 mb-8">
          <Clock className="w-4 h-4 text-offline-gray" />
          <span className="font-mono text-sm text-offline-gray">This is not reading. This is removal.</span>
        </div>

        <div className="mb-10">
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-5">Rules</h4>
          <BulletList
            items={[
              "Don't read content",
              "Don't organize folders",
              'One pass only'
            ]}
          />
        </div>

        <div className="mb-10">
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-5">In your email, search for</h4>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-5 py-3 bg-cream rounded-xl">
              <Search className="w-4 h-4 text-offline-gray" />
              <span className="font-mono text-sm text-offline-black">"unsubscribe"</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-cream rounded-xl">
              <span className="font-mono text-sm text-offline-black">"newsletter"</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-cream rounded-xl">
              <span className="font-mono text-sm text-offline-black">"promo"</span>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-5">For each result, choose one</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-cream rounded-xl text-center">
              <span className="font-sans text-base text-offline-red font-medium">Unsubscribe</span>
            </div>
            <div className="p-4 bg-cream rounded-xl text-center">
              <span className="font-sans text-base text-offline-gray">Archive forever</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-cream rounded-xl">
          <p className="font-sans text-base text-offline-gray leading-relaxed">
            You do not need to remember why you signed up. You do not need to feel grateful. You do not need to explain.
          </p>
          <p className="font-sans text-base text-offline-black font-medium mt-3">
            If it no longer serves you, it's allowed to go.
          </p>
        </div>
      </ActionBlock>

      {/* Action Block 2: Money */}
      <ActionBlock title="UNSUBSCRIBE: Money" duration="10 min">
        <div className="flex items-center gap-2 mb-8">
          <Clock className="w-4 h-4 text-offline-gray" />
          <span className="font-mono text-sm text-offline-gray">This is not optimization. It's closure.</span>
        </div>

        <div className="mb-10">
          <p className="font-sans text-lg text-offline-gray mb-5">Open your bank or card statement.</p>
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-5">Look for</h4>
          <BulletList
            items={[
              'monthly charges',
              'free trials',
              "tools you don't actively use"
            ]}
          />
        </div>

        <div className="p-6 bg-cream rounded-xl text-center">
          <p className="font-sans text-lg text-offline-black font-medium">
            Cancel one or two only.
          </p>
          <p className="font-sans text-base text-offline-gray mt-3">
            That's enough. Stopping even one leak counts.
          </p>
        </div>
      </ActionBlock>

      {/* FULL-VIEWPORT PAUSE MOMENT */}
      <motion.div
        ref={pauseRef}
        variants={fadeInUp}
        className="my-breath-xl min-h-[70vh] flex flex-col items-center justify-center relative"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-cream to-cream/50 -mx-8 md:-mx-16" />

        {/* Content */}
        <div className="relative text-center max-w-lg mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={pauseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl md:text-display-sm text-offline-black mb-12"
          >
            Pause here.
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            animate={pauseInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10"
          >
            <p className="font-mono text-xs text-offline-gray uppercase tracking-widest mb-8">
              Notice what feels different
            </p>
            <div className="flex flex-col items-center gap-4">
              {['fewer things asking', 'fewer small pulls', 'a subtle sense of closure'].map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={pauseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  className="font-serif text-xl md:text-2xl text-offline-black"
                >
                  {line}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={pauseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="font-sans text-lg md:text-xl text-offline-black font-medium"
          >
            This is what fewer open loops feels like.
          </motion.p>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={pauseInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="w-12 h-px bg-gradient-to-r from-transparent via-offline-red to-transparent"
          />
        </div>
      </motion.div>

      <QuietTruth
        lines={["If it's free but costs attention, it isn't free.", "Clarity is a form of wealth."]}
        highlight={1}
      />

      {/* Don't finish everything - climactic */}
      <ContentSection title="Don't finish everything." emphasis="climactic">
        <p className="font-sans text-lg md:text-xl text-offline-gray leading-relaxed mb-6">
          You are not supposed to.
        </p>
        <p className="font-sans text-lg md:text-xl text-offline-gray leading-relaxed mb-6">
          Trying to "clean it all" turns relief into work.
        </p>
        <p className="font-sans text-xl md:text-2xl text-offline-black font-medium">
          Partial closure is still closure.
        </p>
      </ContentSection>

      {/* What may come up */}
      <ContentSection title="What may come up">
        <p className="font-sans text-lg md:text-xl text-offline-gray leading-relaxed mb-6">
          A sense of relief. A small amount of regret. A thought like "What if I need this later?"
        </p>
        <p className="font-sans text-lg md:text-xl text-offline-gray leading-relaxed mb-6">
          That's normal. You can always re-subscribe.
        </p>
        <p className="font-sans text-lg md:text-xl text-offline-black font-medium">
          What matters is that default access is no longer assumed.
        </p>
      </ContentSection>

      <ModuleTransition
        closingLines={[
          "You don't need to stay informed about everything.",
          "Now that you've closed the leaks, we'll design what fills that space."
        ]}
        nextModule={ModuleId.UNPLUG}
        nextNumber="8"
        onNavigate={onNavigate}
      />
    </motion.div>
  );
};

export default UnsubscribeModule;
