import type { ExperienceId } from '../../shared/contracts/experience';

export interface AgentMapping {
  experience: ExperienceId;
  runtimeKey: string;
}

export const agentMappings: Readonly<Record<ExperienceId, AgentMapping>> = {
  interweb: { experience: 'interweb', runtimeKey: 'interweb' },
  augment: { experience: 'augment', runtimeKey: 'augment' },
  code: { experience: 'code', runtimeKey: 'code' },
  scribe: { experience: 'scribe', runtimeKey: 'scribe' },
  optics: { experience: 'optics', runtimeKey: 'optics' },
};
