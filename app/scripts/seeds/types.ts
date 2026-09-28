import type { Route } from '../../src/core/types.ts';

export interface Seed {
  /** Unique across every region: it is the route's URL and the key saved rides point at. */
  id: string;
  name: string;
  /** "Town, County" outside London, the borough inside it. */
  area: string;
  description: string;
  surface: Route['surface'];
  /** [lat, lng] as read off a map, converted by build-routes.ts. */
  waypoints: [number, number][];
  /** Spoken when the rider passes the nearest point on the route to `near` ([lat, lng]). */
  messages: { near: [number, number]; text: string }[];
}
