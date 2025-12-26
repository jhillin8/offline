'use client';

import React, { useState } from 'react';
import { ModuleId } from '@/lib/types';
import Sidebar from '@/components/Sidebar';
import UnloadModule from '@/components/UnloadModule';
import {
  UnderstandModule,
  UnfollowModule,
  UnmuteModule,
  UnclutterModule,
  UninstallModule,
  UnsubscribeModule,
  UnplugModule,
  UnlockModule,
  UnburdenedModule
} from '@/components/modules';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [activeModule, setActiveModule] = useState<ModuleId>(ModuleId.UNLOAD);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleNavigate = (id: ModuleId) => {
    setActiveModule(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderModule = () => {
    switch (activeModule) {
      case ModuleId.UNLOAD:
        return <UnloadModule />;
      case ModuleId.UNDERSTAND:
        return <UnderstandModule onNavigate={handleNavigate} />;
      case ModuleId.UNFOLLOW:
        return <UnfollowModule onNavigate={handleNavigate} />;
      case ModuleId.UNMUTE:
        return <UnmuteModule onNavigate={handleNavigate} />;
      case ModuleId.UNCLUTTER:
        return <UnclutterModule onNavigate={handleNavigate} />;
      case ModuleId.UNINSTALL:
        return <UninstallModule onNavigate={handleNavigate} />;
      case ModuleId.UNSUBSCRIBE:
        return <UnsubscribeModule onNavigate={handleNavigate} />;
      case ModuleId.UNPLUG:
        return <UnplugModule onNavigate={handleNavigate} />;
      case ModuleId.UNLOCK:
        return <UnlockModule onNavigate={handleNavigate} />;
      case ModuleId.UNBURDENED:
        return <UnburdenedModule />;
      default:
        return <UnloadModule />;
    }
  };

  return (
    <div className="flex h-screen bg-cream overflow-hidden">

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-cream border-b border-offline-border z-40 flex items-center justify-between px-6">
        <span className="font-serif text-lg font-medium">Offline</span>
        <button onClick={toggleSidebar} className="text-offline-black p-2">
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <Sidebar
        activeModule={activeModule}
        onSelectModule={(id) => {
          setActiveModule(id);
          setSidebarOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <main className="flex-1 h-full overflow-y-auto pt-20 md:pt-0 scroll-smooth">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {renderModule()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
