import sharp from 'sharp'
import { readdir, stat, rename } from 'fs/promises'
import { join, extname, basename } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '../public')

async function getImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await getImages(full))
    } else if (['.jpg', '.jpeg', '.png'].includes(extname(entry.name).toLowerCase())) {
      files.push(full)
    }
  }
  return files
}

async function compressImage(filePath) {
  const stats = await stat(filePath)
  const sizeMB = stats.size / (1024 * 1024)

  if (sizeMB < 0.2) {
    console.log(`SKIP (already small): ${basename(filePath)} — ${sizeMB.toFixed(2)}MB`)
    return { before: stats.size, after: stats.size, skipped: true }
  }

  const name = basename(filePath).toLowerCase()
  const isHero = name.includes('front') ||
                 name.includes('hero') ||
                 name.includes('banner') ||
                 name.includes('drone')

  const maxWidth = isHero ? 1920 : 1200
  const quality = isHero ? 80 : 75

  try {
    const image = sharp(filePath)
    const metadata = await image.metadata()

    const ext = extname(filePath).toLowerCase()
    const tmpPath = filePath + '.compressed' + ext

    if (ext === '.png') {
      await sharp(filePath)
        .resize(maxWidth, null, { withoutEnlargement: true, fit: 'inside' })
        .png({ quality, progressive: true })
        .toFile(tmpPath)
    } else {
      await sharp(filePath)
        .resize(maxWidth, null, { withoutEnlargement: true, fit: 'inside' })
        .jpeg({ quality, progressive: true, mozjpeg: true })
        .toFile(tmpPath)
    }

    const newStats = await stat(tmpPath)
    const newSizeMB = newStats.size / (1024 * 1024)

    console.log(`COMPRESSED: ${basename(filePath)} — ${sizeMB.toFixed(2)}MB → ${newSizeMB.toFixed(2)}MB (${metadata.width}px → ${Math.min(metadata.width, maxWidth)}px)`)

    await rename(tmpPath, filePath)
    return { before: stats.size, after: newStats.size, skipped: false }
  } catch (err) {
    console.error(`ERROR: ${basename(filePath)} — ${err.message}`)
    return { before: stats.size, after: stats.size, skipped: true }
  }
}

const images = await getImages(publicDir)
console.log(`Found ${images.length} images to process\n`)

let totalBefore = 0
let totalAfter = 0
let compressed = 0

for (const img of images) {
  const result = await compressImage(img)
  totalBefore += result.before
  totalAfter += result.after
  if (!result.skipped) compressed++
}

console.log(`\n${'='.repeat(60)}`)
console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB → ${(totalAfter / 1024 / 1024).toFixed(2)}MB`)
console.log(`Saved: ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(2)}MB`)
console.log(`Compressed: ${compressed} / ${images.length} images`)
console.log('Done.')
