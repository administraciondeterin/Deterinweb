// Genera un informe de productos con descripcion vacia y/o precios 0
// Lee src/data/products.ts, extrae el array y evalua en un sandbox

import fs from 'fs';
import path from 'path';
import vm from 'vm';

const PROJECT_ROOT = process.cwd();
const PRODUCTS_TS = path.join(PROJECT_ROOT, 'src', 'data', 'products.ts');
const OUT_TXT = path.join(PROJECT_ROOT, 'products_data_issues.txt');

function extractProductsArrayCode(source) {
  const anchor = 'export const products';
  const startIdx = source.indexOf(anchor);
  if (startIdx === -1) throw new Error('No se encontró la exportación de products');
  const bracketStart = source.indexOf('[', startIdx);
  if (bracketStart === -1) throw new Error('No se encontró el inicio del array');
  let i = bracketStart;
  let depth = 0;
  for (; i < source.length; i++) {
    const ch = source[i];
    if (ch === '[') depth++;
    else if (ch === ']') {
      depth--;
      if (depth === 0) {
        const bracketEnd = i; // inclusive
        return source.slice(bracketStart, bracketEnd + 1);
      }
    }
  }
  throw new Error('No se pudo cerrar el array');
}

function evalArray(arrayCode) {
  const context = {};
  vm.createContext(context);
  const script = new vm.Script(`products = ${arrayCode}; products;`);
  const result = script.runInContext(context, { timeout: 5000 });
  return result;
}

function main() {
  const src = fs.readFileSync(PRODUCTS_TS, 'utf8');
  const arrayCode = extractProductsArrayCode(src);
  const products = evalArray(arrayCode);

  const noDescription = [];
  const priceZero = [];

  for (const p of products) {
    const descEmpty = !p.description || String(p.description).trim() === '';
    const hasZero = Array.isArray(p.presentations) && p.presentations.some(pr => Number(pr.price) === 0);
    if (descEmpty) noDescription.push(`${p.id} | ${p.name}`);
    if (hasZero) priceZero.push(`${p.id} | ${p.name}`);
  }

  const lines = [];
  lines.push(`# Productos con descripción vacía (${noDescription.length})`);
  lines.push(...noDescription);
  lines.push('');
  lines.push(`# Productos con algún precio 0 (${priceZero.length})`);
  lines.push(...priceZero);

  fs.writeFileSync(OUT_TXT, lines.join('\n'), 'utf8');
  console.log(`Reporte generado: ${OUT_TXT}`);
}

main();


