# BikeMe

BikeMe is a cycling app with turn-by-turn voice directions for routes across London and South
East England.
Pick a route, press start, and it tells you every turn before you reach it — no need to check a
map mid-ride. It's an independent duplicate of [JustinGo](../), rebranded for cycling, with its own
code, design, copy and its own route library — 60 cycling routes built with the OSRM bike profile,
see **Regenerating routes** below.

The repo holds three things: the app itself (Expo, TypeScript), a static marketing site, and a
build script that combines both into one Vercel deployment.

The app and the site share one visual design: white backgrounds, black type, and a single green
accent colour (`#22C55E` fill with black text, `#15803D` for green text on white, tints
`#DCFCE7`/`#86EFAC`). There's no dark mode (see `app/src/theme.ts`).

## Repo layout

```
app/            Expo Router app (TypeScript). The product itself.
  src/core/     Pure TypeScript navigation engine — no React Native imports, runs under Node.
  src/app/      Screens (file-based routing via Expo Router). The ride screen route is /ride/[id].
  src/data/     routes.json, the built-in route library for London and South East England
                (committed, not fetched live) — 60 cycling routes, see Regenerating routes below.
  scripts/      build-routes.ts (regenerates routes.json) and its seeds/<region>.ts seed files,
                copy-maplibre-worker.cjs (postinstall).
site/           The static one-page marketing site (plain HTML/CSS/JS, no build step), covering
                features by group, integrations, city guides, pricing, for-business sections and an FAQ.
scripts/        build.mjs and serve-out.mjs, which assemble the Vercel deployment from app/ and site/.
vercel.json     Install/build/output config and routing for the Vercel deployment.
```

There is no root `package.json` — the site has no dependencies, and `scripts/build.mjs` uses only
Node's built-in modules. All npm dependencies live in `app/`.

## Project status

