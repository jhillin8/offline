'use client';

import React from 'react';
import { ModuleId, MODULES } from '@/lib/types';
import { motion } from 'framer-motion';
import { Layers, Check } from 'lucide-react';

interface SidebarProps {
  activeModule: ModuleId;
  completedModules: ModuleId[];
  onSelectModule: (id: ModuleId) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeModule, completedModules, onSelectModule, isOpen }) => {
  const completedCount = completedModules.length;
  const totalModules = MODULES.length;

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-cream border-r border-offline-border transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block flex flex-col`}>
      <div className="p-8 border-b border-offline-border/50">
        <div className="flex items-center gap-2 text-offline-black">
          <Layers className="w-6 h-6" />
          <span className="font-serif text-xl tracking-tight font-medium">Offline</span>
        </div>
        {completedCount > 0 && (
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs text-offline-gray mb-1">
              <span>{completedCount} of {totalModules}</span>
              <span>{Math.round((completedCount / totalModules) * 100)}%</span>
            </div>
            <div className="h-1 bg-offline-border/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-offline-red rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / totalModules) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-8 px-6 space-y-2">
        {MODULES.map((module, index) => {
          const isActive = activeModule === module.id;
          const isComplete = completedModules.includes(module.id);
          return (
            <button
              key={module.id}
              onClick={() => onSelectModule(module.id)}
              className={`w-full text-left group flex items-center gap-3 py-2.5 transition-colors duration-200 relative`}
            >
              <span className={`text-xs font-mono w-4 ${isActive ? 'text-offline-red' : isComplete ? 'text-offline-red/60' : 'text-offline-gray'}`}>
                {isComplete ? <Check className="w-3 h-3" /> : (index + 1).toString().padStart(2, '0')}
              </span>
              <span className={`font-sans text-sm tracking-wide uppercase ${isActive ? 'text-offline-black font-medium' : isComplete ? 'text-offline-gray/80' : 'text-offline-gray group-hover:text-offline-black/70'}`}>
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
