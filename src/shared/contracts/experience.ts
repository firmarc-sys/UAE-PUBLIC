export type ExperienceId =
  | 'interweb'
  | 'augment'
  | 'code'
  | 'scribe'
  | 'optics';

export interface ExperienceDefinition {
  id: ExperienceId;
  label: string;
  description: string;
  capability: string;
  public: boolean;
}

export interface ExperienceDestination {
  id: ExperienceId;
  label: string;
  capability: string;
}
