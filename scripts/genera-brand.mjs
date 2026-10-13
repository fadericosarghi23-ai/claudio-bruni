/**
 * Genera i raster del marchio dagli SVG in public/brand/:
 * - favicon.svg   → favicon-16.png, favicon-32.png, apple-touch-icon.png (180)
 * - og-cover.svg  → og-cover.jpg (1200x630, copertina Open Graph)
 *
 *   npm run brand
 *
 * Se al riempimento la copertina OG è una foto, basta mettere direttamente og-cover.jpg
 * in public/brand/ e cancellare og-cover.svg: lo script la lascia stare.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BRAND = path.join(SITE, 'public', 'brand');

const favicon = fs.readFileSync(path.join(BRAND, 'favicon.svg'));
for (const size of [16, 32, 180]) {
  const nome = size === 180 ? 'apple-touch-icon.png' : `favicon-${size}.png`;
  await sharp(favicon, { density: 384 }).resize(size, size).png().toFile(path.join(BRAND, nome));
  console.log('scritto', nome, size + 'x' + size);
}

const og = path.join(BRAND, 'og-cover.svg');
if (fs.existsSync(og)) {
  await sharp(fs.readFileSync(og)).resize(1200, 630).jpeg({ quality: 88 }).toFile(path.join(BRAND, 'og-cover.jpg'));
  console.log('scritto og-cover.jpg 1200x630');
}
