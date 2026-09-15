import type { PublicRuntimeResponse, RuntimeState } from '../../shared/contracts/runtime';

export function publicResponse<T>(
  state: RuntimeState,
  data?: T,
): PublicRuntimeResponse<T> {
  return {
    ok: state.phase !== 'error',
    state,
    ...(data === undefined ? {} : { data }),
  };
}

export function publicError(message: string): PublicRuntimeResponse<never> {
  return {
    ok: false,
    state: { phase: 'error', message },
    error: message,
  };
}
