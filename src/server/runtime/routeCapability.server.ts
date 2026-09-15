import type { PublicIntent, RoutedIntent } from '../../shared/contracts/intent';
import { resolveExperience } from '../internal/orchestrationPolicy.server';

export function routeCapability(intent: PublicIntent): RoutedIntent {
  const route = resolveExperience(intent);

  return {
    ...intent,
    experience: route.experience,
    capability: route.capability,
  };
}
