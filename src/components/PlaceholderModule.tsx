'use client';

import React from 'react';

interface PlaceholderModuleProps {
  id: string;
}

const PlaceholderModule: React.FC<PlaceholderModuleProps> = ({ id }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
    <span className="font-mono text-xs text-offline-gray tracking-widest uppercase mb-4">Module Locked</span>
    <h2 className="font-serif text-4xl text-offline-black/30 mb-4">{id}</h2>
    <p className="text-offline-gray/60 font-sans max-w-md">
      This module is not yet available. Complete the previous sections to unlock.
    </p>
  </div>
);

export default PlaceholderModule;
