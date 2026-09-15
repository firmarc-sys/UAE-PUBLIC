import type { ExperienceDescriptor } from '@/shared/contracts';

export const EXPERIENCE_CATALOG: ExperienceDescriptor[] = [
  {
    id: 'interweb',
    label: 'Interweb',
    tagline: 'Explore reality',
    description:
      'Search, inspect, compare, and understand the connected world.',
    href: '/interweb',
    icon: 'globe',
    available: true,
  },
  {
    id: 'augment',
    label: 'Augment',
    tagline: 'Amplify yourself',
    description:
      'Build plans, strengthen focus, grow skills, and create momentum.',
    href: '/augment',
    icon: 'infinity',
    available: true,
  },
  {
    id: 'code',
    label: 'Code',
    tagline: 'Build the future',
    description:
      'Plan, write, run, inspect, and improve software with intelligent execution.',
    href: '/code',
    icon: 'code',
    available: true,
  },
  {
    id: 'scribe',
    label: 'Scribe',
    tagline: 'Capture meaning',
    description:
      'Write, organize, summarize, and transform documents into useful work.',
    href: '/scribe',
    icon: 'scribe',
    available: true,
  },
  {
    id: 'optics',
    label: 'Optics',
    tagline: 'See deeper',
    description:
      'Capture, inspect, analyze, and understand visual information.',
    href: '/optics',
    icon: 'aperture',
    available: true,
  },
  {
    id: 'gid',
    label: 'GID',
    tagline: 'Your intelligence',
    description:
      'Manage your identity, memories, preferences, and continuity.',
    href: '/gid',
    icon: 'identity',
    available: true,
  },
  {
    id: 'settings',
    label: 'Settings',
    tagline: 'Shape your world',
    description:
      'Control location, atmosphere, privacy, voice, and rendering preferences.',
    href: '/settings',
    icon: 'settings',
    available: true,
  },
  {
    id: 'execution',
    label: 'Execution',
    tagline: 'Follow the work',
    description:
      'Monitor active tasks, tools, activity, retries, and outcomes.',
    href: '/execution',
    icon: 'terminal',
    available: true,
  },
  {
    id: 'results',
    label: 'Results',
    tagline: 'Continue forward',
    description:
      'Review completed work, sources, artifacts, and next actions.',
    href: '/results',
    icon: 'sparkles',
    available: true,
  },
];

export function getExperience(id: string) {
  return EXPERIENCE_CATALOG.find((experience) => experience.id === id) ?? null;
}