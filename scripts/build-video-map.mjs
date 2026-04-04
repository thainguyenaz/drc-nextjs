import fs from 'fs';

const raw = fs.readFileSync('scripts/raw-videos.txt', 'utf-8');
const lines = raw.trim().split('\n').filter(Boolean);

const videos = lines.map(line => {
  const [id, ...titleParts] = line.split('|||');
  return { id: id.trim(), title: titleParts.join('|||').trim() };
}).filter(v => v.id && v.title);

console.log(`Total videos parsed: ${videos.length}`);

const PAGE_MAP = [
  { page: '/addiction/alcoholism-treatment/', keywords: ['alcohol','alcoholism','drinking','sober','sobriety','gray-area','whiskey','beer','wine','alcohol use','alcohol affect','alcohol and','alcohol worsen','reducing alcohol','link between alcohol'] },
  { page: '/addiction/fentanyl-addiction-treatment/', keywords: ['fentanyl'] },
  { page: '/addiction/heroin-addiction-treatment/', keywords: ['heroin','opioid','opiate'] },
  { page: '/addiction/meth-addiction-treatment/', keywords: ['meth','methamphetamine'] },
  { page: '/addiction/cocaine-addiction-treatment/', keywords: ['cocaine','crack'] },
  { page: '/addiction/marijuana-addiction-treatment/', keywords: ['marijuana','cannabis','weed','thc'] },
  { page: '/addiction/prescription-drug-addiction-treatment/', keywords: ['prescription drug','benzodiazepine','benzo','prescription stimulant','safest way to detox from prescription'] },
  { page: '/addiction/gambling-addiction-treatment/', keywords: ['gambling','casino','betting'] },
  { page: '/addiction/sex-addiction-treatment/', keywords: ['sex addiction','sexual compulsion'] },
  { page: '/addiction/stimulant-addiction-treatment/', keywords: ['stimulant','adderall','amphetamine'] },
  { page: '/mental-health/anxiety-treatment/', keywords: ['anxiety','panic disorder','anxious','worry','does alcohol worsen anxiety'] },
  { page: '/mental-health/depression-treatment/', keywords: ['depression','depressed','grief','mood disorder','can reducing alcohol improve mental'] },
  { page: '/mental-health/ptsd-treatment/', keywords: ['ptsd','trauma','traumatic','post-traumatic'] },
  { page: '/mental-health/bipolar-disorder-treatment/', keywords: ['bipolar','mania','manic','relationship between alcohol and bipolar'] },
  { page: '/mental-health/adhd-add/', keywords: ['adhd','attention deficit','hyperactivity'] },
  { page: '/mental-health/ocd-treatment/', keywords: ['ocd','obsessive','compulsive'] },
  { page: '/mental-health/personality-disorder-treatment/', keywords: ['personality disorder','borderline','bpd'] },
  { page: '/mental-health/schizophrenia-treatment/', keywords: ['schizophrenia','psychosis','psychotic'] },
  { page: '/treatments/dual-diagnosis-treatment/', keywords: ['dual diagnosis','co-occurring','comorbid','continuum of care','levels of care','iop','step down','step back up','higher level of care','individualized','one size fits all'] },
  { page: '/treatments/trauma-therapy/', keywords: ['trauma therapy','emdr','eye movement desensitization'] },
  { page: '/treatments/cognitive-behavioral-therapy-cbt/', keywords: ['cbt','cognitive behavioral'] },
  { page: '/treatments/dialectical-behavior-therapy-dbt/', keywords: ['dbt','dialectical behavior'] },
  { page: '/treatments/12-step-program/', keywords: ['12 step','twelve step','alcoholics anonymous','narcotics anonymous','what are the 12'] },
  { page: '/treatments/holistic-therapies/', keywords: ['holistic','yoga','meditation','mindfulness','massage','arizona climate','arizona landscape','healing and recovery','environment','removing someone from their everyday'] },
  { page: '/treatments/softwave-therapy/', keywords: ['softwave'] },
  { page: '/resources/addiction-detox-guide/', keywords: ['detox','withdrawal','medical detox','detoxing','what happens during a medical detox','what should i bring to a detox','what medications are used to help with detox','risks or dangers of detoxing','safest way to detox'] },
  { page: '/about-us/', keywords: ['about desert recovery','our story','mission','boutique program','smaller program','why does a smaller','overview of the new drc','professionals (doctors, lawyers','executive burnout','high achievers'] },
  { page: '/addiction-treatment/', keywords: ['high-functioning addiction','relapse prevention','relapse','warning signs','reintegrate','intervention','inpatient','rehab','recovery','treatment center','family','how do outcomes improve','how do you help clients','how is treatment individualized','stepping down gradually','is there a link between alcohol and suicide','what is craft','structural family therapy','stages of family recovery','explain addiction to young children','set healthy boundaries','families heal','how does addiction impact','rewire the brain'] },
  { page: '/mental-health/', keywords: ['mental health','executive burnout','behavioral health','how does alcohol affect mental health','link between alcohol use and suicide','what is gray-area'] },
  { page: '/locations/scottsdale/', keywords: ['scottsdale'] },
  { page: '/locations/glendale/', keywords: ['glendale'] },
  { page: '/locations/phoenix/', keywords: ['phoenix'] },
];

function mapVideo(title) {
  const t = title.toLowerCase();
  for (const { page, keywords } of PAGE_MAP) {
    if (keywords.some(kw => t.includes(kw.toLowerCase()))) return page;
  }
  return '/addiction-treatment/';
}

const pageVideoMap = {};
let unmapped = 0;

for (const video of videos) {
  const page = mapVideo(video.title);
  if (page === '/addiction-treatment/' && !PAGE_MAP.find(p => p.page === '/addiction-treatment/').keywords.some(kw => video.title.toLowerCase().includes(kw))) {
    unmapped++;
  }
  if (!pageVideoMap[page]) pageVideoMap[page] = [];
  pageVideoMap[page].push({ youtubeId: video.id, name: video.title, description: video.title, uploadDate: '2024-01-01' });
}

fs.writeFileSync('scripts/video-page-map.json', JSON.stringify(pageVideoMap, null, 2));

console.log('\n=== VIDEO DISTRIBUTION ===');
const sorted = Object.entries(pageVideoMap).sort((a,b) => b[1].length - a[1].length);
for (const [page, vids] of sorted) {
  console.log(`${vids.length.toString().padStart(3)} videos → ${page}`);
}
console.log(`\nTotal videos: ${videos.length}`);
console.log(`Unmapped (defaulted to addiction-treatment): ${unmapped}`);
