# BikeMe rebrand — plan & status

Scope of this pass: `site/index.html`, `site/favicon.svg`, `README.md`,
`docs/feature-inventory.md`, `design-system/bikeme/MASTER.md`, `scripts/build.mjs`,
`scripts/serve-out.mjs`, `vercel.json`, `.gitignore`, `.claude/launch.json`. The `app/` directory is
out of scope here — other agents are converting it in parallel.

## Done

- [x] `site/index.html` — full copy rebrand: title/meta/og tags, brand mark (`Bike<span>Me</span>`),
      running → cycling terminology throughout (riders/cyclists, rides, speed in km/h,
      sportives/races, cycling clubs), integrations updated to Strava/Garmin/Wahoo/Zwift/
      Hammerhead/Apple Health, health section kept with cycling context (cadence rpm, power watts),
      `utm_source=justingo` → `utm_source=bikeme` (24 occurrences), orange `rgba(255, 95, 31, ...)`
      shadow switched to green `rgba(34, 197, 94, ...)`, photo alt text neutralised where the stock
      photo showed runners (see report — photos flagged for replacement).
- [x] `site/favicon.svg` — already green (`#22C55E`); no change needed, verified.
- [x] `README.md` — rewritten for BikeMe: independent-duplicate framing, deployed Vercel project
      (`bikeme-usgc` in team `clifton-ai-team`, https://bikeme-usgc.vercel.app), OSRM bike
      profile, cycling cue distances, storage keys `bikeme:routes:v1` / `bikeme:rides:v1`,
      `/ride/[id]` route, PowerShell-safe absolute-path commands. Route library rebuilt: 60
      cycling routes (10 per region across six regions, OSRM bike profile), documented in
      **Regenerating routes**; the old running-route "known gap" section is gone.
- [x] `docs/feature-inventory.md` — rebranded to cycling terms and BikeMe naming.
- [x] `design-system/bikeme/MASTER.md` — moved from `design-system/justingo/`, green palette with
      contrast ratios documented; old `justingo` folder deleted.
- [x] `scripts/build.mjs`, `scripts/serve-out.mjs`, `vercel.json`, `.gitignore` — checked; no
      JustinGo-specific strings were present, so no edits were needed (logic already brand-neutral).
- [x] `.claude/launch.json` — `bikeme-app-web` (port 8082) and `bikeme-prod` (port 4174), distinct
      from JustinGo's 8081/4173 so both can run side by side.

## Resolved since this pass

- `app/src/data/routes.json` has been rebuilt: 60 cycling routes (OSRM **bike** profile), 10 per
  region across London, Kent, Sussex, Surrey, Hampshire & Isle of Wight and Thames Valley, 15–102 km.
  README's **Regenerating routes** section documents this; the old "Known gap" section referencing
  118 running/foot-profile routes has been removed.
- BikeMe now has its own repo, [CLIFTONFLACK/bikeme](https://github.com/CLIFTONFLACK/bikeme), and
  Vercel project `bikeme-usgc` (team `clifton-ai-team`), which deploys every push to `main` to
  https://bikeme-usgc.vercel.app. The earlier CLI-deployed project `bikeme` is superseded.

## Verification

- Grepped `site/`, `README.md`, `docs/feature-inventory.md`, `design-system/bikeme/MASTER.md`
  case-insensitively for `justin|run|pace|jog|orange|marathon|parkrun|foot` — remaining hits are
  CSS class names only (`.run-card`, `.run-stats`, `.health-foot`, etc.) and Unsplash photo-slug
  URL segments that must not be edited (they'd break the link). No user-facing "JustinGo",
  "orange", "marathon", "parkrun", running-pace or foot-profile copy remains.
