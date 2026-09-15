'use client';

import type { ExperienceDefinition, ExperienceId } from '../../shared/contracts/experience';

export interface ExperienceRailProps {
  experiences: readonly ExperienceDefinition[];
  active?: ExperienceId;
  onSelect?: (id: ExperienceId) => void;
}

export function ExperienceRail({ experiences, active, onSelect }: ExperienceRailProps) {
  return (
    <nav className="experience-rail" aria-label="Experiences">
      {experiences.map((experience) => (
        <button
          key={experience.id}
          type="button"
          aria-pressed={active === experience.id}
          data-experience={experience.id}
          onClick={() => onSelect?.(experience.id)}
        >
          {experience.label}
        </button>
      ))}
    </nav>
  );
}
