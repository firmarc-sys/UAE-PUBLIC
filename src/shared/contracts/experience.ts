export const EXPERIENCES = [
  'router',
  'interweb',
  'augment',
  'code',
  'scribe',
  'optics',
  'gid',
  'settings',
  'execution',
  'results',
] as const;

export type ExperienceId = (typeof EXPERIENCES)[number];

export const EXPERIENCE_ICONS = [
  'globe',
  'infinity',
  'code',
  'scribe',
  'aperture',
  'identity',
  'settings',
  'terminal',
  'sparkles',
] as const;

export type ExperienceIcon = (typeof EXPERIENCE_ICONS)[number];

export type ExperienceStatus =
  | 'idle'
  | 'loading'
  | 'ready'
  | 'working'
  | 'needs_input'
  | 'empty'
  | 'offline'
  | 'error';

export type ExperienceDescriptor = {
  id: ExperienceId;
  label: string;
  tagline: string;
  description: string;
  href: string;
  icon: ExperienceIcon;
  available: boolean;
};

export type ExperienceNavigation = {
  experience: ExperienceId;
  view?: string;
  label?: string;
};