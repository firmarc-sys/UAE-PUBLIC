import type { ExperienceId } from '../../shared/contracts/experience';

export const capabilityGraph: Readonly<Record<ExperienceId, readonly string[]>> = {
  interweb: ['interweb'],
  augment: ['augment'],
  code: ['code'],
  scribe: ['scribe'],
  optics: ['optics'],
};

export function primaryCapability(experience: ExperienceId): string {
  return capabilityGraph[experience][0];
}
