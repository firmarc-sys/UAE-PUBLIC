import 'server-only';

import type { PublicIntentRequest } from '@/shared/contracts';
import { createCorrelationId } from '@/lib/correlation';
import { decideExperience } from '../internal/orchestrationPolicy.server';
import { toPublicIntentResponse } from './publicResponse.server';

export async function routeCapability(request: PublicIntentRequest) {
  const requestId = createCorrelationId();
  const decision = decideExperience(request.text);

  return toPublicIntentResponse({
    requestId,
    experience: decision.experience,
    view: decision.view,
    confidence: decision.confidence,
    summary: `Opening ${decision.experience}.`,
  });
}