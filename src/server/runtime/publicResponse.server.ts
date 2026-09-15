import 'server-only';

import type {
  ExperienceId,
  PublicIntentResponse,
} from '@/shared/contracts';

type PrivateResolution = {
  experience: ExperienceId;
  view: string;
  confidence: 'low' | 'medium' | 'high';
  requestId: string;
  summary?: string;
  requiresInput?: boolean;
};

export function toPublicIntentResponse(
  resolution: PrivateResolution,
): PublicIntentResponse {
  return {
    requestId: resolution.requestId,
    experience: resolution.experience,
    view: resolution.view,
    confidence: resolution.confidence,
    status: resolution.requiresInput ? 'needs_input' : 'ready',
    summary: resolution.summary,
    requiresInput: resolution.requiresInput,
  };
}