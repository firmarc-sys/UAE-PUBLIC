import 'server-only';

import type { ExperienceId } from '@/shared/contracts';

export type RoutingDecision = {
  experience: ExperienceId;
  view: string;
  confidence: 'low' | 'medium' | 'high';
};

const KEYWORDS: Array<{
  terms: string[];
  decision: RoutingDecision;
}> = [
  {
    terms: ['search', 'research', 'find', 'learn about', 'compare'],
    decision: {
      experience: 'interweb',
      view: 'search',
      confidence: 'high',
    },
  },
  {
    terms: ['write', 'note', 'document', 'summarize', 'draft'],
    decision: {
      experience: 'scribe',
      view: 'compose',
      confidence: 'high',
    },
  },
  {
    terms: ['build', 'code', 'debug', 'test', 'deploy', 'repository'],
    decision: {
      experience: 'code',
      view: 'workspace',
      confidence: 'high',
    },
  },
  {
    terms: ['camera', 'photo', 'image', 'visual', 'capture', 'analyze this'],
    decision: {
      experience: 'optics',
      view: 'capture',
      confidence: 'high',
    },
  },
  {
    terms: ['plan', 'focus', 'habit', 'wellness', 'improve myself'],
    decision: {
      experience: 'augment',
      view: 'home',
      confidence: 'medium',
    },
  },
];

export function decideExperience(intent: string): RoutingDecision {
  const normalized = intent.toLowerCase();

  for (const rule of KEYWORDS) {
    if (rule.terms.some((term) => normalized.includes(term))) {
      return rule.decision;
    }
  }

  return {
    experience: 'router',
    view: 'home',
    confidence: 'low',
  };
}