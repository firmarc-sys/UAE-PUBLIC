import type { ExperienceStatus } from '@/shared/contracts';

type Props = {
  status: ExperienceStatus;
  label?: string;
};

const LABELS: Record<ExperienceStatus, string> = {
  idle: 'Idle',
  loading: 'Loading',
  ready: 'Ready',
  working: 'Working',
  needs_input: 'Needs input',
  empty: 'No activity yet',
  offline: 'Offline',
  error: 'Needs attention',
};

export default function MercuryStatusBadge({ status, label }: Props) {
  return (
    <span
      className="mercury-status-badge"
      data-status={status}
      aria-label={label ?? LABELS[status]}
    >
      <i aria-hidden="true" />
      {label ?? LABELS[status]}
    </span>
  );
}