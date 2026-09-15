import type { ExperienceId } from './experience';

export interface PublicIntent {
  text: string;
  experience?: ExperienceId;
  context?: Record<string, unknown>;
}

export interface RoutedIntent extends PublicIntent {
  experience: ExperienceId;
  capability: string;
}
