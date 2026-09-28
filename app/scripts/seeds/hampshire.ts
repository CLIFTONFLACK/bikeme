// Cycling routes in Hampshire and the Isle of Wight: traffic-free trails and forest tracks, quiet-lane
// loops, and the long classics over the chalk downs and round the island.
//
// Ids are linked from city guides and saved rides: never rename one once it has been published.
import type { Seed } from './types.ts';

export const SEEDS: Seed[] = [
  // Short and family rides
  {
    id: 'brockenhurst-forest-tracks',
    name: 'Brockenhurst Forest Tracks',
    area: 'Brockenhurst, Hampshire',
    description: 'A family loop from Brockenhurst station on the New Forest gravel cycle network and quiet forest roads: west along the old railway line, back past Wilverley, then through the Rhinefield inclosures and over Bolderford Bridge. Watch for ponies and cattle.',
    surface: 'trail',
    waypoints: [
      [50.8166, -1.5731], [50.8153, -1.579], [50.8048, -1.5822], [50.8026, -1.5993], [50.8016, -1.6166],
      [50.7992, -1.6373], [50.803, -1.6412], [50.811, -1.6256], [50.8122, -1.6066], [50.8211, -1.6018],
      [50.8229, -1.6146], [50.8315, -1.6175], [50.8378, -1.6095], [50.842, -1.6058], [50.8441, -1.5936],
      [50.8445, -1.5876], [50.8349, -1.5886], [50.8292, -1.5987], [50.8229, -1.5899], [50.8166, -1.5731],
    ],
    messages: [
      { near: [50.8026, -1.6028], text: 'This track follows the old Southampton and Dorchester Railway, nicknamed Castleman’s Corkscrew for its winding route.' },
      { near: [50.8211, -1.6078], text: 'The New Forest was made a royal hunting forest by William the Conqueror around 1079.' },
    ],
  },
  {
    id: 'red-squirrel-trail',
    name: 'Red Squirrel Trail: Cowes to Sandown',
    area: 'Newport, Isle of Wight',
    description: 'The island’s traffic-free spine, following two old railway lines from Cowes through Newport and across the middle of the island to Sandown. Almost flat throughout.',
    surface: 'mixed',
    waypoints: [
      [50.756, -1.2962], [50.7411, -1.2914], [50.7245, -1.2869], [50.7087, -1.2924], [50.7024, -1.2904],
      [50.69, -1.2886], [50.6751, -1.2848], [50.6653, -1.2727], [50.6596, -1.2585], [50.6548, -1.2444],
      [50.6608, -1.2391], [50.6661, -1.2312], [50.6697, -1.2107], [50.6703, -1.1936], [50.6645, -1.1766],
      [50.661, -1.1613],
    ],
    messages: [
      { near: [50.7411, -1.2914], text: 'This path follows the old Cowes and Newport Railway, which opened in 1862.' },
      { near: [50.6653, -1.2727], text: 'Red squirrels still live wild on the Isle of Wight because grey squirrels never reached the island.' },
    ],
  },
  {
    id: 'meon-valley-trail',
    name: 'Meon Valley Trail Loop',
    area: 'Wickham, Hampshire',
    description: 'North from Wickham on the Meon Valley Trail, a gentle traffic-free gravel path along the old railway, to Droxford, returning on quiet lanes through Swanmore and Shirrell Heath.',
    surface: 'trail',
    waypoints: [
      [50.8997, -1.1862], [50.9015, -1.1834], [50.9075, -1.181], [50.9136, -1.174], [50.918, -1.1675],
      [50.9204, -1.1635], [50.9258, -1.1488], [50.9382, -1.1358], [50.9549, -1.1319], [50.9578, -1.1397],
      [50.9441, -1.1802], [50.9223, -1.1892], [50.8997, -1.1862],
    ],
    messages: [
      { near: [50.9075, -1.181], text: 'The Meon Valley Railway opened in 1903 and closed to passengers in 1955.' },
      { near: [50.9549, -1.1319], text: 'In the days before D-Day in June 1944, Winston Churchill’s train was parked at Droxford station, near here.' },
    ],
  },

  // Medium rides
  {
    id: 'new-forest-lanes-lyndhurst',
    name: 'New Forest Lanes from Lyndhurst',
    area: 'Lyndhurst, Hampshire',
    description: 'A classic forest road loop from Lyndhurst to Beaulieu, Brockenhurst and back through the Rhinefield and Bolderwood ornamental drives. Open heath with free-roaming animals, so ride steadily.',
    surface: 'road',
    waypoints: [
      [50.8715, -1.5735], [50.816, -1.4524], [50.8192, -1.578], [50.8236, -1.6162], [50.8467, -1.6232],
      [50.8583, -1.6344], [50.8681, -1.6556], [50.8733, -1.6546], [50.8725, -1.6478], [50.8768, -1.5973],
      [50.8715, -1.5735],
    ],
    messages: [
      { near: [50.816, -1.4525], text: 'Beaulieu Abbey was founded by King John in 1204 for Cistercian monks.' },
      { near: [50.8467, -1.6232], text: 'The tall conifers along the Rhinefield Ornamental Drive were planted in the 1850s.' },
    ],
  },
  {
    id: 'winchester-test-valley',
    name: 'Winchester and the Test Valley',
    area: 'Winchester, Hampshire',
    description: 'West out of Winchester over Farley Mount to Kings Somborne, up the Test valley through Houghton to Stockbridge, and home over the downs by Crawley and Littleton. Rolling chalk lanes, with short main-road stretches through Kings Somborne and Stockbridge.',
    surface: 'road',
    waypoints: [
      [51.064, -1.3197], [51.0596, -1.3527], [51.0619, -1.3959], [51.0603, -1.4071], [51.063, -1.4108],
      [51.0712, -1.4502], [51.0793, -1.4783], [51.0718, -1.502], [51.0773, -1.5148], [51.1049, -1.5056],
      [51.1084, -1.4489], [51.1109, -1.3955], [51.1041, -1.374], [51.0847, -1.3469], [51.0707, -1.3321],
      [51.064, -1.3197],
    ],
    messages: [
      { near: [51.1135, -1.491], text: 'Stockbridge sits on the River Test, a chalk stream famous for its trout fishing.' },
      { near: [51.064, -1.417], text: 'The pyramid on Farley Mount is a memorial to a horse, later named Beware Chalk Pit, that survived a leap into a chalk pit in 1733.' },
    ],
  },
  {
    id: 'isle-of-wight-downs-villages',
    name: 'Isle of Wight Downs and Villages',
    area: 'Newport, Isle of Wight',
    description: 'From Newport past Carisbrooke Castle to Shorwell and Brighstone, over the downs to Calbourne, then back through the quiet north-west lanes and along the Cowes–Newport cycle path.',
    surface: 'road',
    waypoints: [
      [50.701, -1.2915], [50.6897, -1.3106], [50.6442, -1.3584], [50.6423, -1.3937], [50.6796, -1.401],
      [50.6872, -1.419], [50.7005, -1.4185], [50.7187, -1.3681], [50.7245, -1.2869], [50.701, -1.2915],
    ],
    messages: [
      { near: [50.69, -1.311], text: 'King Charles the First was held prisoner in Carisbrooke Castle in 1647 and 1648.' },
    ],
  },
  {
    id: 'alresford-candover-valley',
    name: 'Alresford and the Candover Valley',
    area: 'New Alresford, Hampshire',
    description: 'North from Alresford up the Candover valley, then east across high farmland to the Wields and back via Bighton. Quiet lanes and one easy B-road.',
    surface: 'road',
    waypoints: [
      [51.0895, -1.1603], [51.1022, -1.1627], [51.1232, -1.1774], [51.1577, -1.1545], [51.173, -1.1104],
      [51.1661, -1.0894], [51.1533, -1.0916], [51.134, -1.0764], [51.1281, -1.0743], [51.1147, -1.1026],
      [51.1012, -1.1408], [51.0895, -1.1603],
    ],
    messages: [
      { near: [51.0895, -1.16], text: 'Alresford is the terminus of the Watercress Line, the steam railway to Alton.' },
    ],
  },

  // Long rides
  {
    id: 'round-the-island',
    name: 'Round the Isle of Wight',
    area: 'Cowes, Isle of Wight',
    description: 'The island classic: from Cowes out to Yarmouth, along the Military Road under the chalk cliffs, round the south coast to Ventnor, Sandown and Ryde, and back via Newport on the cycle path. Some busy coast road and some stiff climbs.',
    surface: 'road',
    waypoints: [
      [50.7612, -1.2991], [50.7544, -1.3184], [50.7467, -1.333], [50.7337, -1.3431], [50.7193, -1.3676],
      [50.7075, -1.3977], [50.701, -1.4282], [50.7044, -1.4693], [50.7043, -1.505], [50.6895, -1.5141],
      [50.6729, -1.5161], [50.6692, -1.504], [50.6437, -1.4372], [50.6124, -1.3559], [50.5988, -1.3238],
      [50.5882, -1.3076], [50.59, -1.2785], [50.5931, -1.2612], [50.591, -1.2444], [50.5946, -1.2182],
      [50.6014, -1.1877], [50.6088, -1.1869], [50.642, -1.1694], [50.6547, -1.152], [50.6573, -1.1461],
      [50.6762, -1.1161], [50.6847, -1.0865], [50.6932, -1.0908], [50.6904, -1.099], [50.7061, -1.1144],
      [50.7155, -1.1227], [50.7234, -1.1422], [50.7306, -1.1533], [50.7276, -1.1691], [50.718, -1.1914],
      [50.7131, -1.2017], [50.7195, -1.2112], [50.7251, -1.2307], [50.7219, -1.2405], [50.7152, -1.2482],
      [50.7042, -1.2643], [50.7053, -1.2941], [50.7304, -1.2857], [50.7479, -1.2943], [50.7612, -1.2991],
    ],
    messages: [
      { near: [50.6725, -1.5195], text: 'Freshwater Bay. Alfred Tennyson lived nearby at Farringford for almost forty years.' },
      { near: [50.6437, -1.4372], text: 'The Military Road ahead was built in the 1860s to link the coastal forts.' },
      { near: [50.6847, -1.0865], text: 'Bembridge windmill, just inland, is the last surviving windmill on the island.' },
    ],
  },
  {
    id: 'hampshire-downs-watership',
    name: 'Watership Down and the Hampshire Highlands',
    area: 'Kingsclere, Hampshire',
    description: 'A hilly downland loop from Kingsclere: up White Hill beside Watership Down, down the Test valley past Overton and Whitchurch, then over the high north Hampshire ridge by Faccombe and Beacon Hill.',
    surface: 'road',
    waypoints: [
      [51.3248, -1.2448], [51.3041, -1.2627], [51.3004, -1.2382], [51.2893, -1.2268], [51.2781, -1.2314],
      [51.2565, -1.25], [51.2438, -1.267], [51.2362, -1.3055], [51.2302, -1.3401], [51.2406, -1.3516],
      [51.2511, -1.3734], [51.2527, -1.3919], [51.2606, -1.4172], [51.2745, -1.4481], [51.2862, -1.4446],
      [51.3082, -1.4373], [51.3111, -1.426], [51.3168, -1.3983], [51.3493, -1.4057], [51.3431, -1.3706],
      [51.3478, -1.3533], [51.3323, -1.3446], [51.3189, -1.3172], [51.3272, -1.2901], [51.3281, -1.2708],
      [51.3248, -1.2448],
    ],
    messages: [
      { near: [51.3065, -1.263], text: 'The ridge along here is Watership Down, the setting of Richard Adams’s 1972 novel.' },
      { near: [51.2355, -1.29], text: 'Laverstoke Mill once made the paper for Bank of England banknotes, and is now the Bombay Sapphire distillery.' },
      { near: [51.3198, -1.3292], text: 'Beacon Hill, the Iron Age hill fort nearby, is where the fifth Earl of Carnarvon, who funded the search for Tutankhamun’s tomb, is buried.' },
    ],
  },
  {
    id: 'south-downs-harting-meon',
    name: 'Harting Down and Old Winchester Hill',
    area: 'Petersfield, Hampshire',
    description: 'A big South Downs loop from Petersfield: over Harting Down, through the Marden villages, to Hambledon and up Old Winchester Hill before the run home via East Meon. Lots of climbing on quiet lanes.',
    surface: 'road',
    waypoints: [
      [51.0065, -0.9417], [50.9855, -0.9166], [50.9683, -0.8776], [50.9673, -0.8725], [50.963, -0.8714],
      [50.9456, -0.8655], [50.9355, -0.853], [50.9322, -0.864], [50.9348, -0.8817], [50.9297, -0.8991],
      [50.9257, -0.8988], [50.9163, -0.9049], [50.9039, -0.9389], [50.9204, -0.9689], [50.9366, -0.9623],
      [50.9451, -0.9963], [50.9437, -1.014], [50.9403, -1.054], [50.9407, -1.0705], [50.9477, -1.0707],
      [50.9572, -1.0627], [50.9682, -1.0673], [50.9757, -1.0655], [50.9852, -1.0492], [50.9922, -1.0369],
      [50.9946, -1.0265], [50.9975, -1.0109], [51.0011, -0.9758], [51.0065, -0.9417],
    ],
    messages: [
      { near: [50.9683, -0.8776], text: 'H. G. Wells spent part of his youth at Uppark, the house above South Harting, where his mother was housekeeper.' },
      { near: [50.9398, -1.0632], text: 'Hambledon is called the cradle of cricket: its club played on nearby Broadhalfpenny Down in the 1700s.' },
      { near: [50.9757, -1.0655], text: 'Old Winchester Hill is crowned by an Iron Age hill fort.' },
    ],
  },
];
