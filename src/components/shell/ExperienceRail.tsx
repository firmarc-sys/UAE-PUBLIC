'use client';

import Link from 'next/link';
import {
  Aperture,
  Code2,
  Globe2,
  Infinity,
  Pencil,
  Settings2,
  Sparkles,
  TerminalSquare,
  UserRound,
} from 'lucide-react';
import type { ExperienceDescriptor, ExperienceId } from '@/shared/contracts';
import { EXPERIENCE_CATALOG } from '@/shared/constants/experiences';

type Props = {
  activeExperience?: ExperienceId;
  compact?: boolean;
};

const ICONS = {
  globe: Globe2,
  infinity: Infinity,
  code: Code2,
  scribe: Pencil,
  aperture: Aperture,
  identity: UserRound,
  settings: Settings2,
  terminal: TerminalSquare,
  sparkles: Sparkles,
};

function ExperienceItem({
  experience,
  active,
  compact,
}: {
  experience: ExperienceDescriptor;
  active: boolean;
  compact: boolean;
}) {
  const Icon = ICONS[experience.icon];

  return (
    <Link
      href={experience.href}
      className="experience-rail-item"
      data-active={active ? 'true' : 'false'}
      data-compact={compact ? 'true' : 'false'}
      aria-current={active ? 'page' : undefined}
      aria-label={`${experience.label}: ${experience.tagline}`}
    >
      <span className="experience-rail-icon">
        <Icon size={compact ? 17 : 20} strokeWidth={1.6} />
      </span>

      {!compact && (
        <span className="experience-rail-copy">
          <strong>{experience.label}</strong>
          <small>{experience.tagline}</small>
        </span>
      )}
    </Link>
  );
}

export default function ExperienceRail({
  activeExperience,
  compact = false,
}: Props) {
  const primary = EXPERIENCE_CATALOG.filter((experience) =>
    ['interweb', 'augment', 'code', 'scribe', 'optics'].includes(experience.id),
  );

  return (
    <nav
      className="experience-rail"
      data-compact={compact ? 'true' : 'false'}
      aria-label="UAE destinations"
    >
      {primary.map((experience) => (
        <ExperienceItem
          key={experience.id}
          experience={experience}
          active={experience.id === activeExperience}
          compact={compact}
        />
      ))}
    </nav>
  );
}