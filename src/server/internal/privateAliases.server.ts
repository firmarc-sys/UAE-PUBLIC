/**
 * Private implementation aliases.
 *
 * This module must only be imported by server-side modules.
 * Do not return any values from this file to a browser client.
 */

export const PRIVATE_CAPABILITY_ALIASES = {
  interweb: 'research_and_retrieval',
  augment: 'personal_intelligence',
  code: 'software_execution',
  scribe: 'document_intelligence',
  optics: 'vision_and_capture',
  gid: 'identity_and_continuity',
  settings: 'environment_preferences',
  execution: 'task_orchestration',
  results: 'outcome_presentation',
} as const;

export type PrivateCapabilityAlias =
  (typeof PRIVATE_CAPABILITY_ALIASES)[keyof typeof PRIVATE_CAPABILITY_ALIASES];