// Script: Genera un mapa producto -> URL de ficha de seguridad (PDF)
// - Escanea public/FICHAS DE SEGURIDAD DETERIN
// - Lee ids y names desde src/data/products.ts (parse sencillo por líneas)
// - Aplica matching robusto (id exacto > name exacto > incluye id > incluye name)
// - Escribe src/data/safetySheets.json y lista de faltantes safety_sheets_missing.txt

import fs from 'fs';
import path from 'path';

const PROJECT_ROOT = process.cwd();
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');
const SHEETS_DIR = path.join(PUBLIC_DIR, 'FICHAS SEGURIDAD DETERIN');
const PRODUCTS_TS = path.join(PROJECT_ROOT, 'src', 'data', 'products.ts');
const OUTPUT_JSON = path.join(PROJECT_ROOT, 'src', 'data', 'safetySheets.json');
const MISSING_TXT = path.join(PROJECT_ROOT, 'safety_sheets_missing.txt');

function slugify(input) {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}

function readProducts() {
  const content = fs.readFileSync(PRODUCTS_TS, 'utf8');
  const lines = content.split(/\r?\n/);
  const products = [];
  let currentId = null;
  let currentName = null;

  for (const raw of lines) {
    const line = raw.trim();
    // id: 'value'
    const idMatch = line.match(/^id:\s*'([^']+)'/);
    if (idMatch) {
      currentId = idMatch[1];
      currentName = null; // reset until we find the next name
      continue;
    }
    const nameMatch = line.match(/^name:\s*'([^']+)'/);
    if (nameMatch) {
      currentName = nameMatch[1];
      if (currentId) {
        products.push({ id: currentId, name: currentName });
        currentId = null;
        currentName = null;
      }
    }
  }
  return products;
}

function readPdfFiles() {
  if (!fs.existsSync(SHEETS_DIR)) {
    throw new Error(`No existe el directorio: ${SHEETS_DIR}`);
  }
  // Escaneo no recursivo (los archivos están en esta carpeta)
  const entries = fs.readdirSync(SHEETS_DIR, { withFileTypes: true });
  const pdfs = [];
  for (const ent of entries) {
    if (ent.isFile() && ent.name.toLowerCase().endsWith('.pdf')) {
      const abs = path.join(SHEETS_DIR, ent.name);
      const relUrl = `/FICHAS%20SEGURIDAD%20DETERIN/${encodeURIComponent(ent.name)}`;
      const base = ent.name.replace(/\.pdf$/i, '');
      pdfs.push({ name: ent.name, base, slug: slugify(base), url: relUrl, abs });
    }
  }
  return pdfs;
}

function chooseBestMatch(product, pdfs) {
  const idSlug = slugify(product.id);
  const nameSlug = slugify(product.name);

  // Rank candidates
  let best = null;
  let bestScore = -1;

  for (const pdf of pdfs) {
    const s = pdf.slug;
    let score = -1;
    if (s === idSlug) score = 100;
    else if (s === nameSlug) score = 95;
    else if (s.includes(idSlug)) score = 85;
    else if (s.includes(nameSlug)) score = 80;
    else if (idSlug.includes(s) && s.length >= 5) score = 70; // pdf más genérico
    else if (nameSlug.includes(s) && s.length >= 5) score = 60;

    if (score > bestScore || (score === bestScore && best && pdf.slug.length < best.slug.length)) {
      if (score >= 0) {
        best = pdf;
        bestScore = score;
      }
    }
  }
  // Umbral mínimo para evitar falsos positivos
  if (bestScore >= 80) return best; // requiere al menos incluir name o mejor
  return null;
}

function main() {
  const products = readProducts();
  const pdfs = readPdfFiles();

  const byId = {};
  const missing = [];

  for (const p of products) {
    const match = chooseBestMatch(p, pdfs);
    if (match) {
      byId[p.id] = match.url;
    } else {
      missing.push(`${p.id} | ${p.name}`);
    }
  }

  // Write JSON mapping
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(byId, null, 2), 'utf8');

  // Write missing list
  fs.writeFileSync(MISSING_TXT, missing.join('\n'), 'utf8');

  console.log(`Mapeadas ${Object.keys(byId).length} fichas. Faltan ${missing.length}.`);
  console.log(`JSON: ${OUTPUT_JSON}`);
  console.log(`Faltantes: ${MISSING_TXT}`);
}

main();


