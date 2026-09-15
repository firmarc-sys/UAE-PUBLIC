import type { RuntimePhase } from '../../shared/contracts/runtime';

export interface MercuryStatusBadgeProps {
  status: RuntimePhase;
}

export function MercuryStatusBadge({ status }: MercuryStatusBadgeProps) {
  return (
    <span className="mercury-status-badge" data-status={status} role="status">
      {status}
    </span>
  );
}
