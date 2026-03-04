// ============================================================
//  AD GEOGUESSR LEAGUE — DATA FILE
//  Update this file after each game. The site reads from here.
// ============================================================

// ── PLAYER INFO ─────────────────────────────────────────────
// Don't change this unless someone joins or leaves.
const PLAYERS = {
  'Geogan':          { real: 'Logan',   cls: 'geogan', init: 'G' },
  'pintyfresh':      { real: 'Owen',    cls: 'pinty',  init: 'P' },
  'Dewman9900':      { real: 'Dave',    cls: 'dewman', init: 'D' },
  'ABall-87':        { real: 'Adam',    cls: 'aball',  init: 'A' },
  'MVG':             { real: 'Mark',    cls: 'mvg',    init: 'M' },
  '$GMoney$':        { real: 'Garrett', cls: 'gmoney', init: '$' },
  'FattySombreros':  { real: 'Harbert', cls: 'fatty',  init: 'F' },
  'The Shibboleth':  { real: 'Rollins', cls: 'shibbo', init: 'S' },
};

// ── HERO STATS ───────────────────────────────────────────────
// Update these manually each month or let them auto-calculate below.
const HERO_STATS = {
  players: 8,
  gamesPlayed: 40,   // update each game
  perfectRounds: 3,  // update when a new 5000 happens
  topScore: 24079,   // update if a new record is set
};

// ── MONTHLY STANDINGS ────────────────────────────────────────
// Update after EVERY game.
// score         = net points (1st=+3, 2nd=+2, 3rd=+1, last=-2, else=0)
// scorePerApp   = score / apps
// madden        = Madden Rating (0-100), or null if not tracked
// ptsPerApp     = average GeoGuessr points per appearance
// apps          = number of games played this month
// strokes       = golf-style stroke count (lower is better)
// index         = golf index
// monthTotal    = total GeoGuessr points this month

const MARCH_PLAYERS = [
  { name:'Geogan',         score:5,  scorePerApp:2.5,   madden:82.3, ptsPerApp:18250,   apps:2, strokes:145.875, index:4562.5,   monthTotal:36500 },
  { name:'Dewman9900',     score:4,  scorePerApp:2,     madden:76.4, ptsPerApp:17685.5, apps:2, strokes:286.875, index:4421.375, monthTotal:35371 },
  { name:'pintyfresh',     score:4,  scorePerApp:2,     madden:88.2, ptsPerApp:18833,   apps:2, strokes:0,       index:4708.25,  monthTotal:37666 },
  { name:'ABall-87',       score:1,  scorePerApp:0.5,   madden:69.3, ptsPerApp:16972.5, apps:2, strokes:465.125, index:4243.125, monthTotal:33945 },
  { name:'MVG',            score:0,  scorePerApp:0,     madden:23.7, ptsPerApp:10490,   apps:1, strokes:3397,    index:1311.25,  monthTotal:10490  },
  { name:'$GMoney$',       score:0,  scorePerApp:0,     madden:29.6, ptsPerApp:11074,   apps:1, strokes:3324,    index:1384.25,  monthTotal:11074  },
  { name:'FattySombreros', score:0,  scorePerApp:0,     madden:42.0, ptsPerApp:12291,   apps:1, strokes:3171.875,index:1536.375, monthTotal:12291  },
  { name:'The Shibboleth', score:-2, scorePerApp:-1,    madden:0,    ptsPerApp:10171.5, apps:2, strokes:2165.375,index:2542.875, monthTotal:20343  },
];

