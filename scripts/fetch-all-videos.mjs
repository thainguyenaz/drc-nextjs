import { google } from 'googleapis';
import fs from 'fs';

const API_KEY = process.env.YOUTUBE_API_KEY;
if (!API_KEY) { console.error('Set YOUTUBE_API_KEY env var first'); process.exit(1); }

const youtube = google.youtube({ version: 'v3', auth: API_KEY });
const CHANNEL_ID = 'UCiXgogSH5-yTjshI9FJuxLg';

async function getAllVideos() {
  const videos = [];
  let nextPageToken = null;
  do {
    const res = await youtube.search.list({
      part: ['snippet'],
      channelId: CHANNEL_ID,
      maxResults: 50,
      order: 'date',
      type: ['video'],
      pageToken: nextPageToken || undefined,
    });
    for (const item of res.data.items || []) {
      if (!item.id?.videoId) continue;
      videos.push({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description?.substring(0, 200),
        publishedAt: item.snippet.publishedAt,
        thumbnail: item.snippet.thumbnails?.high?.url,
      });
    }
    nextPageToken = res.data.nextPageToken;
    console.log(`Loaded ${videos.length} videos...`);
  } while (nextPageToken);
  return videos;
}

const PAGE_MAP = {
  '/addiction/alcoholism-treatment/': ['alcohol','alcoholism','drinking','sober','sobriety','beer','wine','whiskey','gray-area drinking','bipolar and alcohol','alcohol and suicide','alcohol affect'],
  '/addiction/heroin-addiction-treatment/': ['heroin','opioid','opiate'],
  '/addiction/fentanyl-addiction-treatment/': ['fentanyl'],
  '/addiction/meth-addiction-treatment/': ['meth','methamphetamine'],
  '/addiction/cocaine-addiction-treatment/': ['cocaine','crack'],
  '/addiction/marijuana-addiction-treatment/': ['marijuana','cannabis','weed'],
  '/addiction/prescription-drug-addiction-treatment/': ['prescription drug','benzodiazepine','benzo','prescription stimulant'],
  '/addiction/gambling-addiction-treatment/': ['gambling'],
  '/addiction/sex-addiction-treatment/': ['sex addiction'],
  '/addiction/stimulant-addiction-treatment/': ['stimulant'],
  '/mental-health/anxiety-treatment/': ['anxiety','panic','anxious','worry'],
  '/mental-health/depression-treatment/': ['depression','depressed','grief','mood'],
  '/mental-health/ptsd-treatment/': ['ptsd','trauma','traumatic','post-traumatic'],
  '/mental-health/bipolar-disorder-treatment/': ['bipolar','mania','manic'],
  '/mental-health/adhd-add/': ['adhd','attention deficit'],
  '/mental-health/ocd-treatment/': ['ocd','obsessive','compulsive'],
  '/mental-health/personality-disorder-treatment/': ['personality disorder','borderline','bpd'],
  '/mental-health/schizophrenia-treatment/': ['schizophrenia','psychosis'],
  '/treatments/dual-diagnosis-treatment/': ['dual diagnosis','co-occurring','comorbid','continuum of care','levels of care'],
  '/treatments/trauma-therapy/': ['trauma therapy','emdr','eye movement'],
  '/treatments/cognitive-behavioral-therapy-cbt/': ['cbt','cognitive behavioral'],
  '/treatments/dialectical-behavior-therapy-dbt/': ['dbt','dialectical'],
  '/treatments/12-step-program/': ['12 step','twelve step','alcoholics anonymous','narcotics anonymous'],
  '/treatments/holistic-therapies/': ['holistic','yoga','meditation','mindfulness','massage'],
  '/treatments/softwave-therapy/': ['softwave'],
  '/treatments/emdr-eye-movement-desensitization-and-reprocessing/': ['emdr','eye movement desensitization'],
  '/resources/addiction-detox-guide/': ['detox','withdrawal','medical detox','detoxing'],
  '/locations/glendale/': ['glendale'],
  '/locations/scottsdale/': ['scottsdale','arizona climate','arizona landscape'],
  '/locations/phoenix-php-iop/': ['phoenix'],
  '/about-us/': ['about desert recovery','our story','mission','founder','boutique program','smaller program'],
  '/addiction-treatment/': ['high-functioning addiction','relapse','iop','step down','reintegrate','intervention','inpatient','rehab','treatment center','recovery','family'],
  '/mental-health/': ['mental health','executive burnout','behavioral health'],
  '/': ['overview','desert recovery centers','drc'],
};

function mapVideoToPage(title, description) {
  const text = (title + ' ' + description).toLowerCase();
  for (const [page, keywords] of Object.entries(PAGE_MAP)) {
    if (keywords.some(kw => text.includes(kw.toLowerCase()))) return page;
  }
  return '/addiction-treatment/';
}

getAllVideos().then(videos => {
  const pageVideoMap = {};
  for (const video of videos) {
    const page = mapVideoToPage(video.title, video.description || '');
    if (!pageVideoMap[page]) pageVideoMap[page] = [];
    pageVideoMap[page].push(video);
  }
  fs.writeFileSync('scripts/all-videos.json', JSON.stringify(videos, null, 2));
  fs.writeFileSync('scripts/video-page-map.json', JSON.stringify(pageVideoMap, null, 2));
  console.log('\n=== VIDEO MAP SUMMARY ===');
  for (const [page, vids] of Object.entries(pageVideoMap)) {
    console.log(`${page}: ${vids.length} videos`);
  }
  console.log(`\nTotal: ${videos.length} videos across ${Object.keys(pageVideoMap).length} pages`);
}).catch(console.error);
