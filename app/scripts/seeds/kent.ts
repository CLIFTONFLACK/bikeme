// Kent and Medway: cycling routes, from family railway paths to Downs climbs and long club runs.
// Ids are linked from city guides and saved rides, so never rename one once it is published.
import type { Seed } from './types.ts';

export const SEEDS: Seed[] = [
  // Short and family-friendly, 15–30 km.
  {
    id: 'crab-and-winkle-way',
    name: 'Crab & Winkle Way',
    area: 'Canterbury, Kent',
    description: 'The traffic-free Crab & Winkle Way through the Blean woods to Whitstable harbour, back over quiet lanes by Chestfield, Radfall and Tyler Hill.',
    surface: 'mixed',
    waypoints: [
      [51.28422, 1.07531], [51.29916, 1.06924], [51.29946, 1.05347], [51.32717, 1.0495], [51.36294, 1.03002],
      [51.36352, 1.03342], [51.35805, 1.06618], [51.3416, 1.06139], [51.32821, 1.0669], [51.28422, 1.07531],
    ],
    messages: [
      { near: [51.30679, 1.0532], text: 'This path follows the Canterbury and Whitstable Railway, opened in 1830 and one of the first passenger railways in the world.' },
      { near: [51.3624, 1.0262], text: 'Whitstable harbour. The town has been famous for its oysters since Roman times.' },
    ],
  },
  {
    id: 'viking-coastal-trail-margate-ramsgate',
    name: 'Viking Coastal Trail: Margate to Ramsgate',
    area: 'Margate, Kent',
    description: 'The Viking Coastal Trail along the Thanet seafront and clifftops past Botany Bay and Broadstairs to Ramsgate, back to Margate on quiet inland roads.',
    surface: 'mixed',
    waypoints: [
      [51.38569, 1.37292], [51.3905, 1.386], [51.39207, 1.39948], [51.38805, 1.43675], [51.3594, 1.4409],
      [51.35014, 1.44208], [51.3321, 1.4203], [51.342, 1.431], [51.36045, 1.43206], [51.36637, 1.43036],
      [51.37433, 1.43203], [51.38144, 1.41343], [51.38569, 1.37292],
    ],
    messages: [
      { near: [51.38805, 1.43675], text: 'Botany Bay, with its chalk stacks standing on the beach.' },
      { near: [51.3594, 1.4409], text: 'Viking Bay, Broadstairs. Charles Dickens spent many summers here.' },
      { near: [51.3321, 1.4203], text: 'Ramsgate is a Royal Harbour, a title granted by King George the Fourth in 1821.' },
    ],
  },
  {
    id: 'tonbridge-penshurst-chiddingstone',
    name: 'Tonbridge to Penshurst & Chiddingstone',
    area: 'Tonbridge, Kent',
    description: 'The Tudor Trail through Haysden Country Park to Penshurst, then quiet Weald lanes and the B2027 by Chiddingstone and Leigh, back along the Medway.',
    surface: 'mixed',
    waypoints: [
      [51.19151, 0.27], [51.19553, 0.25573], [51.17271, 0.18237], [51.18849, 0.18197], [51.2009, 0.15534],
      [51.18603, 0.146], [51.20003, 0.13268], [51.19612, 0.21327], [51.1973, 0.21624], [51.19151, 0.27],
    ],
    messages: [
      { near: [51.17271, 0.18237], text: 'Penshurst Place, home of the Sidney family since 1552.' },
      { near: [51.18603, 0.146], text: 'Chiddingstone, a single street of Tudor houses owned by the National Trust.' },
    ],
  },

  // Medium, 30–60 km on quiet lanes and B-roads.
  {
    id: 'kemsing-exedown-luddesdown-lanes',
    name: 'Exedown, Harvel & Luddesdown Lanes',
    area: 'Kemsing, Kent',
    description: 'Along the foot of the North Downs, up the steep Exedown Road, then rolling lanes by Stansted, Harvel and the Luddesdown valley, back via Knatts Valley and down Cotman\'s Ash Lane.',
    surface: 'road',
    waypoints: [
      [51.29725, 0.24742], [51.30694, 0.27007], [51.31432, 0.28103], [51.33594, 0.28833], [51.34347, 0.31543],
      [51.34408, 0.36953], [51.35168, 0.39449], [51.37472, 0.40187], [51.37071, 0.34448], [51.36001, 0.33011],
      [51.3553, 0.2978], [51.33006, 0.25969], [51.32884, 0.24487], [51.32124, 0.23538], [51.29725, 0.24742],
    ],
    messages: [
      { near: [51.30694, 0.27007], text: 'This road follows the line of the Pilgrims Way along the foot of the North Downs.' },
      { near: [51.30858, 0.28511], text: 'Exedown Road: a short, steep climb up the scarp of the North Downs starts here.' },
    ],
  },
  {
    id: 'romney-marsh-churches',
    name: 'Romney Marsh Churches',
    area: 'Hamstreet, Kent',
    description: 'Flat, open lanes across Romney Marsh linking its medieval churches: Snargate, Fairfield, Brookland, Ivychurch, St Mary in the Marsh and Newchurch.',
    surface: 'road',
    waypoints: [
      [51.06831, 0.85453], [51.02294, 0.83671], [51.00462, 0.81591], [51.00019, 0.8303], [51.01006, 0.85311],
      [51.01444, 0.94402], [51.04498, 0.9269], [51.07664, 0.90843], [51.06831, 0.85453],
    ],
    messages: [
      { near: [51.00462, 0.81591], text: 'Fairfield church stands alone out on the marsh, often reached across the fields by a causeway.' },
      { near: [51.00019, 0.8303], text: "Brookland's church of St Augustine has a wooden bell tower standing on the ground beside it." },
      { near: [51.01444, 0.94402], text: "St Mary in the Marsh. The children's author Edith Nesbit is buried in the churchyard." },
    ],
  },
  {
    id: 'faversham-downs-orchards',
    name: 'Faversham Downs & Orchards',
    area: 'Faversham, Kent',
    description: 'Up from Faversham into the quiet lanes and orchards of the North Downs by Eastling, Doddington, Wichling, Throwley and Selling.',
    surface: 'road',
    waypoints: [
      [51.31165, 0.89066], [51.29412, 0.85657], [51.2802, 0.8079], [51.2792, 0.7718], [51.27647, 0.75852],
      [51.24659, 0.77684], [51.25134, 0.80276], [51.25313, 0.85132], [51.26138, 0.87743], [51.26453, 0.8895],
      [51.27471, 0.91052], [51.30333, 0.95204], [51.31165, 0.89066],
    ],
    messages: [
      { near: [51.31165, 0.89066], text: "Faversham is home to Shepherd Neame, which calls itself Britain's oldest brewer." },
      { near: [51.2792, 0.7718], text: 'Doddington. The lanes from here climb onto the chalk of the North Downs.' },
    ],
  },
  {
    id: 'canterbury-elham-valley',
    name: 'Canterbury & the Elham Valley',
    area: 'Canterbury, Kent',
    description: 'South from Canterbury through Bridge and Barham, down the chalk Elham Valley to Elham, back over the downs by Rhodes Minnis, Stelling Minnis and Petham.',
    surface: 'road',
    waypoints: [
      [51.2744, 1.077], [51.26084, 1.08784], [51.24485, 1.0989], [51.24559, 1.12528], [51.20447, 1.15691],
      [51.15377, 1.11068], [51.14587, 1.0813], [51.14609, 1.07398], [51.17688, 1.07382], [51.22016, 1.0504],
      [51.22986, 1.03299], [51.2744, 1.077],
    ],
    messages: [
      { near: [51.19375, 1.15304], text: 'The Elham Valley. The Nailbourne stream along this valley only flows in wet years.' },
      { near: [51.15377, 1.11068], text: 'Elham, a village of old timber-framed houses gathered round its square.' },
    ],
  },

  // Long and classic, 60–110 km.
  {
    id: 'kent-downs-toys-hill-ide-hill',
    name: 'Kent Downs: Toys Hill & Ide Hill',
    area: 'Otford, Kent',
    description: 'A hilly club favourite: the Darent Valley to Shoreham, up to Knockholt and down Hogtrough Hill, then the climbs of Toys Hill, Ide Hill and Star Hill.',
    surface: 'road',
    waypoints: [
      [51.3127, 0.1903], [51.31181, 0.18149], [51.325, 0.16923], [51.35094, 0.17548], [51.35246, 0.16929],
      [51.34413, 0.14718], [51.31251, 0.11013], [51.28959, 0.09281], [51.2612, 0.10293], [51.22499, 0.10604],
      [51.23768, 0.12967], [51.28898, 0.13123], [51.30608, 0.14255], [51.31251, 0.13533], [51.32, 0.13],
      [51.33333, 0.17786], [51.31181, 0.18149], [51.3127, 0.1903],
    ],
    messages: [
      { near: [51.325, 0.16923], text: 'Shoreham, where the painter Samuel Palmer lived and worked in the 1820s and 30s.' },
      { near: [51.22499, 0.10604], text: 'Toys Hill. A well near the top remembers Octavia Hill, one of the founders of the National Trust.' },
    ],
  },
  {
    id: 'weald-goudhurst-cranbrook',
    name: 'Weald Hop Country: Goudhurst & Cranbrook',
    area: 'Paddock Wood, Kent',
    description: 'Rolling lanes through the orchards and oast houses of the Kent Weald: Brenchley, Horsmonden, hilltop Goudhurst, Cranbrook, Sissinghurst, Frittenden and Marden.',
    surface: 'road',
    waypoints: [
      [51.18236, 0.38949], [51.17196, 0.40363], [51.15489, 0.40011], [51.13434, 0.44389], [51.11301, 0.45894],
      [51.13393, 0.50718], [51.09588, 0.53735], [51.09426, 0.54246], [51.11353, 0.55594], [51.1368, 0.58567],
      [51.14157, 0.5936], [51.16567, 0.54373], [51.17744, 0.50282], [51.17464, 0.49098], [51.18776, 0.46099],
      [51.16938, 0.41442], [51.18236, 0.38949],
    ],
    messages: [
      { near: [51.11301, 0.45894], text: 'Goudhurst, on its hilltop. The church tower looks out across the Weald.' },
      { near: [51.09524, 0.53931], text: "Cranbrook's Union Mill, built in 1814, is the tallest working smock mill in England." },
      { near: [51.11353, 0.55594], text: 'Sissinghurst, where Vita Sackville-West and Harold Nicolson made their famous garden.' },
    ],
  },
  {
    id: 'white-cliffs-deal-sandwich',
    name: 'White Cliffs, Deal & Sandwich',
    area: 'Dover, Kent',
    description: "National Cycle Route 1 over the White Cliffs to St Margaret's, along the seafront through Walmer and Deal to the Cinque Port of Sandwich, back through Eastry, Barfrestone and Shepherdswell.",
    surface: 'mixed',
    waypoints: [
      [51.12594, 1.30487], [51.15428, 1.37213], [51.18563, 1.39596], [51.20797, 1.40334], [51.2295, 1.4045],
      [51.27458, 1.33886], [51.23935, 1.30752], [51.21537, 1.29472], [51.20521, 1.25058], [51.1862, 1.23161],
      [51.1822, 1.25354], [51.16362, 1.31088], [51.12594, 1.30487],
    ],
    messages: [
      { near: [51.15428, 1.37213], text: "St Margaret's at Cliffe. The South Foreland lighthouse on the cliffs was the first to be lit by electricity, in 1858." },
      { near: [51.20797, 1.40334], text: 'Walmer and Deal castles were both built by Henry the Eighth around 1540 to guard this coast.' },
      { near: [51.27458, 1.33886], text: 'Sandwich, one of the original Cinque Ports.' },
      { near: [51.20567, 1.24149], text: "Barfrestone's small Norman church is famous for its twelfth-century stone carvings." },
    ],
  },
];
