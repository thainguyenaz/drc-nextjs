const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = './public/images/adolescent/abstract';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));

files.forEach(async (file) => {
  const input = path.join(dir, file);
  const output = path.join(dir, file.replace('.jpg', '-optimized.jpg'));

  await sharp(input)
    .resize(1400, null, { withoutEnlargement: true })
    .jpeg({ quality: 82, progressive: true })
    .toFile(output);

  const before = fs.statSync(input).size;
  const after = fs.statSync(output).size;
  console.log(`${file}: ${(before/1024/1024).toFixed(1)}MB → ${(after/1024/1024).toFixed(1)}MB`);
});
