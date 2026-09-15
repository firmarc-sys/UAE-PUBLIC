import type { ExperienceId } from '../../shared/contracts/experience';
import type { PublicIntent } from '../../shared/contracts/intent';
import { EXPERIENCES } from '../../shared/constants/experiences';
import { primaryCapability } from './capabilityGraph.server';

export interface RouteDecision {
  experience: ExperienceId;
  capability: string;
}

const DEFAULT_EXPERIENCE: ExperienceId = 'interweb';

export function resolveExperience(intent: PublicIntent): RouteDecision {
  const experience = intent.experience ?? inferExperience(intent.text) ?? DEFAULT_EXPERIENCE;

  return {
    experience,
    capability: primaryCapability(experience),
  };
}

function inferExperience(text: string): ExperienceId | undefined {
  const normalized = text.toLowerCase();

  return EXPERIENCES.find((experience) =>
    normalized.includes(experience.id),
  )?.id;
}
