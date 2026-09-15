export type WeatherCondition =
  | 'clear'
  | 'cloudy'
  | 'fog'
  | 'drizzle'
  | 'rain'
  | 'snow'
  | 'storm';

export type SolarPhase = 'night' | 'dawn' | 'day' | 'dusk';

export type WorldLocation = {
  latitude: number;
  longitude: number;
  label: string;
  timezone?: string;
  source: 'device' | 'manual' | 'fallback';
};

export type WorldWeather = {
  condition: WeatherCondition;
  solarPhase: SolarPhase;
  temperatureC: number;
  cloudCover: number;
  humidity: number;
  visibilityM: number;
  windSpeedKph: number;
  windDirectionDeg: number;
  precipitationMm: number;
  isDay: boolean;
  observedAt: string;
};

export type MercuryWorldTheme = {
  skyTop: string;
  skyHorizon: string;
  skyGlow: string;
  ambientLight: string;
  mercuryLight: string;
  mercuryDark: string;
  mercuryEdge: string;
  reflectionTint: string;
  sunX: string;
  sunY: string;
  sunOpacity: number;
  cloudOpacity: number;
  hazeOpacity: number;
  rainOpacity: number;
  snowOpacity: number;
  lightningOpacity: number;
  reflectionStrength: number;
  rippleStrength: number;
  windDuration: string;
};