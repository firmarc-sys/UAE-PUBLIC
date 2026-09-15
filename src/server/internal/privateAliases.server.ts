export type PrivateAliasKey = string;

/**
 * Public repository placeholder only.
 * Real provider, model, deity, account, and secret aliases must be injected
 * by the private runtime and must never be committed here.
 */
export const privateAliases: Readonly<Record<PrivateAliasKey, string>> = Object.freeze({});
