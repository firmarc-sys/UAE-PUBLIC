import 'server-only';

import type { ExperienceId } from '@/shared/contracts';
import { PRIVATE_CAPABILITY_ALIASES } from './privateAliases.server';

export type CapabilityNode = {
  publicExperience: ExperienceId;
  privateCapability: string;
  supports: string[];
};

export const CAPABILITY_GRAPH: CapabilityNode[] = [
  {
    publicExperience: 'interweb',
    privateCapability: PRIVATE_CAPABILITY_ALIASES.interweb,
    supports: ['search', 'research', 'compare', 'discover', 'learn'],
  },
  {
    publicExperience: 'augment',
    privateCapability: PRIVATE_CAPABILITY_ALIASES.augment,
    supports: ['plan', 'focus', 'wellness', 'learn', 'create'],
  },
  {
    publicExperience: 'code',
    privateCapability: PRIVATE_CAPABILITY_ALIASES.code,
    supports: ['build', 'debug', 'test', 'deploy', 'code'],
  },
  {
    publicExperience: 'scribe',
    privateCapability: PRIVATE_CAPABILITY_ALIASES.scribe,
    supports: ['write', 'summarize', 'organize', 'document', 'note'],
  },
  {
    publicExperience: 'optics',
    privateCapability: PRIVATE_CAPABILITY_ALIASES.optics,
    supports: ['camera', 'image', 'visual', 'capture', 'analyze'],
  },
  {
    publicExperience: 'gid',
    privateCapability: PRIVATE_CAPABILITY_ALIASES.gid,
    supports: ['identity', 'memory', 'profile', 'privacy'],
  },
  {
    publicExperience: 'settings',
    privateCapability: PRIVATE_CAPABILITY_ALIASES.settings,
    supports: ['settings', 'location', 'voice', 'appearance', 'privacy'],
  },
  {
    publicExperience: 'execution',
    privateCapability: PRIVATE_CAPABILITY_ALIASES.execution,
    supports: ['run', 'execute', 'status', 'progress', 'task'],
  },
  {
    publicExperience: 'results',
    privateCapability: PRIVATE_CAPABILITY_ALIASES.results,
    supports: ['results', 'sources', 'report', 'output', 'review'],
  },
];