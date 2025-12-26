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

interface UnfollowModuleProps {
  onNavigate: (id: ModuleId) => void;
}

const UnfollowModule: React.FC<UnfollowModuleProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="max-w-3xl mx-auto pb-24"
    >
      <ModuleHeader
        number="03"
        title="UNFOLLOW"
        description="Curate who gets access to you. You're not unfollowing people. You're choosing what gets repeated access to your mind."
      />

      <PermissionQuote
        lines={[
          "This is not about taste.",
          "It's about stewardship."
        ]}
        label="Access is choice"
      />

      {/* Exposure is not neutral */}
      <ContentSection title="Exposure is not neutral.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          What you see every day quietly shapes:
        </p>
        <BulletList
          items={[
            'what feels normal',
            'what feels urgent',
            'what feels lacking'
          ]}
        />
        <p className="font-sans text-lg text-offline-gray leading-relaxed mt-8">
          Repeated exposure trains attention without asking permission.
        </p>
        <p className="font-sans text-offline-black mt-4">
          This isn't about judgment. It's about noticing what your environment rehearses for you.
        </p>
      </ContentSection>

      <Divider />

      {/* Three options */}
      <motion.div variants={fadeInUp} className="mb-20">
        <h3 className="font-serif text-2xl text-offline-black mb-8">You don't have to decide everything.</h3>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-8">
          We're not doing a purge. We're not "cleaning up your feed." We're making a <span className="text-offline-black font-medium">first pass</span>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-offline-border rounded-xl">
            <h4 className="font-serif text-lg text-offline-black mb-2">Keep</h4>
            <p className="font-sans text-sm text-offline-gray">
              Accounts that leave you calmer, clearer, or more grounded.
            </p>
          </div>
          <div className="p-6 bg-white border border-offline-border rounded-xl">
            <h4 className="font-serif text-lg text-offline-black mb-2">Mute</h4>
            <p className="font-sans text-sm text-offline-gray">
              Accounts you don't want to lose — but don't want daily.
            </p>
          </div>
          <div className="p-6 bg-white border border-offline-border rounded-xl">
            <h4 className="font-serif text-lg text-offline-red mb-2">Unfollow</h4>
            <p className="font-sans text-sm text-offline-gray">
              Accounts that consistently stir comparison, urgency, or noise.
            </p>
          </div>
        </div>
        <p className="font-sans text-sm text-offline-gray mt-4 text-center">
          None of these choices are permanent.
        </p>
      </motion.div>

      {/* The question */}
      <motion.div variants={fadeInUp} className="mb-20 p-8 bg-white border border-offline-border rounded-xl text-center">
        <h3 className="font-serif text-xl text-offline-black mb-4">The question that matters</h3>
        <p className="font-serif text-2xl text-offline-red italic">
          "How do I feel after seeing this?"
        </p>
        <p className="font-sans text-offline-gray mt-6">
          Not what you <em>think</em>. Not what you <em>should</em> feel.<br />
          Just the after-effect. More settled? More stirred?
        </p>
        <p className="font-sans text-sm text-offline-black mt-4 font-medium">
          That's enough information.
        </p>
      </motion.div>

      {/* Action Block */}
      <ActionBlock title="The UNFOLLOW action" duration="10 min">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-4 h-4 text-offline-gray" />
          <span className="font-mono text-sm text-offline-gray">Set a timer for 10 minutes</span>
        </div>

        <div className="mb-8">
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-4">Rules</h4>
          <BulletList
            items={[
              'Scroll your main feed only',
              "Don't search",
              "Don't overthink",
              'One pass'
            ]}
          />
        </div>

        <div className="mb-8">
          <h4 className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-4">As you scroll</h4>
          <BulletList
            items={[
              'Keep what steadies you',
              "Mute what you're unsure about",
              'Unfollow what reliably leaves you tense or distracted'
            ]}
          />
        </div>

        <div className="p-4 bg-cream rounded-lg">
          <p className="font-sans text-sm text-offline-gray">
            <span className="text-offline-black font-medium">If you hesitate, mute first.</span> You're allowed to decide later.
          </p>
        </div>
      </ActionBlock>

      {/* Pause */}
      <motion.div variants={fadeInUp} className="mb-20 py-12 border-t border-b border-offline-border/40">
        <h3 className="font-serif text-xl text-offline-black mb-6 text-center">Pause here.</h3>
        <p className="font-sans text-offline-gray text-center mb-6">
          After the timer ends, stop. Scroll for 30 seconds.
        </p>
        <div className="max-w-md mx-auto">
          <p className="font-sans text-xs font-semibold uppercase text-offline-gray tracking-widest mb-3 text-center">Notice</p>
          <div className="flex justify-center gap-8 text-offline-black">
            <span>the pace</span>
            <span>the tone</span>
            <span>your body</span>
          </div>
        </div>
        <p className="font-sans text-offline-gray text-center mt-8">
          Less pull, less comparison, less pressure.<br />
          <span className="text-offline-black">That's not imagination. That's relief.</span>
        </p>
      </motion.div>

      <QuietTruth
        lines={['You are allowed to curate without explanation.', 'Following is a choice — not an obligation.']}
        highlight={0}
      />

      <Divider />

      {/* Discomfort */}
      <ContentSection title="If discomfort shows up">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Guilt, second-guessing, or fear of missing out is normal.
        </p>
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          That doesn't mean you made a mistake.
        </p>
        <p className="font-sans text-offline-black font-medium">
          It means you're noticing how much exposure mattered. Notice. Don't fix.
        </p>
      </ContentSection>

      <Divider />

      {/* Closing */}
      <ContentSection title="Enough for now.">
        <p className="font-sans text-lg text-offline-gray leading-relaxed mb-4">
          Do not keep going. Do not "clean everything."
        </p>
        <p className="font-sans text-lg text-offline-black leading-relaxed font-medium">
          This was about restoring agency, not finishing a task.
        </p>
      </ContentSection>

      <ModuleTransition
        closingLines={["Nothing you unfollowed was taken away.", "You simply stopped rehearsing it every day."]}
        nextModule={ModuleId.UNMUTE}
        nextNumber="4"
        onNavigate={onNavigate}
      />
    </motion.div>
  );
};

export default UnfollowModule;
