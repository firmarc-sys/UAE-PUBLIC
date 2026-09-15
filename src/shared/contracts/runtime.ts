import type { ExperienceId } from './experience';

export type RuntimePhase = 'idle' | 'routing' | 'active' | 'error';

export interface RuntimeState {
  phase: RuntimePhase;
  experience?: ExperienceId;
  capability?: string;
  message?: string;
}

export interface PublicRuntimeResponse<T = unknown> {
  ok: boolean;
  state: RuntimeState;
  data?: T;
  error?: string;
}
