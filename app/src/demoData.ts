// Content for demo-only screens (city guides, hotels, community, plans, business). All names are
// invented placeholders: no real hotels, sportives, clubs or brands. Real product data lives in store.ts.
import type { Tier } from './components/demo';
import type { PhotoKey } from './photos';

export interface CityGuide {
  id: string;
  name: string;
  blurb: string;
  routeIds: string[];
  neighbourhoods: string[];
  photo: PhotoKey;
}

export const CITY_GUIDES: CityGuide[] = [
  {
    id: 'central',
    name: 'Central London',
    blurb: "Laps of Regent's Park's Outer Circle, the capital's favourite before-work training loop.",
    routeIds: ['regents-park-outer-circle'],
    neighbourhoods: ['Westminster', 'South Bank', 'Marylebone', 'King’s Cross'],
    photo: 'central',
  },
  {
    id: 'north',
    name: 'North London',
    blurb: 'Out through Barnet and Enfield to the Hertfordshire lanes, or up the Lee towpath to Hertford.',
    routeIds: ['barnet-shenley-ridge', 'enfield-hertford-lanes', 'lee-towpath-tottenham-to-hertford'],
    neighbourhoods: ['Hampstead', 'Highgate', 'Muswell Hill'],
    photo: 'north',
  },
  {
    id: 'east',
    name: 'East London',
    blurb: 'The Olympic velodrome, the Lee Valley and quiet Essex lanes beyond Havering.',
    routeIds: ['lee-valley-velopark-loop', 'havering-navestock-lanes'],
    neighbourhoods: ['Hackney', 'Stratford', 'Bow'],
    photo: 'east',
  },
  {
    id: 'south',
    name: 'South London',
    blurb: "Bromley to Darwin's Downe and over the North Downs to Toys Hill and Ide Hill.",
    routeIds: ['bromley-downe-cudham', 'bromley-toys-hill-ide-hill'],
    neighbourhoods: ['Clapham', 'Battersea', 'Greenwich', 'Crystal Palace'],
    photo: 'south',
  },
  {
    id: 'west',
    name: 'West London',
    blurb: 'Richmond Park road laps and the classic run from Kingston out to the Surrey Hills.',
    routeIds: ['richmond-park-road-laps', 'kingston-ranmore-headley'],
    neighbourhoods: ['Richmond', 'Kew', 'Wimbledon', 'Teddington'],
    photo: 'west',
  },
  {
    id: 'kent',
    name: 'Kent',
    blurb: 'Railway trails to the coast, North Downs climbs and Weald lanes in the Garden of England.',
    routeIds: ['crab-and-winkle-way', 'viking-coastal-trail-margate-ramsgate', 'tonbridge-penshurst-chiddingstone', 'kent-downs-toys-hill-ide-hill', 'white-cliffs-deal-sandwich'],
    neighbourhoods: ['Canterbury', 'Whitstable', 'Folkestone', 'Sevenoaks', 'Maidstone'],
    photo: 'clubs',
  },
  {
    id: 'sussex',
    name: 'Sussex',
    blurb: 'The Downs Link and Cuckoo Trail, Ashdown Forest climbs and the London to Brighton finish.',
    routeIds: ['downs-link-christs-hospital-shoreham', 'cuckoo-trail-heathfield-polegate', 'devils-dyke-edburton-loop', 'ashdown-forest-kidds-hill', 'london-brighton-sussex-finale'],
    neighbourhoods: ['Brighton', 'Eastbourne', 'Worthing', 'Chichester', 'Lewes'],
    photo: 'brands',
  },
  {
    id: 'surrey',
    name: 'Surrey',
    blurb: 'The Surrey Hills: Leith Hill, Pitch Hill, Ranmore and the lanes between.',
    routeIds: ['ripley-wisley-pyrford', 'coldharbour-leith-hill-loop', 'pitch-hill-holmbury-loop', 'horsley-shere-ranmore', 'surrey-hills-classic'],
    neighbourhoods: ['Dorking', 'Guildford', 'Farnham', 'Woking', 'Reigate'],
    photo: 'corporate',
  },
  {
    id: 'hampshire',
    name: 'Hampshire & Isle of Wight',
    blurb: 'New Forest gravel and lanes, the Meon Valley and the Round the Island classic.',
    routeIds: ['brockenhurst-forest-tracks', 'meon-valley-trail', 'new-forest-lanes-lyndhurst', 'red-squirrel-trail', 'round-the-island'],
    neighbourhoods: ['Winchester', 'Portsmouth', 'Southampton', 'Lymington', 'Cowes'],
    photo: 'race',
  },
  {
    id: 'thames-valley',
    name: 'Thames Valley',
    blurb: 'Chiltern climbs, Berkshire Downs and quiet lanes along the Thames.',
    routeIds: ['phoenix-trail-thame', 'marlow-hambleden-turville', 'goring-gap-streatley-hill', 'chilterns-christmas-common', 'whiteleaf-wendover-chilterns'],
    neighbourhoods: ['Windsor', 'Reading', 'Oxford', 'Henley', 'Marlow'],
    photo: 'clubs',
  },
];

export interface HotelDemo {
  id: string;
  name: string;
  area: string;
  routes: string;
  perks: string[];
  photo: PhotoKey;
}

