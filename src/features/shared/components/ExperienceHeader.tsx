import type { ReactNode } from 'react';
import type { ExperienceDescriptor } from '@/shared/contracts';

type Props = {
  experience: ExperienceDescriptor;
  actions?: ReactNode;
  status?: ReactNode;
};

export default function ExperienceHeader({
  experience,
  actions,
  status,
}: Props) {
  return (
    <header className="experience-header">
      <div className="experience-header-copy">
        <span>{experience.tagline}</span>
        <h1>{experience.label}</h1>
        <p>{experience.description}</p>
      </div>

      <div className="experience-header-actions">
        {status}
        {actions}
      </div>
    </header>
  );
}