const FEBRUARY_PLAYERS = [
  { name:'Geogan',         score:48, scorePerApp:2.82,  madden:87.1, ptsPerApp:18927.6, apps:17, strokes:0,        index:21387.25,  monthTotal:321769 },
  { name:'pintyfresh',     score:32, scorePerApp:1.68,  madden:63.4, ptsPerApp:16497.5, apps:19, strokes:2032.625, index:19354.625, monthTotal:313453 },
  { name:'MVG',            score:16, scorePerApp:1.23,  madden:66.8, ptsPerApp:17336.2, apps:13, strokes:1583.25,  index:19804,     monthTotal:225371 },
  { name:'Dewman9900',     score:12, scorePerApp:0.67,  madden:45.4, ptsPerApp:15059.6, apps:18, strokes:2528.625, index:18858.625, monthTotal:271072 },
  { name:'$GMoney$',       score:4,  scorePerApp:0.25,  madden:29.7, ptsPerApp:13873.4, apps:16, strokes:4741.375, index:16645.875, monthTotal:221975 },
  { name:'ABall-87',       score:3,  scorePerApp:0.16,  madden:30.8, ptsPerApp:13951.2, apps:19, strokes:3534.125, index:17853.125, monthTotal:265073 },
  { name:'The Shibboleth', score:1,  scorePerApp:0.06,  madden:30.5, ptsPerApp:13710,   apps:18, strokes:3968.125, index:17419.125, monthTotal:246780 },
  { name:'FattySombreros', score:-2, scorePerApp:-0.17, madden:16.3, ptsPerApp:12354.25,apps:12, strokes:7660.75,  index:13726.5,   monthTotal:148251 },
];

const JANUARY_PLAYERS = [
  { name:'Geogan',         score:41, scorePerApp:2.73,  madden:null, ptsPerApp:19130, apps:15, strokes:0,        index:21443.875, monthTotal:286977 },
  { name:'pintyfresh',     score:27, scorePerApp:1.5,   madden:null, ptsPerApp:16900, apps:18, strokes:977.5,    index:20466.375, monthTotal:304116 },
  { name:'ABall-87',       score:20, scorePerApp:1.11,  madden:null, ptsPerApp:16190, apps:18, strokes:1301,     index:20142.875, monthTotal:291472 },
  { name:'Dewman9900',     score:15, scorePerApp:1.15,  madden:null, ptsPerApp:15990, apps:13, strokes:2968.625, index:18475.25,  monthTotal:207918 },
  { name:'$GMoney$',       score:7,  scorePerApp:0.44,  madden:null, ptsPerApp:13250, apps:16, strokes:4981.75,  index:16462.125, monthTotal:211970 },
  { name:'MVG',            score:3,  scorePerApp:0.33,  madden:null, ptsPerApp:14940, apps:9,  strokes:5886.25,  index:15557.625, monthTotal:134490 },
  { name:'The Shibboleth', score:3,  scorePerApp:0.19,  madden:null, ptsPerApp:14640, apps:16, strokes:3267.25,  index:18176.625, monthTotal:234244 },
  { name:'FattySombreros', score:-2, scorePerApp:-0.12, madden:null, ptsPerApp:13440, apps:17, strokes:4581.625, index:16862.25,  monthTotal:228421 },
];

// ── ALL-TIME STANDINGS ───────────────────────────────────────
// Update total and current month column after each game.
const ALLTIME = [
  { name:'Geogan',         total:94, jan:41, feb:48, mar:5  },
  { name:'pintyfresh',     total:63, jan:27, feb:32, mar:4  },
  { name:'Dewman9900',     total:31, jan:15, feb:12, mar:4  },
  { name:'ABall-87',       total:24, jan:20, feb:3,  mar:1  },
  { name:'MVG',            total:19, jan:3,  feb:16, mar:0  },
  { name:'$GMoney$',       total:11, jan:7,  feb:4,  mar:0  },
  { name:'The Shibboleth', total:2,  jan:3,  feb:1,  mar:-2 },
  { name:'FattySombreros', total:-4, jan:-2, feb:-2, mar:0  },
];

// ── HIGH / LOW SCORES ────────────────────────────────────────
// Add a new entry if someone beats a top-10 record.
const HIGH_SCORES = [
  { place:1,  date:'Sep 8 2025',  player:'pintyfresh',     score:24336 },
  { place:2,  date:'Dec 31 2025', player:'Dewman9900',     score:24089 },
  { place:3,  date:'Jan 13 2026', player:'Geogan',         score:24079 },
  { place:4,  date:'Feb 19 2026', player:'Geogan',         score:23998 },
  { place:5,  date:'Feb 19 2026', player:'MVG',            score:23955 },
  { place:6,  date:'Feb 2 2026',  player:'ABall-87',       score:23500 },
  { place:7,  date:'Jan 15 2026', player:'pintyfresh',     score:23421 },
  { place:8,  date:'Feb 19 2026', player:'The Shibboleth', score:23270 },
  { place:9,  date:'Jan 5 2026',  player:'ABall-87',       score:22908 },
  { place:10, date:'Jan 8 2026',  player:'pintyfresh',     score:22555 },
];

