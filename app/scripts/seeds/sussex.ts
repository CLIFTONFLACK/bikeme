// East Sussex, West Sussex and Brighton & Hove: cycling routes, from railway paths to the Downs
// climbs and the London to Brighton finale.
// Ids are linked from city guides and saved rides, so never rename one once it is published.
import type { Seed } from './types.ts';

export const SEEDS: Seed[] = [
  // Short and family-friendly, 15–30 km. All three are one-way rides between railway stations or
  // towns, so the whole distance is on the trail rather than half of it spent riding back.
  {
    id: 'downs-link-christs-hospital-shoreham',
    name: "Downs Link: Christ's Hospital to Shoreham",
    area: "Christ's Hospital, West Sussex",
    description: "Mostly traffic-free along the old railway line of the Downs Link, from Christ's Hospital station through Southwater, Partridge Green, Henfield and Bramber, then beside the Adur to Shoreham station.",
    surface: 'trail',
    waypoints: [
      [51.0505, -0.36325], [51.02385, -0.35306], [50.95898, -0.30805], [50.93245, -0.28519], [50.89528, -0.30367],
      [50.88289, -0.313], [50.84035, -0.28603], [50.83394, -0.27105],
    ],
    messages: [
      { near: [51.02385, -0.35306], text: 'The Downs Link runs 37 miles along old railway lines, joining the North Downs Way to the South Downs Way.' },
      { near: [50.88317, -0.31575], text: 'Bramber Castle, built by the Normans soon after 1066. Only part of the gatehouse wall still stands.' },
    ],
  },
  {
    id: 'cuckoo-trail-heathfield-polegate',
    name: 'Cuckoo Trail: Heathfield to Polegate',
    area: 'Heathfield, East Sussex',
    description: 'The traffic-free Cuckoo Trail along the old railway line, gently downhill from Heathfield through Horam and Hailsham to Polegate station, with a short stretch on village lanes near Horam.',
    surface: 'trail',
    waypoints: [
      [50.96858, 0.25183], [50.95173, 0.25816], [50.9307, 0.24946], [50.87133, 0.25208], [50.85771, 0.25781],
      [50.84691, 0.25563], [50.83065, 0.2491], [50.8214, 0.24417],
    ],
    messages: [
      { near: [50.96858, 0.25183], text: 'The trail takes its name from Heathfield fair, where by tradition the first cuckoo of spring was let go.' },
      { near: [50.9307, 0.24946], text: 'This is the line of the old Cuckoo Line railway, which closed to passengers in the 1960s.' },
    ],
  },
  {
    id: 'forest-way-east-grinstead-eridge',
    name: 'Forest Way: East Grinstead to Eridge',
    area: 'East Grinstead, West Sussex',
    description: 'The traffic-free Forest Way along the old railway through the Medway valley below Ashdown Forest to Groombridge, then quiet lanes to Eridge station.',
    surface: 'trail',
    waypoints: [
      [51.12651, -0.01744], [51.10428, 0.01657], [51.09628, 0.04566], [51.10188, 0.08508], [51.10682, 0.12976],
      [51.11227, 0.16008], [51.11013, 0.19098], [51.08978, 0.20027],
    ],
    messages: [
      { near: [51.10428, 0.01657], text: 'The Forest Way follows the old East Grinstead to Tunbridge Wells railway, which closed in 1967.' },
      { near: [51.10188, 0.08508], text: 'Hartfield is just south of here. A. A. Milne lived nearby, and Ashdown Forest inspired the Hundred Acre Wood.' },
      { near: [51.11737, 0.18952], text: 'Groombridge Place, a moated seventeenth-century manor house.' },
    ],
  },

  // Medium, 30–60 km on quiet lanes and B-roads.
  {
    id: 'devils-dyke-edburton-loop',
    name: "Devil's Dyke & the Edburton Lanes",
    area: 'Hove, Brighton & Hove',
    description: "West through Portslade and Southwick to Old Shoreham, up the Adur on the Downs Link to Bramber, east under the Downs through Edburton, Fulking and Poynings, then the climb past Devil's Dyke and down Dyke Road to Hove.",
    surface: 'mixed',
    waypoints: [
      [50.83481, -0.17061], [50.83311, -0.18369], [50.83481, -0.20633], [50.83555, -0.21981], [50.83482, -0.24954],
      [50.84035, -0.28603], [50.88289, -0.313], [50.88906, -0.24832],
      [50.8894, -0.22721], [50.89434, -0.20375], [50.85692, -0.17295], [50.83481, -0.17061],
    ],
    messages: [
      { near: [50.88906, -0.24832], text: 'The lane now runs along the foot of the South Downs scarp through Edburton, Fulking and Poynings.' },
      { near: [50.8855, -0.2105], text: "Devil's Dyke, said by the National Trust to be the longest, deepest and widest dry valley in the country." },
    ],
  },
  {
    id: 'cuckmere-alfriston-michelham',
    name: 'Cuckmere Valley: Alfriston & Michelham',
    area: 'Berwick, East Sussex',
    description: 'From Berwick station to Alfriston and along the Cuckmere, past the Long Man of Wilmington, then quiet Low Weald lanes by Arlington, Michelham Priory, Chalvington, Laughton and Ripe.',
    surface: 'road',
    waypoints: [
      [50.84049, 0.16572], [50.80803, 0.15658], [50.80336, 0.16401], [50.8198, 0.19242], [50.8226, 0.19506],
      [50.84271, 0.20537], [50.85675, 0.21648], [50.8655, 0.20062], [50.87509, 0.17378], [50.9043, 0.15194],
      [50.89395, 0.14801], [50.87051, 0.14319], [50.8605, 0.147], [50.84049, 0.16572],
    ],
    messages: [
      { near: [50.80614, 0.1578], text: 'Alfriston Clergy House was the first building the National Trust bought, in 1896.' },
      { near: [50.8198, 0.19242], text: 'Look up at the Downs for the Long Man of Wilmington, a figure cut into the chalk hillside.' },
      { near: [50.85675, 0.21648], text: 'Michelham Priory, founded in 1229, is ringed by a medieval moat.' },
    ],
  },
  {
    id: 'balcombe-ardingly-handcross-lanes',
    name: 'Ardingly, Balcombe & Handcross',
    area: 'Haywards Heath, West Sussex',
    description: 'High Weald lanes from Haywards Heath through Lindfield and Ardingly to Balcombe, west through the woods to Handcross and Slaugham, back by Cuckfield.',
    surface: 'road',
    waypoints: [
      [51.0012, -0.10539], [51.01295, -0.08077], [51.04845, -0.07797], [51.05754, -0.1076], [51.06271, -0.13684],
      [51.03926, -0.20771], [51.02085, -0.2182], [51.01935, -0.16987], [51.0012, -0.10539],
    ],
    messages: [
      { near: [51.01295, -0.08077], text: 'Lindfield, with its long High Street and village pond.' },
      { near: [51.05251, -0.19983], text: 'Handcross. Nymans, the National Trust garden, is here.' },
    ],
  },
  {
    id: 'hassocks-low-weald-lanes',
    name: 'Low Weald Lanes: Hurstpierpoint & Twineham',
    area: 'Hassocks, West Sussex',
    description: 'Flat, quiet lanes north of the Downs from Hassocks through Hurstpierpoint, Albourne, Wineham and Twineham, back by Ditchling Common and Ditchling.',
    surface: 'road',
    waypoints: [
      [50.92475, -0.14548], [50.93346, -0.17814], [50.93727, -0.2033], [50.96044, -0.23713],
      [50.95761, -0.21516], [50.96627, -0.21062], [50.96811, -0.19076], [50.96162, -0.14981], [50.93935, -0.10589],
      [50.92099, -0.11491], [50.92475, -0.14548],
    ],
    messages: [
      { near: [50.93346, -0.17814], text: 'Hurstpierpoint, below Wolstonbury Hill on the edge of the South Downs.' },
      { near: [50.92099, -0.11491], text: 'Ditchling. Ditchling Beacon, the highest point in East Sussex, is on the ridge above you.' },
    ],
  },

  // Long and classic, 60–110 km.
  {
    id: 'london-brighton-sussex-finale',
    name: 'London to Brighton: the Sussex Finale',
    area: 'Crawley, West Sussex',
    description: 'The Sussex half of the London to Brighton ride, one way from Three Bridges station: Turners Hill, Balcombe, Cuckfield and Haywards Heath, Weald lanes to Ditchling, then the climb of Ditchling Beacon and the run down into Brighton.',
    surface: 'road',
    waypoints: [
      [51.11856, -0.16007], [51.10243, -0.08869], [51.08502, -0.13305], [51.0147, -0.14288], [51.00668, -0.13465],
      [51.00675, -0.11979], [51.0012, -0.10539], [51.01295, -0.08077], [50.96214, -0.07576], [50.94663, -0.05737], [50.92842, -0.0592],
      [50.90332, -0.07161], [50.91755, -0.10071], [50.91402, -0.11534], [50.86937, -0.11831], [50.829, -0.141],
    ],
    messages: [
      { near: [51.10243, -0.08869], text: 'You are on the course of the London to Brighton Bike Ride, first held in 1976.' },
      { near: [50.91402, -0.11534], text: 'Ditchling Beacon starts here. At 248 metres it is the highest point in East Sussex.' },
      { near: [50.829, -0.141], text: 'Brighton station. Well ridden.' },
    ],
  },
  {
    id: 'ashdown-forest-kidds-hill',
    name: "Ashdown Forest & Kidd's Hill",
    area: 'East Grinstead, West Sussex',
    description: "The Forest Way to Hartfield, then the climb of Kidd's Hill onto Ashdown Forest, across the open heath to Fairwarp, and back through Horsted Keynes, Ardingly and West Hoathly.",
    surface: 'mixed',
    waypoints: [
      [51.12651, -0.01744], [51.10428, 0.01657], [51.09628, 0.04566], [51.10188, 0.08508], [51.08151, 0.07227],
      [51.07482, 0.07679], [51.06759, 0.0852], [51.03201, 0.09207], [51.01909, 0.08845], [51.00914, 0.06059],
      [51.008, -0.00865], [51.01326, -0.02887], [51.03605, -0.03336], [51.04055, -0.066], [51.05933, -0.06967],
      [51.07374, -0.0329], [51.10882, -0.02891], [51.12651, -0.01744],
    ],
    messages: [
      { near: [51.08236, 0.07136], text: "Kidd's Hill, known to cyclists as The Wall, climbs from here up onto Ashdown Forest." },
      { near: [51.03201, 0.09207], text: 'Ashdown Forest, the heathland that inspired the Hundred Acre Wood in the Winnie-the-Pooh stories.' },
      { near: [51.04293, -0.0395], text: 'Horsted Keynes station, on the Bluebell Railway, one of the first standard-gauge heritage railways.' },
    ],
  },
  {
    id: 'chichester-harting-down-loop',
    name: 'Chichester, Harting Down & Stansted',
    area: 'Chichester, West Sussex',
    description: 'Out along the traffic-free Centurion Way, over the South Downs by Chilgrove and Harting Down, back through the West Marden valley, the lanes by Rowlands Castle and Westbourne, and Funtington.',
    surface: 'mixed',
    waypoints: [
      [50.832, -0.7817], [50.83656, -0.78845], [50.8433, -0.78902], [50.85684, -0.79947], [50.86264, -0.7855],
      [50.88104, -0.78736], [50.8937, -0.78331], [50.92174, -0.81777], [50.96943, -0.88191], [50.92741, -0.89694],
      [50.90798, -0.9243], [50.90375, -0.94909], [50.89093, -0.95801], [50.87405, -0.93214], [50.86039, -0.84876],
      [50.84466, -0.81634], [50.832, -0.7817],
    ],
    messages: [
      { near: [50.86264, -0.7855], text: 'The Centurion Way follows the old Chichester to Midhurst railway line.' },
      { near: [50.95798, -0.88877], text: 'Uppark, the National Trust house, stands on the Downs above South Harting.' },
      { near: [50.83656, -0.78845], text: 'Chichester Cathedral is the only medieval English cathedral with a separate bell tower.' },
    ],
  },
];
