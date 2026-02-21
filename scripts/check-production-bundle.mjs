#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const files = process.argv.slice(2);
const targets = files.length ? files : ['assets/index-bdojs8c3.js'];
const markers = ['code-path'];

let hasFailure = false;

for (const file of targets) {
  const content = readFileSync(file, 'utf8');
  for (const marker of markers) {
    if (content.includes(marker)) {
      console.error(`[check-production-bundle] Found debug marker "${marker}" in ${file}.`);
      hasFailure = true;
    }
  }
}

if (hasFailure) {
  process.exit(1);
}

console.log('[check-production-bundle] No debug markers found.');