const LOW_SCORES = [
  { place:1,  date:'Jan 9 2026',  player:'FattySombreros', score:2892 },
  { place:2,  date:'Feb 25 2026', player:'The Shibboleth', score:4435 },
  { place:3,  date:'Jan 12 2026', player:'The Shibboleth', score:5667 },
  { place:4,  date:'Feb 25 2026', player:'$GMoney$',       score:6182 },
  { place:5,  date:'Feb 25 2026', player:'ABall-87',       score:6263 },
  { place:6,  date:'Feb 12 2026', player:'Dewman9900',     score:6664 },
  { place:7,  date:'Jan 9 2026',  player:'$GMoney$',       score:6793 },
  { place:8,  date:'Jan 30 2026', player:'$GMoney$',       score:6856 },
  { place:9,  date:'Feb 25 2026', player:'FattySombreros', score:7025 },
  { place:10, date:'Feb 25 2026', player:'Dewman9900',     score:7105 },
];

// ── PERFECT ROUNDS ───────────────────────────────────────────
// Add a new entry whenever someone scores 5000.
const PERFECT_ROUNDS = [
  {
    players:  'Dewman9900',
    score:    5000,
    location: 'Canton, Ohio, USA',
    date:     'Jan 12 2026',
    link:     'https://www.google.com/maps/@40.7950743,-81.3765981,3a,90y,90t/data=!3m7!1e1!3m5!1sblkfxLR7sFjsWDyDTNSwWg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DblkfxLR7sFjsWDyDTNSwWg%26yaw%3D0!7i16384!8i8192?entry=ttu',
  },
  {
    players:  'Geogan',
    score:    5000,
    location: 'Dromcollier, Ireland',
    date:     'Jan 30 2026',
    link:     'https://www.google.com/maps/@52.3395875,-8.9077054,3a,90y,140.15h,94.62t/data=!3m7!1e1!3m5!1s9Yy9CUO36GMjxhehYE-q1A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-4.622173681681929%26panoid%3D9Yy9CUO36GMjxhehYE-q1A%26yaw%3D140.1476504586654!7i16384!8i8192?entry=ttu',
  },
  {
    players:  'Dewman9900 · Geogan · pintyfresh',
    score:    5000,
    location: 'Monaco',
    date:     'Mar 3 2026',
    link:     'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=43.72970962524414%2C7.420361518859863&heading=0&pitch=0&fov=180',
  },
];

// ── GAME LOG ─────────────────────────────────────────────────
// ADD NEW GAMES AT THE TOP of this array.
// Each entry: { date, rows: [{p: username, s: score, pl: place}] }
// pl = finishing place (1st, 2nd, 3rd, etc.)

