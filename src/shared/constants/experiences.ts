import type { ExperienceDefinition } from '../contracts/experience';

export const EXPERIENCES = [
  {
    id: 'interweb',
    label: 'Interweb',
    description: 'Web intelligence experience.',
    capability: 'interweb',
    public: true,
  },
  {
    id: 'augment',
    label: 'Augment',
    description: 'Multimodal augmentation experience.',
    capability: 'augment',
    public: true,
  },
  {
    id: 'code',
    label: 'Code',
    description: 'Code execution and engineering experience.',
    capability: 'code',
    public: true,
  },
  {
    id: 'scribe',
    label: 'Scribe',
    description: 'Writing and document intelligence experience.',
    capability: 'scribe',
    public: true,
  },
  {
    id: 'optics',
    label: 'Optics',
    description: 'Visual intelligence experience.',
    capability: 'optics',
    public: true,
  },
] as const satisfies readonly ExperienceDefinition[];
