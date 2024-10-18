import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  input: 'src/index.js',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'auto',
      sourcemap: true,
      entryFileNames: 'uniparser.cjs.js',
    },
    {
      dir: 'dist/esm',
      format: 'es',
      sourcemap: true,
      entryFileNames: 'uniparser.esm.js',
    },
  ],
  plugins: [
    resolve({
      preferBuiltins: false,
    }),
    commonjs(),
    json(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env'],
      exclude: 'node_modules/**',
    }),
    copy({
      targets: [
        { src: 'node_modules/pdfjs-dist/build/pdf.worker.mjs', dest: 'dist/' },
      ],
    }),
    {
      // Create separate entry points for ES modules and CommonJS
      name: 'create-index',
      writeBundle() {
        // Generate index.mjs for ES modules
        const esmIndexPath = path.resolve(__dirname, 'dist', 'index.mjs');
        const esmContent = `
          import * as UniParser from './esm/uniparser.esm.js';
          export const { autoParse, parseMarkdown, parseHTML, parseTXT, parsePDF, parseDOCX } = UniParser;
          export default UniParser;
        `;
        fs.writeFileSync(esmIndexPath, esmContent);

        // Generate index.cjs for CommonJS
        const cjsIndexPath = path.resolve(__dirname, 'dist', 'index.cjs');
        const cjsContent = `
          'use strict';
          const UniParser = require('./cjs/uniparser.cjs.js');
          module.exports = UniParser;
        `;
        fs.writeFileSync(cjsIndexPath, cjsContent);
      },
    },
  ],
};
