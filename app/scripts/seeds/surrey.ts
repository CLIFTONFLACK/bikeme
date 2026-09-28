// Surrey (the county outside Greater London). Ids here are linked from city guides and saved rides,
// so don't rename them once published.
//
// No route here uses the Zig Zag Road on Box Hill: its lower hairpin reads as a U-turn to the route
// builder's check, so Box Hill is ridden by Headley Lane and Pebblehill Road instead.
import type { Seed } from './types.ts';

export const SEEDS: Seed[] = [
  {
    id: 'ripley-wisley-pyrford',
    name: 'Ripley, Wisley & Pyrford',
    area: 'Ripley, Surrey',
    description: 'A flat, easy loop on quiet lanes from Ripley through Ockham and Wisley, across the Wey Navigation at Pyrford Lock and back through Pyrford. About 16 km.',
    surface: 'road',
    waypoints: [[51.2995, -0.49], [51.3024, -0.4501], [51.3099, -0.4452], [51.3117, -0.456], [51.3162, -0.4983], [51.3126, -0.5052], [51.3005, -0.4989], [51.2995, -0.49]],
    messages: [
      { near: [51.2995, -0.49], text: "In the 1880s and 1890s Ripley was the favourite destination of London's cycling clubs, who rode out along the Portsmouth Road." },
      { near: [51.3175, -0.47], text: "RHS Garden Wisley, the Royal Horticultural Society's flagship garden, is off this lane." },
      { near: [51.3221, -0.4892], text: 'Pyrford Lock, on the River Wey Navigation, which opened in 1653.' },
    ],
  },
  {
    id: 'basingstoke-canal-woking-ash-vale',
    name: 'Basingstoke Canal: Woking to Ash Vale',
    area: 'Woking, Surrey',
    description: 'One way along the Basingstoke Canal towpath from Woking to Ash Vale station, leaving the towpath for road links around Pirbright and Deepcut. About 18 km and flat; come back by train.',
    surface: 'mixed',
    waypoints: [[51.32, -0.557], [51.3124, -0.5963], [51.3065, -0.6072], [51.3081, -0.6222], [51.3026, -0.6584], [51.2999, -0.6857], [51.3004, -0.692], [51.2922, -0.7207], [51.2787, -0.7233], [51.2725, -0.7215]],
    messages: [
      { near: [51.3124, -0.5963], text: 'The Basingstoke Canal was completed in 1794.' },
      { near: [51.2999, -0.6857], text: 'The Deepcut flight of fourteen locks lifts the canal through the woods here.' },
    ],
  },
  {
    id: 'reigate-leigh-brockham',
    name: 'Reigate Heath, Leigh & Brockham',
    area: 'Reigate, Surrey',
    description: 'Flat, quiet Wealden lanes south-west of Reigate: out to Leigh, Brockham and Betchworth, back past Reigate Heath. About 20 km.',
    surface: 'road',
    waypoints: [[51.242, -0.204], [51.2368, -0.2113], [51.2255, -0.2193], [51.2159, -0.238], [51.2086, -0.2694], [51.2186, -0.2818], [51.2339, -0.2885], [51.2393, -0.2733], [51.2346, -0.2673], [51.2351, -0.259], [51.2298, -0.2387], [51.2305, -0.2377], [51.2365, -0.2294], [51.2394, -0.2146], [51.242, -0.204]],
    messages: [
      { near: [51.2339, -0.2885], text: 'Brockham, with Box Hill rising to the north.' },
      { near: [51.2365, -0.2294], text: 'The windmill on Reigate Heath, just north of here, has been used as a church since 1880.' },
    ],
  },
  {
    id: 'coldharbour-leith-hill-loop',
    name: 'Coldharbour & Leith Hill',
    area: 'Dorking, Surrey',
    description: 'Up Coldharbour Lane from Dorking to Leith Hill, west to Holmbury St Mary, round by Forest Green and Ockley and back through Coldharbour. About 34 km with two long climbs.',
    surface: 'road',
    waypoints: [[51.241, -0.324], [51.2054, -0.3484], [51.1857, -0.3498], [51.1734, -0.3744], [51.1899, -0.4029], [51.1845, -0.408], [51.1885, -0.4124], [51.1652, -0.3948], [51.1581, -0.3666], [51.1539, -0.3622], [51.1603, -0.3529], [51.1805, -0.3579], [51.2054, -0.3484], [51.2316, -0.3327], [51.241, -0.324]],
    messages: [
      { near: [51.2054, -0.3484], text: 'Coldharbour Lane climbs for about five kilometres from Dorking to Coldharbour village.' },
      { near: [51.1734, -0.3744], text: 'Leith Hill Tower, built in 1765, stands in the woods just above this road.' },
      { near: [51.1539, -0.3622], text: 'Ockley sits on Stane Street, the Roman road from London to Chichester.' },
    ],
  },
  {
    id: 'pitch-hill-holmbury-loop',
    name: 'Holmbury & Pitch Hill',
    area: 'Shere, Surrey',
    description: 'From Shere through Peaslake to Holmbury St Mary, south to Ewhurst, then up Pitch Hill and back across Winterfold and Farley Green. About 27 km, hilly.',
    surface: 'road',
    waypoints: [[51.2205, -0.4645], [51.2082, -0.4519], [51.1989, -0.4394], [51.2034, -0.4264], [51.19, -0.413], [51.1718, -0.4066], [51.1602, -0.4118], [51.1564, -0.4427], [51.1655, -0.4479], [51.1749, -0.4571], [51.1745, -0.4873], [51.1936, -0.4819], [51.2058, -0.4837], [51.2205, -0.4645]],
    messages: [
      { near: [51.19, -0.413], text: 'Holmbury Hill, above the village, is topped by an Iron Age hill fort.' },
      { near: [51.1655, -0.4479], text: 'The Pitch Hill climb starts here, up past Ewhurst windmill.' },
    ],
  },
  {
    id: 'farnham-tilford-elstead',
    name: 'Tilford, Elstead & Crooksbury',
    area: 'Farnham, Surrey',
    description: 'Heath and river country south of Farnham: Tilford, Rushmoor and Elstead, then back over Crooksbury and past Moor Park. About 27 km, gently rolling.',
    surface: 'road',
    waypoints: [[51.2115, -0.7925], [51.1908, -0.7663], [51.1841, -0.754], [51.1704, -0.7489], [51.1475, -0.7527], [51.1517, -0.7237], [51.1854, -0.7038], [51.2015, -0.7184], [51.2072, -0.7258], [51.2138, -0.7457], [51.2091, -0.7496], [51.2103, -0.7611], [51.2127, -0.775], [51.2113, -0.7853], [51.2115, -0.7925]],
    messages: [
      { near: [51.1841, -0.754], text: "Tilford's two stone bridges over the River Wey are thought to date from the 13th century." },
      { near: [51.2103, -0.7611], text: 'The ruins of Waverley Abbey, founded in 1128 as the first Cistercian abbey in England, are a short way south of here.' },
    ],
  },
  {
    id: 'horsley-shere-ranmore',
    name: 'Horsley, Shere & Ranmore',
    area: 'East Horsley, Surrey',
    description: 'Over the North Downs by Shere Road and Combe Lane to Shere, along the Tillingbourne valley, up Whitedown Lane to Ranmore and back via Effingham. About 27 km with two climbs, and about 1.5 km on the A25 between Gomshall and Whitedown Lane.',
    surface: 'road',
    waypoints: [[51.2793, -0.435], [51.2834, -0.4399], [51.2756, -0.4503], [51.2699, -0.4541], [51.2539, -0.4486], [51.2449, -0.4469], [51.237, -0.4534], [51.2323, -0.4675], [51.223, -0.4717], [51.2148, -0.4274], [51.2232, -0.4084], [51.229, -0.4055], [51.2463, -0.403], [51.2561, -0.4], [51.2704, -0.3994], [51.2833, -0.4093], [51.2879, -0.4248], [51.2793, -0.435]],
    messages: [
      { near: [51.2323, -0.4675], text: 'Combe Lane drops off the North Downs into Shere.' },
      { near: [51.2232, -0.4084], text: 'Whitedown Lane: nearly three kilometres of climbing to Ranmore Common.' },
    ],
  },
  {
    id: 'surrey-hills-classic',
    name: 'Surrey Hills Classic',
    area: 'Dorking, Surrey',
    description: 'The big Surrey Hills day from Dorking: Coldharbour Lane to Leith Hill, Holmbury, Pitch Hill, Winterfold and Shere, up Whitedown to Ranmore, then Headley Lane and down Pebblehill Road off the back of Box Hill. About 67 km with several long climbs.',
    surface: 'road',
    waypoints: [[51.241, -0.324], [51.2054, -0.3484], [51.1857, -0.3498], [51.1734, -0.3744], [51.1899, -0.4029], [51.1845, -0.408], [51.1885, -0.4124], [51.1718, -0.4066], [51.1602, -0.4118], [51.1564, -0.4427], [51.1655, -0.4479], [51.1719, -0.4572], [51.1749, -0.4571], [51.1745, -0.4873], [51.1936, -0.4819], [51.2058, -0.4837], [51.2205, -0.4645], [51.2148, -0.4274], [51.2232, -0.4084], [51.229, -0.4055], [51.2368, -0.4049], [51.2384, -0.399], [51.2415, -0.3675], [51.2552, -0.3429], [51.254, -0.3341], [51.2606, -0.3221], [51.2637, -0.264], [51.251, -0.2674], [51.2329, -0.2875], [51.2245, -0.2895], [51.2189, -0.301], [51.2245, -0.3127], [51.241, -0.324]],
    messages: [
      { near: [51.1734, -0.3744], text: 'Leith Hill Tower, built in 1765, stands in the woods just above this road.' },
      { near: [51.1885, -0.4124], text: 'Holmbury Hill, above the village, is topped by an Iron Age hill fort.' },
      { near: [51.2447, -0.3562], text: "St Barnabas' Church on Ranmore Common was built in 1859." },
      { near: [51.2637, -0.264], text: 'Box Hill, just west of here, was the climb of the London 2012 Olympic road races.' },
    ],
  },
  {
    id: 'oxted-titsey-botley-hill',
    name: 'Titsey Hill, Woldingham & Lingfield',
    area: 'Oxted, Surrey',
    description: 'Up Titsey Hill onto the North Downs, round Tatsfield, Warlingham and Woldingham, down Gangers Hill and south through Crowhurst to Lingfield and Dormansland, back over the Kent border at Marsh Green. About 54 km.',
    surface: 'road',
    waypoints: [[51.2575, -0.004], [51.2675, 0.0149], [51.2819, 0.0087], [51.2955, 0.026], [51.2931, -0.0133], [51.3057, -0.0385], [51.3033, -0.0532], [51.2948, -0.0527], [51.2899, -0.0417], [51.2732, -0.0325], [51.2657, -0.0384], [51.1771, -0.0139], [51.1594, 0.0055], [51.1673, 0.0096], [51.1763, 0.0501], [51.1958, 0.062], [51.2102, 0.0401], [51.2428, 0.0165], [51.2575, -0.004]],
    messages: [
      { near: [51.2675, 0.0149], text: 'Titsey Hill climbs the North Downs escarpment towards Botley Hill.' },
      { near: [51.1771, -0.0139], text: 'Lingfield. Racecourse Road leads past Lingfield Park racecourse.' },
      { near: [51.1958, 0.062], text: "You're in Kent here, on the edge of Edenbridge." },
    ],
  },
  {
    id: 'godalming-chiddingfold-hascombe',
    name: 'Wonersh, Chiddingfold & Hascombe',
    area: 'Godalming, Surrey',
    description: 'Rolling Surrey Weald lanes from Godalming: Wonersh, Blackheath and Shamley Green, south to Dunsfold and Chiddingfold, and home over Hascombe. About 53 km, with short A-road sections in Godalming, at Bramley and near Chiddingfold.',
    surface: 'road',
    waypoints: [[51.1868, -0.6164], [51.1856, -0.6034], [51.1914, -0.5976], [51.2018, -0.5881], [51.1994, -0.5798], [51.1953, -0.5577], [51.198, -0.5514], [51.2045, -0.527], [51.1964, -0.5173], [51.1848, -0.5202], [51.1654, -0.5115], [51.139, -0.5283], [51.129, -0.5544], [51.1145, -0.5628], [51.0961, -0.5809], [51.0879, -0.5884], [51.0993, -0.6145], [51.1106, -0.6266], [51.1127, -0.6362], [51.143, -0.638], [51.1554, -0.5752], [51.1752, -0.5983], [51.1868, -0.6164]],
    messages: [
      { near: [51.1856, -0.6034], text: 'In 1881 Godalming became the first town in the world with a public electricity supply.' },
      { near: [51.1106, -0.6266], text: 'Chiddingfold was a centre of English glassmaking in the Middle Ages.' },
      { near: [51.1554, -0.5752], text: 'Hascombe Hill, above the village, has the remains of an Iron Age hill fort.' },
    ],
  },
];
