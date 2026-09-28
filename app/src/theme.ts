// BikeMe design tokens: white backgrounds, black type and accents, green as the single highlight.
// Green (#22C55E) is a fill colour: text on it is black (8.7:1), never white (2.3:1 fails WCAG). Green
// *text* uses the deeper `accentText` (#15803D), which passes 5:1 on white. `success` is teal so it
// reads as distinct from the brand green (route start marker, good-trend text).
// One light theme everywhere, including the run screen: the brand is white, and a white screen
// with black type is the most legible option in daylight.
const light = {
  scheme: 'light' as 'light' | 'dark',
  bg: '#FFFFFF',
  surface: '#FFFFFF',
  surfaceAlt: '#F4F4F4',
  ink: '#0A0A0A',
  muted: '#5A5A5A',
  border: '#E4E4E4',
  accent: '#22C55E',
  onAccent: '#0A0A0A',
  accentText: '#15803D',
  /** Black blocks: primary buttons on white, badges, the stats bar. */
  contrast: '#0A0A0A',
  onContrast: '#FFFFFF',
  danger: '#C8261B',
  onDanger: '#FFFFFF',
  success: '#0E7490',
  routeDim: '#9A9A9A',
  mapStyle: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
};

export type Theme = typeof light;

export function useTheme(): Theme {
  return light;
}

export const runTheme = light;

export const font = {
  display: 'BarlowCondensed_700Bold',
  displaySemi: 'BarlowCondensed_600SemiBold',
  body: 'Barlow_400Regular',
  bodyMedium: 'Barlow_500Medium',
  bodyBold: 'Barlow_700Bold',
};

export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 };
export const radius = { sm: 8, md: 14, lg: 20, pill: 999 };
