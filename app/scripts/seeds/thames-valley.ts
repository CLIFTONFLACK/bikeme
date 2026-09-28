// Cycling routes in the Thames Valley (Berkshire, Buckinghamshire and Oxfordshire): railway paths
// and riverside trails, quiet Chiltern and downland lanes, and the long classic hill loops.
//
// Ids are linked from city guides and saved rides: never rename one once it has been published.
import type { Seed } from './types.ts';

export const SEEDS: Seed[] = [
  // Short and family rides
  {
    id: 'phoenix-trail-thame',
    name: 'Phoenix Trail Loop',
    area: 'Thame, Oxfordshire',
    description: 'Out along the traffic-free Phoenix Trail from Thame to the edge of Princes Risborough, returning under the Chiltern escarpment via Henton and Towersey. Flat; the return is on B-roads and lanes.',
    surface: 'mixed',
    waypoints: [
      [51.7483, -0.9782], [51.7423, -0.9798], [51.7385, -0.9486], [51.7365, -0.9332], [51.7343, -0.9162],
      [51.7278, -0.877], [51.7164, -0.8975], [51.7408, -0.9365], [51.7483, -0.9782],
    ],
    messages: [
      { near: [51.7385, -0.9486], text: 'The Phoenix Trail runs along the bed of the old railway between Princes Risborough and Oxford.' },
    ],
  },
  {
    id: 'jubilee-river-dorney',
    name: 'Jubilee River and Dorney',
    area: 'Taplow, Buckinghamshire',
    description: 'From Taplow along the traffic-free Jubilee River path to Eton, then back through Eton Wick and Dorney on quiet roads. Flat throughout.',
    surface: 'mixed',
    waypoints: [
      [51.5233, -0.6819], [51.5215, -0.6929], [51.5062, -0.6719], [51.5031, -0.6422], [51.5017, -0.6175],
      [51.5007, -0.6103], [51.4935, -0.6075], [51.5029, -0.6607], [51.5233, -0.6819],
    ],
    messages: [
      { near: [51.5143, -0.6836], text: 'The Jubilee River is a flood relief channel, opened in 2002 to carry floodwater around Maidenhead, Windsor and Eton.' },
      { near: [51.4935, -0.6075], text: 'Eton College was founded by King Henry the Sixth in 1440.' },
      { near: [51.5029, -0.6607], text: 'Dorney Lake, just south of here, hosted the rowing at the London 2012 Olympics.' },
    ],
  },
  {
    id: 'oxford-abingdon-boars-hill',
    name: 'Oxford, Abingdon and Boars Hill',
    area: 'Oxford, Oxfordshire',
    description: 'South from Oxford through Kennington and Radley to Abingdon, then back over Boars Hill for the view of the city and into town on the Hinksey cycle paths. One proper climb.',
    surface: 'mixed',
    waypoints: [
      [51.749, -1.257], [51.7165, -1.2452], [51.6715, -1.278], [51.7011, -1.284], [51.7455, -1.2846],
      [51.749, -1.257],
    ],
    messages: [
      { near: [51.6715, -1.278], text: 'Abingdon claims to be the oldest continuously inhabited town in England.' },
      { near: [51.7183, -1.2774], text: 'Matthew Arnold’s phrase “that sweet city with her dreaming spires” describes the view of Oxford from these hills.' },
    ],
  },

  // Medium rides
  {
    id: 'marlow-hambleden-turville',
    name: 'Marlow, Turville and the Hambleden Valley',
    area: 'Marlow, Buckinghamshire',
    description: 'A Chiltern lanes loop from Marlow through Lane End and Frieth, up towards Ibstone, down to Turville and back along the Hambleden valley. Short, steep climbs and flint villages.',
    surface: 'road',
    waypoints: [
      [51.5719, -0.777], [51.6035, -0.8047], [51.6141, -0.8387], [51.6125, -0.8547], [51.6155, -0.8688],
      [51.6183, -0.8925], [51.6221, -0.9065], [51.6143, -0.894], [51.6075, -0.8815], [51.5973, -0.8811],
      [51.5801, -0.8745], [51.5725, -0.871], [51.581, -0.8697], [51.5853, -0.8482], [51.5819, -0.8497],
      [51.5756, -0.8421], [51.5699, -0.8306], [51.577, -0.8076], [51.5745, -0.785], [51.5719, -0.777],
    ],
    messages: [
      { near: [51.6138, -0.893], text: 'Cobstone Windmill, on the hill above Turville, appeared in the film Chitty Chitty Bang Bang.' },
      { near: [51.5719, -0.777], text: 'Marlow’s suspension bridge was designed by William Tierney Clark, who went on to build the Chain Bridge in Budapest.' },
    ],
  },
  {
    id: 'walbury-hill-inkpen',
    name: 'Walbury Hill from Hungerford',
    area: 'Hungerford, Berkshire',
    description: 'From Hungerford through Kintbury and Inkpen, then the steep climb over Walbury Hill, down to Combe and round through Vernham Dean, Shalbourne and Ham. Quiet, hilly lanes on the Berkshire–Hampshire border.',
    surface: 'road',
    waypoints: [
      [51.4147, -1.5114], [51.4104, -1.4958], [51.3998, -1.457], [51.3966, -1.4489], [51.3823, -1.4575],
      [51.3753, -1.4664], [51.3673, -1.4717], [51.3555, -1.4703], [51.3445, -1.4718], [51.314, -1.4793],
      [51.3073, -1.5159], [51.3203, -1.5426], [51.3369, -1.5615], [51.3549, -1.5445], [51.3683, -1.5349],
      [51.3679, -1.4951], [51.3849, -1.4933], [51.4007, -1.5033], [51.4147, -1.5114],
    ],
    messages: [
      { near: [51.3555, -1.4703], text: 'Walbury Hill, at 297 metres, is the highest point in South East England.' },
      { near: [51.3445, -1.4718], text: 'Along the ridge behind you stands Combe Gibbet, a replica of a gibbet first put up there in 1676.' },
    ],
  },
  {
    id: 'goring-gap-streatley-hill',
    name: 'Goring Gap and Streatley Hill',
    area: 'Goring-on-Thames, Oxfordshire',
    description: 'Across the Thames to Streatley and straight up Streatley Hill onto the Berkshire Downs, along quiet lanes past Aldworth, down Pangbourne Hill, then back through Whitchurch-on-Thames and the Chiltern woods above Goring.',
    surface: 'road',
    waypoints: [
      [51.5215, -1.1311], [51.5174, -1.1712], [51.478, -1.1674], [51.4603, -1.143], [51.4591, -1.1249],
      [51.4738, -1.1036], [51.4823, -1.0894], [51.4894, -1.0862], [51.4942, -1.0728], [51.5041, -1.0615],
      [51.5059, -1.0495], [51.5216, -1.0949], [51.5215, -1.1311],
    ],
    messages: [
      { near: [51.5227, -1.1467], text: 'The Goring Gap is where the Thames cuts between the Chiltern Hills and the Berkshire Downs.' },
      { near: [51.511, -1.2026], text: 'Aldworth church is known for the Aldworth Giants, a set of large medieval stone effigies.' },
      { near: [51.484, -1.0864], text: 'Kenneth Grahame, author of The Wind in the Willows, spent his last years in Pangbourne.' },
    ],
  },
  {
    id: 'oxford-woodstock-blenheim',
    name: 'Oxford to Woodstock and Islip',
    area: 'Oxford, Oxfordshire',
    description: 'North out of Oxford through Cassington to Bladon and Woodstock beside Blenheim Palace, then across to the Cherwell and back through Bletchingdon and Islip. Short busier sections through Bladon and Woodstock.',
    surface: 'road',
    waypoints: [
      [51.752, -1.2578], [51.7934, -1.3433], [51.8475, -1.3545], [51.8746, -1.3228], [51.8716, -1.3094],
      [51.8551, -1.2719], [51.8232, -1.2364], [51.752, -1.2578],
    ],
    messages: [
      { near: [51.8318, -1.3508], text: 'Winston Churchill, born at Blenheim Palace in 1874, is buried in the churchyard at Bladon.' },
      { near: [51.8232, -1.2364], text: 'Islip is the birthplace of King Edward the Confessor.' },
    ],
  },

  // Long rides
  {
    id: 'chilterns-christmas-common',
    name: 'Christmas Common and Chinnor Hill',
    area: 'Henley-on-Thames, Oxfordshire',
    description: 'The Chiltern escarpment in one loop from Henley: up the Stonor valley to Christmas Common, down Watlington Hill, along the foot of the hills to Chinnor, then up Chinnor Hill to Radnage, through Stokenchurch and back past Ibstone and Turville Heath. Plenty of steep climbing, and a short main-road stretch through Stokenchurch.',
    surface: 'road',
    waypoints: [
      [51.5376, -0.905], [51.5748, -0.9396], [51.6062, -0.968], [51.6209, -0.9749], [51.6389, -0.9868],
      [51.662, -0.9868], [51.6733, -0.9583], [51.6937, -0.8995], [51.6809, -0.8672], [51.6693, -0.8641],
      [51.6634, -0.8695], [51.6579, -0.8787], [51.6604, -0.901], [51.6574, -0.9157], [51.6206, -0.9065],
      [51.6143, -0.894], [51.6075, -0.9059], [51.6107, -0.9139], [51.6017, -0.934], [51.5855, -0.9415],
      [51.5376, -0.905],
    ],
    messages: [
      { near: [51.5376, -0.905], text: 'Henley Royal Regatta has been held on this stretch of the Thames since 1839.' },
      { near: [51.5914, -0.9387], text: 'Red kites, now common over these hills, were reintroduced to the Chilterns between 1989 and 1994.' },
      { near: [51.6452, -1.0043], text: 'The chalk triangle on Watlington Hill, the White Mark, was cut in 1764.' },
    ],
  },
  {
    id: 'lambourn-downs-white-horse',
    name: 'Lambourn Downs and the White Horse',
    area: 'Wantage, Oxfordshire',
    description: 'A big Berkshire Downs loop from Wantage: over the downs to Farnborough and Chaddleworth, along the Lambourn valley, then back along the foot of the Ridgeway escarpment past the Uffington White Horse. Open and rolling, with a short main-road stretch at Great Shefford.',
    surface: 'road',
    waypoints: [
      [51.5878, -1.4249], [51.5668, -1.4083], [51.5309, -1.3879], [51.5173, -1.3884], [51.5105, -1.3999],
      [51.509, -1.409], [51.5019, -1.4115], [51.4944, -1.4138], [51.4891, -1.4285], [51.4773, -1.4427],
      [51.4756, -1.4526], [51.4801, -1.4677], [51.4867, -1.4736], [51.4905, -1.4956], [51.4991, -1.5154],
      [51.5061, -1.5268], [51.5148, -1.5396], [51.5229, -1.5535], [51.5226, -1.5762], [51.5499, -1.5962],
      [51.5671, -1.6146], [51.5811, -1.5888], [51.5898, -1.5748], [51.5995, -1.5669], [51.6021, -1.5636],
      [51.6025, -1.5563], [51.5932, -1.5414], [51.5842, -1.5333], [51.5827, -1.5172], [51.5842, -1.5039],
      [51.5874, -1.4938], [51.5868, -1.483], [51.5822, -1.4805], [51.582, -1.4753], [51.5864, -1.4425],
      [51.5878, -1.4249],
    ],
    messages: [
      { near: [51.5878, -1.4249], text: 'King Alfred the Great was born in Wantage in 849; his statue stands in the market place.' },
      { near: [51.5083, -1.5309], text: 'Lambourn is one of Britain’s main centres for training racehorses.' },
      { near: [51.5887, -1.5777], text: 'The Uffington White Horse, on the hill above, is around three thousand years old.' },
    ],
  },
  {
    id: 'whiteleaf-wendover-chilterns',
    name: 'Whiteleaf, Aston Hill and Wendover',
    area: 'Princes Risborough, Buckinghamshire',
    description: 'From Princes Risborough up the Whiteleaf climb to Great Hampden, across the Chiltern plateau through Great Missenden, The Lee, Chartridge and Cholesbury, down Aston Hill to the Vale of Aylesbury, and back through Halton, Wendover and past Chequers.',
    surface: 'road',
    waypoints: [
      [51.718, -0.8441], [51.7238, -0.8373], [51.7277, -0.8148], [51.7214, -0.8029], [51.7075, -0.785],
      [51.7101, -0.7712], [51.7138, -0.7514], [51.7118, -0.7329], [51.7076, -0.7146], [51.7044, -0.7081],
      [51.7076, -0.6903], [51.7144, -0.6945], [51.7269, -0.6984], [51.7318, -0.7013], [51.7382, -0.6965],
      [51.7369, -0.6881], [51.7335, -0.6702], [51.7177, -0.6326], [51.7167, -0.6244], [51.7231, -0.6318],
      [51.7357, -0.6489], [51.7546, -0.658], [51.7549, -0.6758], [51.7724, -0.703], [51.7898, -0.7137],
      [51.7991, -0.7403], [51.7858, -0.7385], [51.7823, -0.7349], [51.777, -0.7284], [51.7668, -0.7348],
      [51.7589, -0.7586], [51.756, -0.7774], [51.7447, -0.7769], [51.7338, -0.7957], [51.718, -0.8441],
    ],
    messages: [
      { near: [51.7317, -0.8151], text: 'The Whiteleaf Cross is cut into the chalk above you; nobody knows for certain when or why.' },
      { near: [51.7047, -0.7087], text: 'Roald Dahl lived in Great Missenden for over thirty years.' },
      { near: [51.7447, -0.7769], text: 'You are passing the Chequers estate, the Prime Minister’s country residence.' },
    ],
  },
];
