'use client';

import React from 'react';
import { ModuleId, MODULES } from '@/lib/types';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

interface SidebarProps {
  activeModule: ModuleId;
  onSelectModule: (id: ModuleId) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeModule, onSelectModule, isOpen }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-cream border-r border-offline-border transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block flex flex-col`}>
      <div className="p-8 border-b border-offline-border/50">
        <div className="flex items-center gap-2 text-offline-black">
          <Layers className="w-6 h-6" />
          <span className="font-serif text-xl tracking-tight font-medium">Offline</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-8 px-6 space-y-2">
        {MODULES.map((module, index) => {
          const isActive = activeModule === module.id;
          return (
            <button
              key={module.id}
              onClick={() => onSelectModule(module.id)}
              className={`w-full text-left group flex items-baseline gap-3 py-2.5 transition-colors duration-200 relative`}
            >
              <span className={`text-xs font-mono w-4 ${isActive ? 'text-offline-red' : 'text-offline-gray'}`}>
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <span className={`font-sans text-sm tracking-wide uppercase ${isActive ? 'text-offline-black font-medium' : 'text-offline-gray group-hover:text-offline-black/70'}`}>
                {module.label}
              </span>

              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-4 bg-offline-red rounded-r-full"
                />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-8 border-t border-offline-border/50">
        <p className="font-serif text-xs text-offline-gray italic">
          "Years don't reset attention. Only decisions do."
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
