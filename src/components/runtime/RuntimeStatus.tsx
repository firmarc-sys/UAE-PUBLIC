import type { RuntimeState } from '../../shared/contracts/runtime';
import { MercuryStatusBadge } from '../ui/MercuryStatusBadge';

export interface RuntimeStatusProps {
  state: RuntimeState;
}

export function RuntimeStatus({ state }: RuntimeStatusProps) {
  return (
    <div className="runtime-status" data-phase={state.phase}>
      <MercuryStatusBadge status={state.phase} />
      {state.message ? <span>{state.message}</span> : null}
    </div>
  );
}
