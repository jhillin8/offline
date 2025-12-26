'use client';

import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShareButtonProps {
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ className = '' }) => {
  const [copied, setCopied] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const shareText = `I just completed Offline — a 10-module guide for reclaiming attention through design, not discipline.

No apps installed. No streaks tracked. Just quieter defaults.

Years don't reset attention. Only decisions do.`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShowOptions(false);
      }, 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = shareText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShowOptions(false);
      }, 2000);
    }
  };

  const handleTwitterShare = () => {
    const tweetText = encodeURIComponent(
      `I just completed Offline — reclaimed my attention through design, not discipline.\n\nYears don't reset attention. Only decisions do.`
    );
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank');
    setShowOptions(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="flex items-center gap-2 px-4 py-2 bg-offline-black text-white rounded-full font-sans text-sm hover:bg-offline-black/80 transition-colors"
      >
        <Share2 className="w-4 h-4" />
        Share your journey
      </button>

      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full left-0 mb-2 bg-white border border-offline-border rounded-xl shadow-lg p-2 min-w-[180px]"
          >
            <button
              onClick={handleCopy}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-offline-black hover:bg-cream rounded-lg transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy text
                </>
              )}
            </button>
            <button
              onClick={handleTwitterShare}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-offline-black hover:bg-cream rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Post on X
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareButton;
