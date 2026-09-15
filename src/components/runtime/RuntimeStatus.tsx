'use client';

import type {
  ExperienceId,
  ExperienceStatus,
  RuntimeConnectionState,
} from '@/shared/contracts';
import { getExperience } from '@/shared/constants/experiences';
import MercuryStatusBadge from '@/components/ui/MercuryStatusBadge';

type Props = {
  experience: ExperienceId;
  status: ExperienceStatus;
  connection: RuntimeConnectionState;
  locationLabel?: string;
  temperatureC?: number;
};

export default function RuntimeStatus({
  experience,
  status,
  connection,
  locationLabel,
  temperatureC,
}: Props) {
  const currentExperience = getExperience(experience);

  return (
    <div className="runtime-status" data-connection={connection}>
      <div className="runtime-status-copy">
        <span className="runtime-status-eyebrow">United Agentic Environment</span>

        <strong>{currentExperience?.label ?? 'UAE'}</strong>

        <small>
          {locationLabel
            ? `${locationLabel}${typeof temperatureC === 'number' ? ` · ${Math.round(temperatureC)}°C` : ''}`
            : connection === 'online'
              ? 'Your local world is active'
              : 'Reconnecting to your world'}
        </small>
      </div>

      <MercuryStatusBadge
        status={connection === 'offline' || connection === 'error' ? 'offline' : status}
        label={connection === 'online' ? undefined : 'Connection interrupted'}
      />
    </div>
  );
}