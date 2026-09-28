import { useSyncExternalStore } from 'react';

// Controls for the simulated rider, shared between the desktop preview panel beside the phone
// frame and the compact bar inside the ride screen (used when there is no room for the panel).

export interface SimControls {
  playing: boolean;
  speed: number;
  /** Seconds per km. */
  pace: number;
  offRoute: boolean;
  /** Set by the ride screen while a demo ride is active, so the panel knows to show controls. */
  active: boolean;
  /** Set by the desktop panel while it is on screen, so the ride screen hides its own bar. */
  panelVisible: boolean;
  /** Incremented to request a skip ahead; the ride screen watches it. */
  skipRequest: number;
}

let controls: SimControls = {
  playing: true,
  speed: 5,
  pace: 180,
  offRoute: false,
  active: false,
  panelVisible: false,
  skipRequest: 0,
};
const listeners = new Set<() => void>();

export function setSim(patch: Partial<SimControls>) {
  controls = { ...controls, ...patch };
  listeners.forEach((l) => l());
}

export function getSim() {
  return controls;
}

export function useSim(): SimControls {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => controls,
    () => controls,
  );
}

export const SPEEDS = [1, 5, 10, 20];
export const PACES = [
  { label: '24 km/h', value: 150 },
  { label: '20 km/h', value: 180 },
  { label: '16 km/h', value: 225 },
];
