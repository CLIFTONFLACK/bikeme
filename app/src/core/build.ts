import { ascent, cumulativeDistances, haversine, pathLength, pointAlong } from './geo.ts';
import { fetchBikeRoute, fetchElevationOpenTopoData } from './osrm.ts';
import { detectTurns, type NamedPoint } from './turns.ts';
import type { LngLat, Route, VoiceMessage } from './types.ts';

/** Never fewer samples than this, even for a very short route. */
export const MIN_ELEVATION_SAMPLES = 60;
/** Never more than this: OpenTopoData allows 100 points per call and 1,000 calls a day. */
export const MAX_ELEVATION_SAMPLES = 1000;
/** Target spacing between elevation samples. A fixed sample count missed most of a long route's
 *  climbs: a 60-sample profile of a 100 km route puts a height every ~1.7 km, which smooths real
 *  hills away before `ascent()` ever sees them. */
const ELEVATION_SAMPLE_SPACING_M = 100;

/** Elevation sample count for a route of the given length: roughly one point per 100 m, floored at
 *  {@link MIN_ELEVATION_SAMPLES} and capped at {@link MAX_ELEVATION_SAMPLES}. */
export function elevationSampleCount(lengthMetres: number): number {
  const target = Math.round(lengthMetres / ELEVATION_SAMPLE_SPACING_M);
  return Math.min(MAX_ELEVATION_SAMPLES, Math.max(MIN_ELEVATION_SAMPLES, target));
}

/** Start and finish closer than this counts as a loop. */
const LOOP_METRES = 150;

/** `count` points evenly spaced along the path, both ends included. */
export function samplePath(path: LngLat[], count: number): LngLat[] {
  if (count < 1) throw new RangeError(`samplePath needs a count of at least 1, got ${count}`);
  // One point cannot include both ends; the spacing below would divide by zero.
  if (count === 1) return [path[0]];
  const cumulative = cumulativeDistances(path);
  const total = cumulative[cumulative.length - 1];
  return Array.from({ length: count }, (_, i) => pointAlong(path, cumulative, (total * i) / (count - 1)));
}

export interface RouteInput {
  id: string;
  name: string;
  area: string;
  region?: string;
  description: string;
  path: LngLat[];
  names?: NamedPoint[];
  elevation: number[];
  messages?: VoiceMessage[];
  surface?: Route['surface'];
  verified: boolean;
}

export function assembleRoute(input: RouteInput): Route {
  const cumulative = cumulativeDistances(input.path);
  const distance = Math.round(cumulative[cumulative.length - 1]);
  return {
    id: input.id,
    name: input.name,
    area: input.area,
    region: input.region,
    description: input.description,
    path: input.path,
    distance,
    ascent: ascent(input.elevation),
    elevation: input.elevation.map((e) => Math.round(e)),
    loop: haversine(input.path[0], input.path[input.path.length - 1]) <= LOOP_METRES,
    surface: input.surface ?? 'mixed',
    turns: detectTurns(input.path, input.names),
    messages: (input.messages ?? []).filter((m) => m.at >= 0 && m.at <= distance),
    verified: input.verified,
  };
}

/**
 * Waypoints in, finished route out: snaps to cycle-friendly paths and roads, then adds elevation
 * and turns. `snaps` is how far each waypoint moved onto a path, for spotting waypoints dropped in
 * a field or a lake. Elevation comes from OpenTopoData, as this runs in the route builder, not the
 * browser. With `withElevation` false the route is flat, which saves the elevation service a call
 * when only checking a route's shape.
 */
export async function routeFromWaypoints(
  meta: Omit<RouteInput, 'path' | 'names' | 'elevation'>,
  waypoints: LngLat[],
  fetchImpl: typeof fetch = fetch,
  withElevation = true,
): Promise<{ route: Route; snaps: number[] }> {
  const { path, names, snaps } = await fetchBikeRoute(waypoints, fetchImpl);
  const samples = elevationSampleCount(pathLength(path));
  const elevation = withElevation
    ? await fetchElevationOpenTopoData(samplePath(path, samples), fetchImpl)
    : new Array<number>(samples).fill(0);
  return { route: assembleRoute({ ...meta, path, names, elevation }), snaps };
}
