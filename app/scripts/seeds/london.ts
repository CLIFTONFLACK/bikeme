// Greater London. Ids here are linked from city guides and saved rides, so don't rename them once
// published.
import type { Seed } from './types.ts';

/** One clockwise lap of the Outer Circle, starting at Hanover Gate. */
const REGENTS_LAP: [number, number][] = [[51.5301, -0.165], [51.5362, -0.1543], [51.5331, -0.1472], [51.5268, -0.1458], [51.5241, -0.152], [51.5237, -0.1556]];
/** One clockwise lap of the Richmond Park road, from just inside Richmond Gate. */
const RICHMOND_LAP: [number, number][] = [
  [51.4499, -0.2812], [51.4519, -0.2673], [51.4454, -0.2561], [51.4346, -0.2648], [51.4314, -0.271], [51.4287, -0.288], [51.4399, -0.2911],
];

export const SEEDS: Seed[] = [
  {
    id: 'regents-park-outer-circle',
    name: "Regent's Park Outer Circle",
    area: 'Westminster',
    description: "Four laps of the Outer Circle, the flat road round Regent's Park that London riders use for early-morning training. About 18 km, shared with park traffic.",
    surface: 'road',
    waypoints: [...REGENTS_LAP, ...REGENTS_LAP, ...REGENTS_LAP, ...REGENTS_LAP, REGENTS_LAP[0]],
    messages: [
      { near: [51.5362, -0.1543], text: 'London Zoo is beside the road here. It opened in 1828 and is the oldest scientific zoo in the world.' },
      { near: [51.5268, -0.1458], text: 'One lap of the Outer Circle is about four and a half kilometres.' },
    ],
  },
  {
    id: 'richmond-park-road-laps',
    name: 'Richmond Park Laps',
    area: 'Richmond upon Thames',
    description: "Up Richmond Hill from the station, then two laps of the park road with Sawyer's Hill and Broomfield Hill on each. About 26 km, rolling.",
    surface: 'park',
    waypoints: [[51.463, -0.3013], ...RICHMOND_LAP, ...RICHMOND_LAP, [51.4506, -0.2967], [51.463, -0.3013]],
    messages: [
      { near: [51.4499, -0.2812], text: 'Richmond Park was enclosed as a deer park by Charles the First in 1637. Watch for deer crossing the road.' },
      { near: [51.4519, -0.2673], text: 'The park has a 20 mile an hour speed limit, and it applies to bikes too.' },
      { near: [51.4314, -0.271], text: 'Broomfield Hill, the steepest climb on the park circuit.' },
      { near: [51.4399, -0.2911], text: "Pembroke Lodge is on your left. From King Henry's Mound in its gardens there is a protected view of St Paul's Cathedral, about ten miles away." },
    ],
  },
  {
    id: 'lee-valley-velopark-loop',
    name: 'Lee Valley & Walthamstow Marshes',
    area: 'Hackney & Waltham Forest',
    description: 'Flat and mostly traffic-free: up the River Lee from the Olympic Park to Tottenham Hale, past the Walthamstow reservoirs and back over the marshes. About 15 km, with a few quiet streets near Tottenham Hale.',
    surface: 'mixed',
    waypoints: [[51.5494, -0.0157], [51.5623, -0.0457], [51.5705, -0.0555], [51.583, -0.058], [51.588, -0.0581], [51.5794, -0.0432], [51.5634, -0.0403], [51.5494, -0.0157]],
    messages: [
      { near: [51.5494, -0.0157], text: 'Lee Valley VeloPark, where you start, hosted the track cycling at the London 2012 Olympics.' },
      { near: [51.5794, -0.0432], text: 'The reservoirs beside Coppermill Lane are Walthamstow Wetlands, opened to the public as a nature reserve in 2017.' },
    ],
  },
  {
    id: 'havering-navestock-lanes',
    name: 'Navestock & Havering-atte-Bower',
    area: 'Havering',
    description: 'Out of Harold Wood onto the quiet Essex lanes around South Weald and Navestock, back over the ridge at Havering-atte-Bower. About 28 km, gently rolling.',
    surface: 'road',
    waypoints: [[51.5935, 0.2344], [51.6217, 0.2695], [51.6394, 0.2678], [51.6546, 0.2584], [51.656, 0.2089], [51.6192, 0.1824], [51.5935, 0.2344]],
    messages: [
      { near: [51.6546, 0.2584], text: "These are the Navestock lanes, over the border in Essex." },
      { near: [51.6192, 0.1824], text: 'Havering-atte-Bower is named after a royal palace that stood here from the Middle Ages.' },
    ],
  },
  {
    id: 'bromley-downe-cudham',
    name: 'Downe, Cudham & Knockholt',
    area: 'Bromley',
    description: 'South from Bromley onto the North Downs lanes past Downe and Cudham to Knockholt, back over Rushmore Hill and Keston. About 32 km with several short, steep climbs.',
    surface: 'road',
    waypoints: [[51.4, 0.0172], [51.385, 0.017], [51.361, 0.0291], [51.3471, 0.0435], [51.3314, 0.0534], [51.3164, 0.0748], [51.3337, 0.1161], [51.3444, 0.1111], [51.3521, 0.0563], [51.361, 0.0291], [51.4, 0.0172]],
    messages: [
      { near: [51.3314, 0.0534], text: "Down House, beside this road, was Charles Darwin's home for forty years. He wrote On the Origin of Species here." },
      { near: [51.3164, 0.0748], text: "Cudham. The lanes from here to Knockholt dip in and out of steep little valleys." },
    ],
  },
  {
    id: 'barnet-shenley-ridge',
    name: 'Ridge, Shenley & Elstree Lanes',
    area: 'Barnet',
    description: 'North from High Barnet onto the Hertfordshire lanes through Ridge, Shenley, Letchmore Heath and Elstree, back via Well End and Arkley. About 33 km, rolling, with short stretches of main road leaving and re-entering Barnet.',
    surface: 'road',
    waypoints: [[51.6505, -0.1943], [51.6674, -0.1988], [51.6813, -0.2157], [51.6897, -0.2408], [51.6923, -0.2813], [51.6886, -0.295], [51.6674, -0.3361], [51.654, -0.3155], [51.6438, -0.2989], [51.6684, -0.2557], [51.6456, -0.2363], [51.6505, -0.1943]],
    messages: [
      { near: [51.6674, -0.1988], text: 'The Battle of Barnet was fought just north of the town in 1471, during the Wars of the Roses.' },
      { near: [51.6438, -0.2989], text: 'Elstree sits on Watling Street, the Roman road north out of London.' },
    ],
  },
  {
    id: 'lee-towpath-tottenham-to-hertford',
    name: 'Lee Towpath to Hertford',
    area: 'Haringey',
    description: 'One way up the River Lee Navigation from Tottenham Hale to Hertford, nearly all on the towpath, with a short road section around Hoddesdon. About 36 km and flat; come back by train from Hertford East.',
    surface: 'mixed',
    waypoints: [[51.5885, -0.059], [51.5971, -0.0504], [51.6261, -0.0324], [51.6606, -0.0206], [51.6955, -0.0177], [51.7153, -0.0155], [51.743, -0.0125], [51.7637, 0.013], [51.7816, 0.0055], [51.8025, -0.0153], [51.8108, -0.0409], [51.8073, -0.0633], [51.8002, -0.075]],
    messages: [
      { near: [51.5971, -0.0504], text: 'Stonebridge Lock. The towpath runs north from here all the way to Hertford.' },
      { near: [51.8108, -0.0409], text: "You're riding through Ware. The gazebos along the river here were built in the 1700s." },
      { near: [51.8002, -0.075], text: 'Hertford, the county town of Hertfordshire. Hertford East station is a few minutes away.' },
    ],
  },
  {
    id: 'kingston-ranmore-headley',
    name: 'Kingston to Ranmore & Headley',
    area: 'Kingston upon Thames',
    description: "South-west London's classic run into the Surrey Hills: out through Claygate, Oxshott and Effingham, up to Ranmore Common, down to Westhumble, then Headley Lane and home over Epsom Downs. About 59 km, hilly in the middle.",
    surface: 'road',
    waypoints: [[51.4125, -0.3023], [51.3603, -0.3374], [51.3333, -0.3565], [51.293, -0.3562], [51.2704, -0.3994], [51.259, -0.3983], [51.241, -0.3837], [51.2447, -0.3562], [51.2552, -0.3429], [51.254, -0.3341], [51.2587, -0.3227], [51.2949, -0.2751], [51.299, -0.2785], [51.3025, -0.28], [51.3066, -0.2714], [51.35, -0.27], [51.4125, -0.3023]],
    messages: [
      { near: [51.2447, -0.3562], text: "St Barnabas' Church on Ranmore Common was built in 1859." },
      { near: [51.2587, -0.3227], text: 'Box Hill rises on your right, across the River Mole.' },
      { near: [51.3066, -0.2714], text: 'Epsom Downs racecourse, home of the Derby since 1780, is just ahead.' },
    ],
  },
  {
    id: 'bromley-toys-hill-ide-hill',
    name: 'Ide Hill, Hever & Toys Hill',
    area: 'Bromley',
    description: 'A long, hilly day in the Kent lanes: over the North Downs at Knockholt, up Ide Hill, down to Chiddingstone and Hever, back up Toys Hill and over Brasted Hill. About 69 km.',
    surface: 'road',
    waypoints: [[51.4, 0.0172], [51.385, 0.017], [51.361, 0.0291], [51.3471, 0.0435], [51.3314, 0.0534], [51.3164, 0.0748], [51.2929, 0.1193], [51.289, 0.1261], [51.2448, 0.1303], [51.2313, 0.1313], [51.1866, 0.1421], [51.186, 0.112], [51.205, 0.1], [51.2157, 0.0987], [51.225, 0.106], [51.2945, 0.1006], [51.3337, 0.1161], [51.3444, 0.1111], [51.3521, 0.0563], [51.361, 0.0291], [51.4, 0.0172]],
    messages: [
      { near: [51.3314, 0.0534], text: "Down House, beside this road, was Charles Darwin's home for forty years." },
      { near: [51.1866, 0.1421], text: "Much of Chiddingstone's Tudor village street is owned by the National Trust." },
      { near: [51.186, 0.112], text: 'Hever Castle, the childhood home of Anne Boleyn, is close by.' },
      { near: [51.225, 0.106], text: 'The climb of Toys Hill, up through the woods of the Greensand Ridge.' },
    ],
  },
  {
    id: 'enfield-hertford-lanes',
    name: 'Cuffley, Essendon & Hertford',
    area: 'Enfield',
    description: 'North from Enfield through Crews Hill and Cuffley to Essendon, along the Cole Green Way railway path into Hertford, and back through Bayford and Broxbourne Woods. About 53 km, rolling.',
    surface: 'mixed',
    waypoints: [[51.6536, -0.0905], [51.6711, -0.0838], [51.6784, -0.0967], [51.6871, -0.1158], [51.7138, -0.1143], [51.7258, -0.1099], [51.7393, -0.1252], [51.7623, -0.1537], [51.7813, -0.1389], [51.796, -0.078], [51.7864, -0.0864], [51.7596, -0.1022], [51.7445, -0.0966], [51.7102, -0.0868], [51.6714, -0.0602], [51.6536, -0.0905]],
    messages: [
      { near: [51.6784, -0.0967], text: 'Theobalds Park Road is named after Theobalds, the palace where King James the First died in 1625.' },
      { near: [51.7138, -0.1143], text: 'In 1916 the German airship SL 11 was shot down over Cuffley, the first to be brought down on British soil.' },
      { near: [51.7813, -0.1389], text: 'The Cole Green Way follows the old railway line between Hertford and Welwyn.' },
      { near: [51.796, -0.078], text: 'Hertford, the county town of Hertfordshire.' },
    ],
  },
];
