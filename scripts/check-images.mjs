// Image integrity check: fails if any page shows the same image twice,
// if two *referenced* images are byte-identical, or if a reference is broken.
// Run with --prune to delete unreferenced files that duplicate another image.
import { readFileSync, readdirSync, statSync, existsSync, unlinkSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { createHash } from 'node:crypto';

const root = process.cwd();
const walk = (dir, out = []) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) { if (!p.includes('legacy')) walk(p, out); } else out.push(p);
  }
  return out;
};

const refRe = [/!\[[^\]]*\]\((\/images\/[^)\s]+)\)/g, /src=["'](\/images\/[^"']+)["']/g, /thumbnail:\s*["'](\/images\/[^"']+)["']/g];
const errors = [];
const referenced = new Set();

for (const file of walk(join(root, 'src')).filter((f) => /\.(astro|mdx?|ts)$/.test(f))) {
  const text = readFileSync(file, 'utf8');
  const seen = new Map();
  for (const re of refRe) for (const m of text.matchAll(re)) {
    const img = m[1];
    referenced.add(img);
    seen.set(img, (seen.get(img) ?? 0) + 1);
    if (!existsSync(join(root, 'public', img))) errors.push(`Broken reference ${img} in ${relative(root, file)}`);
  }
  for (const [img, n] of seen) if (n > 1) errors.push(`${relative(root, file)} shows ${img} ${n} times`);
}

const byHash = new Map();
for (const f of walk(join(root, 'public', 'images')).filter((f) => /\.(png|jpe?g|webp|svg|gif)$/i.test(f))) {
  const h = createHash('md5').update(readFileSync(f)).digest('hex');
  const web = '/' + relative(join(root, 'public'), f).split(sep).join('/');
  if (!byHash.has(h)) byHash.set(h, []);
  byHash.get(h).push(web);
}

const prunable = [];
for (const files of byHash.values()) {
  if (files.length < 2) continue;
  const used = files.filter((f) => referenced.has(f));
  if (used.length > 1) errors.push(`Identical images used in multiple places: ${used.join(', ')}`);
  const keep = used[0] ?? files[0];
  prunable.push(...files.filter((f) => f !== keep && !referenced.has(f)));
}

if (prunable.length) {
  if (process.argv.includes('--prune')) {
    prunable.forEach((f) => unlinkSync(join(root, 'public', f)));
    console.log(`Pruned ${prunable.length} unreferenced duplicate file(s).`);
  } else {
    errors.push(`${prunable.length} unreferenced duplicate file(s) (run with --prune):\n  ${prunable.join('\n  ')}`);
  }
}

if (errors.length) { console.error('Image check FAILED:\n- ' + errors.join('\n- ')); process.exit(1); }
console.log(`Image check passed: ${referenced.size} referenced images, no repeats, no duplicates.`);
