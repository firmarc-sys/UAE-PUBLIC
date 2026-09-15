import type { ExperienceDefinition } from '../../../shared/contracts/experience';

export interface ExperienceHeaderProps {
  experience: ExperienceDefinition;
}

export function ExperienceHeader({ experience }: ExperienceHeaderProps) {
  return (
    <header className="experience-header" data-experience={experience.id}>
      <h1>{experience.label}</h1>
      <p>{experience.description}</p>
    </header>
  );
}