export const HOTELS: HotelDemo[] = [
  { id: 'h1', name: 'The Parkside Hotel', area: 'Knightsbridge', routes: '3 routes from the lobby', perks: ['Concierge-narrated 20K ride', 'Bike hire desk', 'Juice bar finish'], photo: 'hotel' },
  { id: 'h2', name: 'Riverside Grand', area: 'South Bank', routes: '2 routes from the lobby', perks: ['Bridges 30K loop', 'Sportive shakeout ride'], photo: 'hotel' },
  { id: 'h3', name: 'Canal House', area: 'King’s Cross', routes: '2 routes from the lobby', perks: ['Towpath 15K', 'Guided bike tour'], photo: 'hotel' },
  { id: 'h4', name: 'Hilltop Lodge', area: 'Hampstead', routes: '1 route from the lobby', perks: ['Heath hills loop'], photo: 'hotel' },
];

export const CHALLENGES = [
  { id: 'c1', title: 'Royal Parks 50', detail: 'Ride 50 km across London’s royal parks this month', progress: 0.42, joined: 1284, tier: 'free' as Tier },
  { id: 'c2', title: 'Thames Bridges Series', detail: 'Three bridge routes, lowest combined time wins', progress: 0.0, joined: 316, tier: 'free' as Tier },
  { id: 'c3', title: 'Team Step Up', detail: 'Corporate wellness: your office vs the city', progress: 0.18, joined: 57, tier: 'free' as Tier },
];

export const VIRTUAL_RACES = [
  { id: 'v1', title: 'Autumn Heath Sportive', date: '1–31 Oct', mode: 'On course or anywhere' },
  { id: 'v2', title: 'Charity Dash 20K', date: '9 Nov', mode: 'Open course window' },
];

export const GROUPS = [
  { id: 'g1', name: 'Hackney Wheelers (demo)', members: 214, detail: 'Cycling club · Tuesday and Thursday routes' },
  { id: 'g2', name: 'London Coffee Riders', members: 1840, detail: 'Social rides that finish at a café' },
  { id: 'g3', name: 'Sportive Training Crew', members: 562, detail: 'Coach-led long rides · Creator group' },
];

export const LEADERBOARD = [
  { rank: 1, name: 'A. Rider', value: '48.2 km' },
  { rank: 2, name: 'Sam P.', value: '44.9 km' },
  { rank: 3, name: 'Priya K.', value: '41.3 km' },
  { rank: 4, name: 'You', value: '21.0 km' },
];

export const BADGES = ['First ride', '20K', '50K', 'Century', 'Hill climber', 'Early bird', 'Clean-up ride', 'All five areas'];

export interface Plan {
  id: Tier;
  name: string;
  price: string;
  sub: string;
  features: string[];
}

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '£0',
    sub: 'Forever',
    features: ['Turn-by-turn voice directions', 'Every route in the library', 'Create routes (5 a month)', 'Ride log and splits', 'Groups, challenges and badges'],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '£4.99',
    sub: 'a month · £44.99 a year · £99 lifetime',
    features: ['Unlimited routes', 'Topo and satellite maps', 'Live tracking for friends', 'Strava import and export', 'Interval training', 'Treadmill street view', 'Enhanced voices', '3D flyover'],
  },
  {
    id: 'creator',
    name: 'Creator',
    price: '£16.99',
    sub: 'a month · £169 a year · includes Premium',
    features: ['Photos, logos and audio on routes', 'Branded share pages and images', 'GPX downloads for your followers', 'Creator groups for clubs and coaches'],
  },
];

export interface BusinessModel {
  id: string;
  title: string;
  pitch: string;
  bullets: string[];
  photo: PhotoKey;
}

export const BUSINESS: BusinessModel[] = [
  {
    id: 'hotels',
    title: 'Hotels & hospitality',
    pitch: 'Give every guest a local guided bike route and bike hire from the lobby.',
    bullets: ['Voice-guided rides narrated by your staff', 'Bike hire desk booking and route hand-out', 'Brand page, QR room cards and website embeds', 'Listing in the BikeMe hotel finder', 'Usage analytics'],
    photo: 'hotel',
  },
  {
    id: 'races',
    title: 'Sportives & events',
    pitch: 'Course maps, audio guidance and live tracking in one place.',
    bullets: ['Course map embeds for your sportive site', 'Audio course guidance with sponsor messages', 'Live tracking map for spectators', 'Leaderboards, virtual sportives and digital medals', 'GPS start and finish timing'],
    photo: 'race',
  },
  {
    id: 'tourism',
    title: 'Tourism & destinations',
    pitch: 'Turn your city into a series of guided cycling routes.',
    bullets: ['Official city cycling guides', 'Themed audio trails', 'Seasonal challenge series'],
    photo: 'tourism',
  },
  {
    id: 'corporate',
    title: 'Corporate wellness',
    pitch: 'Team challenges that get people riding.',
    bullets: ['Company leaderboards', 'Virtual team sportives', 'Charity mileage challenges'],
    photo: 'corporate',
  },
  {
    id: 'brands',
    title: 'Bike shops, brands & sponsors',
    pitch: 'Reach riders at the moment they’re moving.',
    bullets: ['Audio activations along routes', 'Branded routes and badges', 'Sponsored share images'],
    photo: 'brands',
  },
  {
    id: 'clubs',
    title: 'Cycling clubs & coaches',
    pitch: 'Share routes and sessions with your members.',
    bullets: ['Creator plan and branded groups', 'Weekly route drops', 'Member challenges'],
    photo: 'clubs',
  },
];