This is an **independent duplicate** of JustinGo, a standalone demo with its own repository,
[CLIFTONFLACK/bikeme](https://github.com/CLIFTONFLACK/bikeme), and its own Vercel project,
`bikeme-usgc` in the `clifton-ai-team` team, distinct from JustinGo's `slapharma/justingo` project.

## Try it

Local development produces a live app you can run in a browser (see **Develop** below). At a
window width of 1080px or more, it renders inside a phone frame next to a "virtual ride" demo
panel — press **Demo ride** on any route to watch a simulated ride, complete with voice cues,
without needing real GPS or to leave your desk. Narrower windows get the app full-screen, with a
compact demo bar inside the ride screen instead of the side panel.

The production build is live at **https://bikeme-usgc.vercel.app**: the marketing site at `/`,
the app at `/app`, and the route library at `/routes.json`. Every push to `main` redeploys it.
(`bikeme.vercel.app` belongs to an unrelated project, not this one.)

## Demo features

BikeMe is a preview build. Navigation, route creation and ride tracking are real and work
end-to-end; a lot of the rest of the app is a demo of the wider feature set, shown with placeholder
content so the whole product can be seen before it's built.

- **Real:** turn-by-turn voice navigation, the route library and filters (Under 30 km, 30–60 km,
  60 km+, Loops, Trails), drawing or importing routes, ride tracking and history, GPX import/export.
- **Demo (on screen, deliberately not wired):** the Community tab (challenges, leaderboard, badges,
  groups, virtual rides), most of the Profile tab (plan, integrations, voice/general settings, for
  business), the Plans screen (`/premium`), For business (`/business`), Hotels (`/hotels`), city
  guides (`/city/[id]`), and extra buttons on Discover, route detail, Create and the ride summary.
  These use placeholder images and invented names, and pressing a demo button does nothing — it has
  no `onPress` handler. Shared demo building blocks live in `app/src/components/demo.tsx`, their
  content in `app/src/demoData.ts`.
- **Demo (health and wearable data sync):** a `/health` dashboard (daily wellness, training status,
  connected sources), a "Health data" section on the ride summary (heart rate chart, time in zones,
  cadence in rpm, power in watts, calories, training load, aerobic effect, VO2 max, recovery), a
  "Synced from your bike computer" list on History with an avg HR line per ride, and a Health
  section on Profile with wellness tiles and links into the dashboard. Every figure is invented and
  deterministic, seeded from the ride's id so the same ride always shows the same numbers
  (`app/src/healthDemo.ts`); nothing is read from a device. Garmin Connect is shown connected, with
  Apple Health/Watch, Wahoo, Hammerhead, Zwift and Health Connect shown as available. Real sync
  needs the native build (HealthKit, Health Connect) and the phase 4 backend (Garmin, Wahoo and
  other cloud APIs over OAuth). The website's `#health` section mirrors this as a "coming soon"
  preview.

The app has five tabs: Discover, Create, Community, History and Profile.

Every researched feature and business model — with its pricing tier and Built/Demo/Later status —
is listed in [`docs/feature-inventory.md`](docs/feature-inventory.md). Everything is free during the
preview.

## Develop

Prerequisites: Node.js and npm. The navigation-engine scripts run TypeScript directly via Node's
built-in support (there's no `ts-node` or `tsx` dependency), so use a recent Node.js version.

Install cannot complete on a synced/cloud drive (e.g. a Google Drive folder) — work from a normal
local disk checkout, then mirror changes back to the Google Drive copy if that's where the project
lives.

```
cd C:\dev\bikeme\app
npm install
npm run web
```

`npm install` also runs `postinstall`, which copies MapLibre's web worker into `app/public/maplibre`
(`app/scripts/copy-maplibre-worker.cjs`). This is needed because Metro bundles MapLibre into a
single script, which breaks the worker's own URL if the file isn't served separately.

`npm run web` starts the Expo dev server and serves the app at the root of whatever URL it prints
(it ignores the `/app` base URL that the production build uses).

Other app-level scripts (run from `app/`, or with `npm run <script> --prefix app` from the repo
root):

| Script | What it does |
|---|---|
| `npm start` | `expo start` — pick a platform from the interactive menu. |
| `npm run android` / `npm run ios` | `expo start --android` / `--ios`. |
| `npm run web` | `expo start --web`, the browser preview described above. |
| `npm run typecheck` | `tsc --noEmit`. |
| `npm test` | Runs the core engine's test suite (see **Test**). |
| `npm run export:web` | `expo export -p web --output-dir dist` — used internally by the production build, not usually run by hand. |

## Test

The navigation engine in `app/src/core` is plain TypeScript with no React Native imports, so it's
tested with Node's built-in test runner rather than a React Native test setup:

```
cd C:\dev\bikeme\app
npm test
```

This runs `node --test src/core/*.test.ts src/*.test.ts`, covering geometry (`geo.test.ts`), turn
detection (`turns.test.ts`), cue building and the `NavEngine` state machine (`engine.test.ts`),
route assembly (`build.test.ts`), GPX import/export (`gpx.test.ts`), OSRM response parsing
(`osrm.test.ts`), formatting helpers (`format.test.ts`, `core.test.ts`), and the placeholder health
data generator (`healthDemo.test.ts`).

## Build & deploy

`scripts/build.mjs`, run from the repo root, produces the whole Vercel deployment in `out/`:

```
cd C:\dev\bikeme
node scripts/build.mjs
```

It runs `npx expo export --platform web --output-dir dist --clear` inside `app/`, then assembles:

- `out/` (site root) — a copy of `site/`
- `out/app/` — the exported Expo web build
- `out/routes.json` — a copy of `app/src/data/routes.json`, which the website's route list fetches
  and groups by region

It then checks that `index.html`, `app/index.html`, `app/maplibre/maplibre-gl-worker.mjs` and
`routes.json` all exist in `out/`, and fails loudly if any are missing.

To check a production build locally before deploying:

```
cd C:\dev\bikeme
node scripts/build.mjs
```

```
cd C:\dev\bikeme
node scripts/serve-out.mjs 4173
```

Then open `http://localhost:4173`. `serve-out.mjs` serves `out/` the same way `vercel.json` does:
static files first, and any unmatched path under `/app` falls back to `app/index.html` (so
client-side routes like `/app/ride/lee-valley-velopark-loop` work on a hard refresh). The port
defaults to 4173 if you omit the argument.

On Vercel itself, `vercel.json` sets:

- **Install:** `npm ci --prefix app`
- **Build:** `node scripts/build.mjs`
- **Output directory:** `out`
- **Rewrite:** `/app/:path*` → `/app/index.html` (so the exported single-page app handles its own routes)
- **Headers:** long-lived immutable caching for `/app/_expo/static/*`, plus `X-Content-Type-Options`,
  `Referrer-Policy`, and a `Permissions-Policy` that allows geolocation only for the site's own
  origin and blocks camera and microphone entirely

## Regenerating routes

The library holds 60 cycling routes, 10 per region across six regions: London, Kent, Sussex,
Surrey, Hampshire & Isle of Wight and Thames Valley. Within each region the 10 routes split 3
short, mostly traffic-free rides, 4 medium rides on quiet lanes and 3 long rides (a handful of
routes, including some of the long ones, are one-way A-to-B rides rather than loops). Distances
range from `lee-valley-velopark-loop` at about 15 km up to `round-the-island`, a full lap of the
Isle of Wight, at about 102 km. Each region's waypoints live in their own seed file,
`app/scripts/seeds/<region>.ts` (the seed shape is defined in `app/scripts/seeds/types.ts`). To
rebuild the whole library, run:

```
cd C:\dev\bikeme\app
node scripts/build-routes.ts
```

Each route is a hand-picked list of waypoints, snapped to real paths by the OSRM router (bike
profile, `routing.openstreetmap.de/routed-bike` — see **Services & attribution** below), with
elevation added from OpenTopoData (EU-DEM 25 m across Europe, falling back to Mapzen's global
terrain) and turns detected from the resulting geometry, with cue distances scaled up for cycling
speeds. This is a different elevation source than the in-app Create tab uses (see **Services &
attribution** below) — OpenTopoData sends no CORS headers, so only the build script, not the
browser, can call it. Pass a region name (`london`, `kent`, `sussex`, `surrey`, `hampshire` or
`thames-valley`) to dry-run just that region's seed file, or one or more route IDs to dry-run just
those routes — either way nothing is written to the committed file, and elevation is skipped, so
climb shows as 0 m; this also spares OpenTopoData's daily call limit:

```
cd C:\dev\bikeme\app
node scripts/build-routes.ts kent
```

```
cd C:\dev\bikeme\app
node scripts/build-routes.ts lee-valley-velopark-loop
```

The script warns if a route has a u-turn, or if a waypoint snapped more than 75 m from a path
(likely dropped in a field, lake or garden) — a new or changed route should print zero warnings.
Only re-run this when adding or changing a route — it calls two free, rate-limited public services,
so running it needlessly is inconsiderate to them. The script identifies itself with a `User-Agent`
and backs off on HTTP 429, waiting longer after each retry up to a five-minute cap and continuing
for about 40 minutes in total, so a rate limit on either service doesn't fail a full rebuild
partway through.

Elevation sample counts scale with each route's length (`elevationSampleCount()` in
`src/core/build.ts`): roughly one sample per 100 m, floored at 60 and capped at 1,000. A full
rebuild of all 60 routes makes about 250 calls to OpenTopoData in total, well inside its 1,000
calls/day limit — but two full rebuilds in the same day will get close to it.

**Known limitation:** no route rides the Zig Zag Road on Box Hill. Its lower hairpin reads as a
u-turn to the turn detector's check, so the Surrey seeds ride Box Hill by Headley Lane and
Pebblehill Road instead (see the header comment in `app/scripts/seeds/surrey.ts`).

## Services & attribution

The app and the route builder rely on keyless, free-tier third-party services. All are fine for a
preview or personal project; a production app serving real traffic should move to paid or
self-hosted alternatives.

| Service | Used for | Notes |
|---|---|---|
| OSRM demo server (`routing.openstreetmap.de`, **bike** profile, `/routed-bike`) | Snapping waypoints to cycle paths, towpaths and quiet lanes when building routes | Run by FOSSGIS under a fair-use policy — keyless, but not for heavy or commercial use. A production app should move to a paid host (e.g. OpenRouteService) or a self-hosted OSRM instance. |
| OpenTopoData (`api.opentopodata.org`, `eudem25m,mapzen`) | Elevation for the built-in library routes, added by `build-routes.ts` (EU-DEM 25 m across Europe, falling back to Mapzen's global terrain) | Free public API: 100 points per call, 1 call per second, 1,000 calls per day. Data attribution: "Produced using Copernicus data and information funded by the European Union - EU-DEM layers", plus Mapzen terrain. Sends no CORS headers, so it's only reachable from the build script, not the browser. |
| Open-Meteo elevation API | Elevation for routes drawn or imported in the app's Create tab (Copernicus 90 m DEM) | Free tier is for non-commercial use. Keyless and CORS-enabled, so the app can call it directly from the browser. |
| CARTO basemaps (`basemaps.cartocdn.com`, Positron style) | Map tiles in the browser preview and app map (via MapLibre GL) | Free tier has usage limits; a production app should move to a paid tile provider (e.g. MapTiler). |

Attribution shown on the site and required by the map data: **© OpenStreetMap contributors, © CARTO**.

## Storage

The app's local storage keys are namespaced for BikeMe, distinct from JustinGo's: `bikeme:routes:v1`
for the route library cache and `bikeme:rides:v1` for ride history, so the two apps can run
side by side (including in the browser preview, at different ports — see below) without clobbering
each other's local data.

## Running both apps side by side

BikeMe uses different dev/prod ports than JustinGo so both can run at once during development:

| Config (`.claude/launch.json`) | Command | Port |
|---|---|---|
| `bikeme-app-web` | `npm --prefix C:/dev/bikeme/app run web -- --port 8082 --clear` | 8082 |
| `bikeme-prod` | `node C:/dev/bikeme/scripts/serve-out.mjs 4174` | 4174 |

(JustinGo's equivalents use 8081 and 4173.)

## Roadmap

- **Website** — done (this is `site/`, plus the `/app` and `/routes.json` build outputs described above).
- **Routes** — done: 60 cycling routes across six regions, built with the OSRM bike profile (see
  **Regenerating routes** above).
- **Backend** — a Supabase backend for auth, saved routes and ride history.
- **Native apps** — iOS and Android builds via EAS. This replaces the SVG-based map placeholder in
  `app/src/components/RouteMap.tsx` with `@maplibre/maplibre-react-native` (the current placeholder
  draws the route shape without tiles and says so in its own comment), adds background location
  tracking (currently the ride screen only tracks GPS in the foreground) and audio ducking, and adds
  offline support. A development build is needed for this, not Expo Go.
- **Store launch.**

Free for now.
