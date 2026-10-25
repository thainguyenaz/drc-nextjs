#!/usr/bin/env node
// Build self-hosted email video thumbnails (drc-lead-drip featured-video slot).
//
//   node scripts/email-video-thumbnail.mjs <youtubeId> [<youtubeId> ...]
//
// For each id: download the highest-resolution YouTube thumbnail ONCE (a copy;
// emails never hotlink YouTube), cover-crop to 1200x675 (16:9), bake in a
// centered play button, and write public/email/video/<id>.jpg as a progressive
// JPEG under 100 KB (quality steps down until it fits). Served at
// https://desertrecoverycenters.com/email/video/<id>.jpg.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const OUT_DIR = join(process.cwd(), "public", "email", "video");
const W = 1200;
const H = 675;
const MAX_BYTES = 100 * 1024;
// Largest first. maxresdefault is 1280x720 when it exists; the others are
// letterboxed 4:3 fallbacks.
const CANDIDATES = ["maxresdefault.jpg", "sddefault.jpg", "hqdefault.jpg"];

// Play button: translucent dark disc, white ring, white triangle (optically
// centered). Brand-neutral so it reads on any frame.
const PLAY = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <circle cx="${W / 2}" cy="${H / 2}" r="76" fill="#000" fill-opacity="0.55"/>
  <circle cx="${W / 2}" cy="${H / 2}" r="76" fill="none" stroke="#fff" stroke-width="5"/>
  <polygon points="${W / 2 - 24},${H / 2 - 40} ${W / 2 - 24},${H / 2 + 40} ${W / 2 + 44},${H / 2}" fill="#fff"/>
</svg>`);

async function fetchLargest(id) {
  for (const name of CANDIDATES) {
    const res = await fetch(`https://i.ytimg.com/vi/${id}/${name}`);
    if (!res.ok) continue;
    const buf = Buffer.from(await res.arrayBuffer());
    const meta = await sharp(buf).metadata();
    // YouTube serves a 120x90 grey placeholder for missing sizes.
    if ((meta.width ?? 0) <= 120) continue;
    return { buf, name, width: meta.width, height: meta.height };
  }
  throw new Error(`${id}: no thumbnail found`);
}

async function build(id) {
  const src = await fetchLargest(id);
  // Letterboxed fallbacks carry black bars; trim them before cropping.
  const base = sharp(src.buf).trim({ background: "#000000", threshold: 20 });
  const framed = await base.resize(W, H, { fit: "cover", position: "attention" }).toBuffer();
  const composed = sharp(framed).composite([{ input: PLAY }]);
  for (let q = 82; q >= 40; q -= 4) {
    const out = await composed.clone().jpeg({ quality: q, progressive: true, mozjpeg: true }).toBuffer();
    if (out.length <= MAX_BYTES) {
      writeFileSync(join(OUT_DIR, `${id}.jpg`), out);
      return { id, source: `${src.name} ${src.width}x${src.height}`, quality: q, bytes: out.length };
    }
  }
  throw new Error(`${id}: could not get under ${MAX_BYTES} bytes`);
}

// "--" lets ids that start with "-" (e.g. -7A7Bt92Jcg) pass through argument parsing.
const ids = process.argv.slice(2).filter((a) => a !== "--");
if (!ids.length) {
  console.error("usage: node scripts/email-video-thumbnail.mjs <youtubeId> [...]");
  process.exit(2);
}
mkdirSync(OUT_DIR, { recursive: true });
for (const id of ids) {
  if (!/^[A-Za-z0-9_-]{6,}$/.test(id)) throw new Error(`bad YouTube id: ${id}`);
  const r = await build(id);
  console.log(`${r.id}: ${r.source} -> ${W}x${H} q${r.quality} ${(r.bytes / 1024).toFixed(1)} KB`);
}
