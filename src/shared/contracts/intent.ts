import type { ExperienceId, ExperienceStatus } from './experience';

export type IntentConfidence = 'low' | 'medium' | 'high';

export type PublicIntentRequest = {
  text: string;
  sessionId?: string;
  currentExperience?: ExperienceId;
  currentView?: string;
};

export type PublicIntentResponse = {
  requestId: string;
  experience: ExperienceId;
  view: string;
  confidence: IntentConfidence;
  status: ExperienceStatus;
  summary?: string;
  requiresInput?: boolean;
};

export type IntentErrorResponse = {
  requestId?: string;
  status: 'error';
  message: string;
  retryable: boolean;
};