export enum ModuleId {
  UNLOAD = 'UNLOAD',
  UNDERSTAND = 'UNDERSTAND',
  UNFOLLOW = 'UNFOLLOW',
  UNMUTE = 'UNMUTE',
  UNCLUTTER = 'UNCLUTTER',
  UNINSTALL = 'UNINSTALL',
  UNSUBSCRIBE = 'UNSUBSCRIBE',
  UNPLUG = 'UNPLUG',
  UNLOCK = 'UNLOCK',
  UNBURDENED = 'UNBURDENED',
}

export interface ModuleData {
  id: ModuleId;
  label: string;
  description?: string;
}

export const MODULES: ModuleData[] = [
  { id: ModuleId.UNLOAD, label: 'UNLOAD' },
  { id: ModuleId.UNDERSTAND, label: 'UNDERSTAND' },
  { id: ModuleId.UNFOLLOW, label: 'UNFOLLOW' },
  { id: ModuleId.UNMUTE, label: 'UNMUTE' },
  { id: ModuleId.UNCLUTTER, label: 'UNCLUTTER' },
  { id: ModuleId.UNINSTALL, label: 'UNINSTALL' },
  { id: ModuleId.UNSUBSCRIBE, label: 'UNSUBSCRIBE' },
  { id: ModuleId.UNPLUG, label: 'UNPLUG' },
  { id: ModuleId.UNLOCK, label: 'UNLOCK' },
  { id: ModuleId.UNBURDENED, label: 'UNBURDENED' },
];
