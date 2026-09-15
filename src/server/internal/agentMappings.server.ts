import 'server-only';

import type { ExperienceId } from '@/shared/contracts';

/**
 * Private backend routing hints.
 *
 * Keep provider names, private agent names, prompts, tools,
 * and orchestration details out of client components and API responses.
 */
export const EXPERIENCE_AGENT_MAPPINGS: Record<
  ExperienceId,
  {
    capability: string;
    defaultView: string;
  }
> = {
  router: {
    capability: 'runtime_routing',
    defaultView: 'home',
  },
  interweb: {
    capability: 'research_and_retrieval',
    defaultView: 'search',
  },
  augment: {
    capability: 'personal_intelligence',
    defaultView: 'home',
  },
  code: {
    capability: 'software_execution',
    defaultView: 'workspace',
  },
  scribe: {
    capability: 'document_intelligence',
    defaultView: 'compose',
  },
  optics: {
    capability: 'vision_and_capture',
    defaultView: 'capture',
  },
  gid: {
    capability: 'identity_and_continuity',
    defaultView: 'overview',
  },
  settings: {
    capability: 'environment_preferences',
    defaultView: 'world',
  },
  execution: {
    capability: 'task_orchestration',
    defaultView: 'active',
  },
  results: {
    capability: 'outcome_presentation',
    defaultView: 'latest',
  },
};