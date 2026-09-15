'use client';

import type { ExperienceDestination, ExperienceId } from '../../../shared/contracts/experience';

export interface RouterDestinationsProps {
  destinations: readonly ExperienceDestination[];
  onRoute?: (id: ExperienceId) => void;
}

export function RouterDestinations({ destinations, onRoute }: RouterDestinationsProps) {
  return (
    <div className="router-destinations">
      {destinations.map((destination) => (
        <button
          key={destination.id}
          type="button"
          data-capability={destination.capability}
          onClick={() => onRoute?.(destination.id)}
        >
          {destination.label}
        </button>
      ))}
    </div>
  );
}
