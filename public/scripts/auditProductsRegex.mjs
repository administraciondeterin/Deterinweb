import fs from 'fs';
import path from 'path';

const PROJECT_ROOT = process.cwd();
const PRODUCTS_TS = path.join(PROJECT_ROOT, 'src', 'data', 'products.ts');
const OUT_TXT = path.join(PROJECT_ROOT, 'products_data_issues_regex.txt');

const src = fs.readFileSync(PRODUCTS_TS, 'utf8');
const lines = src.split(/\r?\n/);

const withEmptyDescription = [];
const withZeroPrice = [];

let currentId = null;
let currentName = null;
let pendingEmptyDesc = false;
let inPresentations = false;
let foundZeroInBlock = false;

function flush() {
  if (currentId && currentName) {
    if (pendingEmptyDesc) withEmptyDescription.push(`${currentId} | ${currentName}`);
    if (foundZeroInBlock) withZeroPrice.push(`${currentId} | ${currentName}`);
  }
  pendingEmptyDesc = false;
  inPresentations = false;
  foundZeroInBlock = false;
}

for (let i = 0; i < lines.length; i++) {
  const raw = lines[i];
  const line = raw.trim();

  // Detect end of a product block heuristically
  if (line === '},') {
    flush();
    currentId = null;
    currentName = null;
    continue;
  }

  const idMatch = line.match(/^id:\s*'([^']+)'/);
  if (idMatch) {
    currentId = idMatch[1];
    continue;
  }
  const nameMatch = line.match(/^name:\s*'([^']+)'/);
  if (nameMatch) {
    currentName = nameMatch[1];
    continue;
  }
  const descMatch = line.match(/^description:\s*'([^']*)'/);
  if (descMatch) {
    const val = descMatch[1];
    if (!val || val.trim() === '') pendingEmptyDesc = true;
    continue;
  }
  if (/^presentations:\s*\[/.test(line)) {
    inPresentations = true;
    continue;
  }
  if (inPresentations) {
    if (/^],?\s*$/.test(line)) {
      inPresentations = false;
      continue;
    }
    const priceMatch = line.match(/price:\s*([0-9]+(?:\.[0-9]+)?)/);
    if (priceMatch) {
      const num = Number(priceMatch[1]);
      if (num === 0) foundZeroInBlock = true;
    }
  }
}

// flush last block if file ends without '},'
flush();

const out = [];
out.push(`# Productos con descripción vacía (${withEmptyDescription.length})`);
out.push(...withEmptyDescription);
out.push('');
out.push(`# Productos con algún precio 0 (${withZeroPrice.length})`);
out.push(...withZeroPrice);

fs.writeFileSync(OUT_TXT, out.join('\n'), 'utf8');
console.log(`Generado: ${OUT_TXT}`);


