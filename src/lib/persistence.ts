'use client';

import { ModuleId } from './types';

const STORAGE_KEY = 'offline_progress';

export interface OfflineProgress {
  activeModule: ModuleId;
  completedModules: ModuleId[];
  startedAt: string;
  lastVisitedAt: string;
}

const getDefaultProgress = (): OfflineProgress => ({
  activeModule: ModuleId.UNLOAD,
  completedModules: [],
  startedAt: new Date().toISOString(),
  lastVisitedAt: new Date().toISOString(),
});

export const loadProgress = (): OfflineProgress => {
  if (typeof window === 'undefined') return getDefaultProgress();

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return getDefaultProgress();
    return JSON.parse(saved);
  } catch {
    return getDefaultProgress();
  }
};

export const saveProgress = (progress: Partial<OfflineProgress>): void => {
  if (typeof window === 'undefined') return;

  try {
    const current = loadProgress();
    const updated = {
      ...current,
      ...progress,
      lastVisitedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // Silent fail - privacy first
  }
};

export const markModuleComplete = (moduleId: ModuleId): void => {
  const current = loadProgress();
  if (!current.completedModules.includes(moduleId)) {
    saveProgress({
      completedModules: [...current.completedModules, moduleId],
    });
  }
};

export const isModuleComplete = (moduleId: ModuleId): boolean => {
  const progress = loadProgress();
  return progress.completedModules.includes(moduleId);
};

export const getModuleIndex = (moduleId: ModuleId): number => {
  const order = Object.values(ModuleId);
  return order.indexOf(moduleId) + 1;
};

export const getTotalModules = (): number => {
  return Object.values(ModuleId).length;
};