const RAW_GAMES_GROUPED = [
  // ← ADD NEW GAMES HERE, like:
  // { date:'Mar 5 2026', rows:[{p:'Geogan',s:21500,pl:1},{p:'pintyfresh',s:18900,pl:2}] },

  { date:'Mar 3 2026', rows:[{p:'Geogan',s:21974,pl:1},{p:'pintyfresh',s:20569,pl:2},{p:'ABall-87',s:19978,pl:3},{p:'Dewman9900',s:17359,pl:4},{p:'The Shibboleth',s:12192,pl:5}] },
  { date:'Mar 2 2026', rows:[{p:'Dewman9900',s:18012,pl:1},{p:'pintyfresh',s:17097,pl:2},{p:'Geogan',s:14526,pl:3},{p:'ABall-87',s:13967,pl:4},{p:'FattySombreros',s:12291,pl:5},{p:'$GMoney$',s:11074,pl:6},{p:'MVG',s:10490,pl:7},{p:'The Shibboleth',s:8151,pl:8}] },
  { date:'Feb 27 2026', rows:[{p:'pintyfresh',s:20096,pl:1},{p:'$GMoney$',s:14993,pl:2},{p:'FattySombreros',s:14915,pl:3},{p:'ABall-87',s:13417,pl:4},{p:'MVG',s:12874,pl:5},{p:'Dewman9900',s:12784,pl:6},{p:'The Shibboleth',s:10819,pl:7}] },
  { date:'Feb 26 2026', rows:[{p:'pintyfresh',s:22177,pl:1},{p:'Dewman9900',s:20506,pl:2},{p:'$GMoney$',s:20024,pl:3},{p:'ABall-87',s:14662,pl:4},{p:'The Shibboleth',s:14111,pl:5},{p:'FattySombreros',s:13921,pl:6}] },
  { date:'Feb 25 2026', rows:[{p:'Geogan',s:16765,pl:1},{p:'MVG',s:10168,pl:2},{p:'pintyfresh',s:9261,pl:3},{p:'Dewman9900',s:7105,pl:4},{p:'FattySombreros',s:7025,pl:5},{p:'ABall-87',s:6263,pl:6},{p:'$GMoney$',s:6182,pl:7},{p:'The Shibboleth',s:4435,pl:8}] },
  { date:'Feb 24 2026', rows:[{p:'Geogan',s:22515,pl:1},{p:'$GMoney$',s:18663,pl:2},{p:'MVG',s:17822,pl:3},{p:'pintyfresh',s:17821,pl:4},{p:'Dewman9900',s:16228,pl:5},{p:'ABall-87',s:10608,pl:6}] },
  { date:'Feb 23 2026', rows:[{p:'Geogan',s:17558,pl:1},{p:'pintyfresh',s:16626,pl:2},{p:'$GMoney$',s:15106,pl:3},{p:'Dewman9900',s:13442,pl:4},{p:'The Shibboleth',s:12389,pl:5},{p:'ABall-87',s:10843,pl:6}] },
  { date:'Feb 20 2026', rows:[{p:'Geogan',s:21397,pl:1},{p:'MVG',s:21250,pl:2},{p:'pintyfresh',s:13703,pl:3},{p:'Dewman9900',s:13177,pl:4},{p:'ABall-87',s:11566,pl:5},{p:'FattySombreros',s:11314,pl:6},{p:'The Shibboleth',s:9325,pl:7}] },
  { date:'Feb 19 2026', rows:[{p:'Geogan',s:23998,pl:1},{p:'MVG',s:23955,pl:2},{p:'The Shibboleth',s:23270,pl:3},{p:'ABall-87',s:19495,pl:4},{p:'$GMoney$',s:18453,pl:5},{p:'pintyfresh',s:15466,pl:6},{p:'FattySombreros',s:15019,pl:7},{p:'Dewman9900',s:14778,pl:8}] },
  { date:'Feb 18 2026', rows:[{p:'Geogan',s:18271,pl:1},{p:'pintyfresh',s:17622,pl:2},{p:'The Shibboleth',s:17453,pl:3},{p:'MVG',s:17057,pl:4},{p:'ABall-87',s:13962,pl:5},{p:'Dewman9900',s:12848,pl:6},{p:'$GMoney$',s:12351,pl:7},{p:'FattySombreros',s:11715,pl:8}] },
  { date:'Feb 17 2026', rows:[{p:'pintyfresh',s:19602,pl:1},{p:'Geogan',s:17198,pl:2},{p:'Dewman9900',s:16681,pl:3},{p:'The Shibboleth',s:15369,pl:4},{p:'$GMoney$',s:11466,pl:5},{p:'FattySombreros',s:11068,pl:6},{p:'ABall-87',s:10352,pl:7}] },
  { date:'Feb 13 2026', rows:[{p:'Geogan',s:22183,pl:1},{p:'pintyfresh',s:12354,pl:2},{p:'The Shibboleth',s:12080,pl:3},{p:'Dewman9900',s:11709,pl:4},{p:'FattySombreros',s:10954,pl:5},{p:'ABall-87',s:10376,pl:6}] },
  { date:'Feb 12 2026', rows:[{p:'MVG',s:19334,pl:1},{p:'Geogan',s:14912,pl:2},{p:'pintyfresh',s:12590,pl:3},{p:'$GMoney$',s:11993,pl:4},{p:'ABall-87',s:11249,pl:5},{p:'The Shibboleth',s:9676,pl:6},{p:'FattySombreros',s:9392,pl:7},{p:'Dewman9900',s:6664,pl:8}] },
  { date:'Feb 11 2026', rows:[{p:'Geogan',s:16908,pl:1},{p:'pintyfresh',s:16055,pl:2},{p:'The Shibboleth',s:15407,pl:3},{p:'MVG',s:14342,pl:4},{p:'$GMoney$',s:12685,pl:5},{p:'ABall-87',s:11405,pl:6}] },
  { date:'Feb 10 2026', rows:[{p:'Geogan',s:20707,pl:1},{p:'pintyfresh',s:18256,pl:2},{p:'The Shibboleth',s:17575,pl:3},{p:'ABall-87',s:16496,pl:4},{p:'Dewman9900',s:12473,pl:5}] },
  { date:'Feb 9 2026',  rows:[{p:'Dewman9900',s:18326,pl:1},{p:'Geogan',s:18115,pl:2},{p:'MVG',s:16742,pl:3},{p:'pintyfresh',s:14790,pl:4},{p:'ABall-87',s:14733,pl:5},{p:'FattySombreros',s:11748,pl:6},{p:'$GMoney$',s:10086,pl:7},{p:'The Shibboleth',s:9318,pl:8}] },
  { date:'Feb 6 2026',  rows:[{p:'pintyfresh',s:20474,pl:1},{p:'Geogan',s:19843,pl:2},{p:'Dewman9900',s:19519,pl:3},{p:'MVG',s:18974,pl:4},{p:'$GMoney$',s:17890,pl:5},{p:'ABall-87',s:16598,pl:6},{p:'The Shibboleth',s:16170,pl:7}] },
  { date:'Feb 5 2026',  rows:[{p:'ABall-87',s:20650,pl:1},{p:'The Shibboleth',s:18158,pl:2},{p:'Geogan',s:17829,pl:3},{p:'Dewman9900',s:15223,pl:4},{p:'pintyfresh',s:14347,pl:5},{p:'MVG',s:12813,pl:6},{p:'$GMoney$',s:11913,pl:7}] },
  { date:'Feb 4 2026',  rows:[{p:'Dewman9900',s:18267,pl:1},{p:'pintyfresh',s:16304,pl:2},{p:'Geogan',s:14361,pl:3},{p:'ABall-87',s:12207,pl:4},{p:'$GMoney$',s:12132,pl:5},{p:'The Shibboleth',s:10372,pl:6}] },
  { date:'Feb 3 2026',  rows:[{p:'MVG',s:21094,pl:1},{p:'Dewman9900',s:20160,pl:2},{p:'pintyfresh',s:17120,pl:3},{p:'Geogan',s:17025,pl:4},{p:'ABall-87',s:16691,pl:5},{p:'The Shibboleth',s:14902,pl:6},{p:'$GMoney$',s:13364,pl:7},{p:'FattySombreros',s:12112,pl:8}] },
  { date:'Feb 2 2026',  rows:[{p:'ABall-87',s:23500,pl:1},{p:'Geogan',s:22184,pl:2},{p:'Dewman9900',s:21182,pl:3},{p:'FattySombreros',s:19068,pl:4},{p:'MVG',s:18946,pl:5},{p:'pintyfresh',s:18789,pl:6},{p:'The Shibboleth',s:15951,pl:7},{p:'$GMoney$',s:14674,pl:8}] },
  { date:'Jan 30 2026', rows:[{p:'Geogan',s:21905,pl:1},{p:'The Shibboleth',s:21328,pl:2},{p:'FattySombreros',s:17431,pl:3},{p:'ABall-87',s:17088,pl:4},{p:'pintyfresh',s:16766,pl:5},{p:'$GMoney$',s:6856,pl:6}] },
  { date:'Jan 29 2026', rows:[{p:'Geogan',s:22351,pl:1},{p:'pintyfresh',s:21201,pl:2},{p:'ABall-87',s:20512,pl:3},{p:'MVG',s:19845,pl:4},{p:'FattySombreros',s:17690,pl:5},{p:'$GMoney$',s:15698,pl:6},{p:'The Shibboleth',s:15118,pl:7}] },
  { date:'Jan 28 2026', rows:[{p:'Geogan',s:19123,pl:1},{p:'pintyfresh',s:17290,pl:2},{p:'Dewman9900',s:13891,pl:3},{p:'$GMoney$',s:13367,pl:4},{p:'FattySombreros',s:13362,pl:5},{p:'ABall-87',s:9544,pl:6}] },
  { date:'Jan 27 2026', rows:[{p:'ABall-87',s:18889,pl:1},{p:'Dewman9900',s:18694,pl:2},{p:'Geogan',s:16070,pl:3},{p:'$GMoney$',s:15335,pl:4},{p:'pintyfresh',s:13911,pl:5},{p:'MVG',s:13210,pl:6},{p:'The Shibboleth',s:9349,pl:7},{p:'FattySombreros',s:8389,pl:8}] },
  { date:'Jan 26 2026', rows:[{p:'Geogan',s:18661,pl:1},{p:'MVG',s:18649,pl:2},{p:'$GMoney$',s:15287,pl:3},{p:'The Shibboleth',s:13993,pl:4},{p:'ABall-87',s:13716,pl:5},{p:'FattySombreros',s:9688,pl:6}] },
  { date:'Jan 23 2026', rows:[{p:'ABall-87',s:14419,pl:1},{p:'$GMoney$',s:12636,pl:2},{p:'pintyfresh',s:11143,pl:3},{p:'The Shibboleth',s:9315,pl:4}] },
  { date:'Jan 22 2026', rows:[{p:'pintyfresh',s:19618,pl:1},{p:'ABall-87',s:19117,pl:2},{p:'$GMoney$',s:16465,pl:3},{p:'The Shibboleth',s:14285,pl:4},{p:'FattySombreros',s:11595,pl:5},{p:'Dewman9900',s:8819,pl:6}] },
  { date:'Jan 21 2026', rows:[{p:'Dewman9900',s:17356,pl:1},{p:'pintyfresh',s:17053,pl:2},{p:'The Shibboleth',s:16297,pl:3},{p:'ABall-87',s:16000,pl:4},{p:'$GMoney$',s:13216,pl:5},{p:'FattySombreros',s:12899,pl:6},{p:'MVG',s:12010,pl:7}] },
  { date:'Jan 20 2026', rows:[{p:'$GMoney$',s:19658,pl:1},{p:'The Shibboleth',s:18234,pl:2},{p:'Dewman9900',s:15429,pl:3},{p:'FattySombreros',s:15255,pl:4},{p:'pintyfresh',s:14626,pl:5},{p:'ABall-87',s:13732,pl:6}] },
  { date:'Jan 16 2026', rows:[{p:'Geogan',s:21131,pl:1},{p:'Dewman9900',s:18335,pl:2},{p:'ABall-87',s:15167,pl:3},{p:'The Shibboleth',s:14744,pl:4},{p:'MVG',s:12563,pl:5},{p:'pintyfresh',s:12454,pl:6},{p:'$GMoney$',s:10255,pl:7}] },
  { date:'Jan 15 2026', rows:[{p:'pintyfresh',s:23421,pl:1},{p:'ABall-87',s:21206,pl:2},{p:'$GMoney$',s:19173,pl:3},{p:'The Shibboleth',s:18565,pl:4},{p:'Geogan',s:18371,pl:5},{p:'FattySombreros',s:18327,pl:6},{p:'Dewman9900',s:16696,pl:7},{p:'MVG',s:16154,pl:8}] },
  { date:'Jan 14 2026', rows:[{p:'Geogan',s:17807,pl:1},{p:'$GMoney$',s:12708,pl:2},{p:'The Shibboleth',s:11793,pl:3},{p:'Dewman9900',s:11489,pl:4},{p:'pintyfresh',s:11452,pl:5},{p:'ABall-87',s:10544,pl:6},{p:'FattySombreros',s:10033,pl:7},{p:'MVG',s:10029,pl:8}] },
  { date:'Jan 13 2026', rows:[{p:'Geogan',s:24079,pl:1},{p:'Dewman9900',s:20243,pl:2},{p:'ABall-87',s:18894,pl:3},{p:'pintyfresh',s:17822,pl:4},{p:'FattySombreros',s:14594,pl:5},{p:'$GMoney$',s:11620,pl:6}] },
  { date:'Jan 12 2026', rows:[{p:'pintyfresh',s:16343,pl:1},{p:'Geogan',s:13505,pl:2},{p:'FattySombreros',s:11564,pl:3},{p:'Dewman9900',s:10488,pl:4},{p:'ABall-87',s:8722,pl:5},{p:'$GMoney$',s:8598,pl:6},{p:'The Shibboleth',s:5667,pl:7}] },
  { date:'Jan 9 2026',  rows:[{p:'MVG',s:14321,pl:1},{p:'Geogan',s:11889,pl:2},{p:'ABall-87',s:11397,pl:3},{p:'The Shibboleth',s:9685,pl:4},{p:'pintyfresh',s:9347,pl:5},{p:'$GMoney$',s:6793,pl:6},{p:'FattySombreros',s:2892,pl:7}] },
  { date:'Jan 8 2026',  rows:[{p:'pintyfresh',s:22555,pl:1},{p:'Dewman9900',s:20836,pl:2},{p:'ABall-87',s:20339,pl:3},{p:'Geogan',s:20096,pl:4},{p:'FattySombreros',s:17333,pl:5},{p:'The Shibboleth',s:16758,pl:6}] },
  { date:'Jan 6 2026',  rows:[{p:'Geogan',s:20678,pl:1},{p:'Dewman9900',s:19493,pl:2},{p:'ABall-87',s:19278,pl:3},{p:'The Shibboleth',s:19033,pl:4},{p:'pintyfresh',s:17981,pl:5},{p:'MVG',s:17709,pl:6},{p:'FattySombreros',s:13101,pl:7}] },
  { date:'Jan 5 2026',  rows:[{p:'ABall-87',s:22908,pl:1},{p:'pintyfresh',s:21533,pl:2},{p:'The Shibboleth',s:20080,pl:3},{p:'Geogan',s:19216,pl:4},{p:'FattySombreros',s:17301,pl:5},{p:'Dewman9900',s:16149,pl:6},{p:'$GMoney$',s:10807,pl:7}] },
  { date:'Jan 2 2026',  rows:[{p:'Geogan',s:22095,pl:1},{p:'pintyfresh',s:19600,pl:2},{p:'$GMoney$',s:18785,pl:3},{p:'FattySombreros',s:16967,pl:4}] },
];

