import fs from 'fs';

const map = JSON.parse(fs.readFileSync('scripts/video-page-map.json', 'utf-8'));

const entries = Object.entries(map).map(([page, videos]) => {
  const videoLines = videos.map(v =>
    `    { youtubeId: "${v.youtubeId}", name: ${JSON.stringify(v.name)}, description: ${JSON.stringify(v.description)}, uploadDate: "2024-01-01" }`
  ).join(',\n');
  return `  "${page}": [\n${videoLines}\n  ]`;
}).join(',\n\n');

const output = `// Auto-generated from YouTube channel UCiXgogSH5-yTjshI9FJuxLg
// ${new Date().toISOString().split('T')[0]}

export interface VideoEntry {
  youtubeId: string;
  name: string;
  description: string;
  uploadDate: string;
}

export const videoData: Record<string, VideoEntry[]> = {
${entries}
};
`;

fs.writeFileSync('src/data/video-data.ts', output);
console.log('Written to src/data/video-data.ts');
console.log(`Total pages with videos: ${Object.keys(map).length}`);
console.log(`Total videos: ${Object.values(map).flat().length}`);
