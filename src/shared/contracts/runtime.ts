import type { ExperienceId, ExperienceStatus } from './experience';

export type RuntimeConnectionState =
  | 'connecting'
  | 'online'
  | 'offline'
  | 'error';

export type RuntimeState = {
  activeExperience: ExperienceId;
  activeView: string;
  status: ExperienceStatus;
  connection: RuntimeConnectionState;
  requestId: string | null;
  lastIntent: string | null;
};

export type RuntimeAction =
  | {
      type: 'navigate';
      experience: ExperienceId;
      view?: string;
    }
  | {
      type: 'set_status';
      status: ExperienceStatus;
    }
  | {
      type: 'set_connection';
      connection: RuntimeConnectionState;
    }
  | {
      type: 'intent_started';
      requestId: string;
      text: string;
    }
  | {
      type: 'intent_resolved';
      experience: ExperienceId;
      view: string;
      requestId: string;
    }
  | {
      type: 'intent_failed';
    };