// ── LOCATION DATA ────────────────────────────────────────────
// Update COUNTRIES frequency counts and CONTINENTS when new locations appear.

const CONTINENTS = [
  { name:'Europe',        count:92, pct:48.2 },
  { name:'Asia',          count:37, pct:19.4 },
  { name:'South America', count:27, pct:14.1 },
  { name:'Africa',        count:19, pct:9.9  },
  { name:'North America', count:16, pct:8.4  },
  { name:'Oceania',       count:4,  pct:2.1  },
];

const COUNTRIES = [
  {name:'Norway',freq:7},{name:'Philippines',freq:6},{name:'Mexico',freq:6},
  {name:'Kenya',freq:5},{name:'Finland',freq:5},{name:'Colombia',freq:5},{name:'USA',freq:5},
  {name:'Argentina',freq:4},{name:'Ireland',freq:4},{name:'Belgium',freq:4},{name:'Italy',freq:4},{name:'Ghana',freq:4},
  {name:'Austria',freq:4},{name:'Japan',freq:4},{name:'Portugal',freq:4},{name:'Bolivia',freq:4},
  {name:'Hungary',freq:3},{name:'France',freq:3},{name:'Latvia',freq:3},{name:'Romania',freq:3},
  {name:'Lithuania',freq:3},{name:'Malaysia',freq:3},{name:'Netherlands',freq:3},{name:'South Africa',freq:3},
  {name:'Nigeria',freq:3},{name:'Estonia',freq:3},{name:'Uruguay',freq:3},{name:'Bulgaria',freq:3},
  {name:'Brazil',freq:3},{name:'Kyrgyzstan',freq:3},{name:'Chile',freq:3},{name:'India',freq:3},{name:'Greece',freq:3},
  {name:'Australia',freq:2},{name:'Ecuador',freq:2},{name:'Jordan',freq:2},{name:'Ukraine',freq:2},{name:'Germany',freq:2},
  {name:'Slovenia',freq:2},{name:'New Zealand',freq:2},{name:'Sweden',freq:2},{name:'Peru',freq:2},{name:'Serbia',freq:2},
  {name:'Israel',freq:2},{name:'Sri Lanka',freq:2},{name:'Thailand',freq:2},{name:'Czechia',freq:2},{name:'Denmark',freq:2},
  {name:'Croatia',freq:2},{name:'UAE',freq:2},{name:'Turkey',freq:2},{name:'Switzerland',freq:2},
  {name:'Canada',freq:1},{name:'Indonesia',freq:1},{name:'Kazakhstan',freq:1},{name:'Panama',freq:1},{name:'Senegal',freq:1},
  {name:'Singapore',freq:1},{name:'South Korea',freq:1},{name:'Uganda',freq:1},{name:'Greenland',freq:1},{name:'Qatar',freq:1},
  {name:'Taiwan',freq:1},{name:'Lesotho',freq:1},{name:'Cambodia',freq:1},{name:'Hong Kong',freq:1},{name:'Puerto Rico',freq:1},
  {name:'Madagascar',freq:1},{name:'Costa Rica',freq:1},{name:'United Kingdom',freq:1},{name:'Spain',freq:1},{name:'Antarctica',freq:1},
  {name:'Monaco',freq:1},{name:'Russia',freq:1},{name:'Slovakia',freq:1},
  {name:'Albania',freq:0},{name:'American Samoa',freq:0},{name:'Andorra',freq:0},{name:'Bangladesh',freq:0},
  {name:'Bermuda',freq:0},{name:'Bhutan',freq:0},{name:'Botswana',freq:0},{name:'Jersey',freq:0},
  {name:'Christmas Island',freq:0},{name:'Curacao',freq:0},{name:'Dominican Republic',freq:0},{name:'Eswatini',freq:0},
  {name:'Faroe Islands',freq:0},{name:'Guam',freq:0},{name:'Guatemala',freq:0},{name:'Iceland',freq:0},
  {name:'Isle of Man',freq:0},{name:'Laos',freq:0},{name:'Luxembourg',freq:0},{name:'Malta',freq:0},
  {name:'Mongolia',freq:0},{name:'Montenegro',freq:0},{name:'North Macedonia',freq:0},{name:'Northern Mariana Islands',freq:0},
  {name:'Pakistan',freq:0},{name:'San Marino',freq:0},{name:'Reunion',freq:0},{name:'Rwanda',freq:0},
  {name:'Tunisia',freq:0},{name:'U.S. Virgin Islands',freq:0},{name:'Vietnam',freq:0},{name:'Hawaii',freq:0},
  {name:'Alaska',freq:0},{name:'Bosnia and Herzegovenia',freq:0},{name:'Cyprus',freq:0},{name:'Gibraltar',freq:0},
  {name:'Liechtenstein',freq:0},{name:'Lebanon',freq:0},{name:'Nepal',freq:0},{name:'Oman',freq:0},
  {name:'Namibia',freq:0},{name:'Paraguay',freq:0},{name:'Sao Tome and Principe',freq:0},
];
