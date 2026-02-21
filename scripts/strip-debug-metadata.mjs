#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const mode = process.env.NODE_ENV ?? process.env.MODE ?? 'development';
const targetFile = process.argv[2] ?? 'assets/index-bdojs8c3.js';

if (mode !== 'production') {
  console.log(`[strip-debug-metadata] Skipping in ${mode} mode.`);
  process.exit(0);
}

const original = readFileSync(targetFile, 'utf8');
const cleaned = original
  .replace(/"code-path":"[^"]*",/g, '')
  .replace(/,\"code-path\":\"[^\"]*\"/g, '')
  .replace(/\{\"code-path\":\"[^\"]*\"\}/g, '{}');

if (cleaned === original) {
  console.log(`[strip-debug-metadata] No code-path markers found in ${targetFile}.`);
  process.exit(0);
}

writeFileSync(targetFile, cleaned, 'utf8');
console.log(`[strip-debug-metadata] Removed debug metadata from ${targetFile}.`);
