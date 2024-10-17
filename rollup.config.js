import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/uniparser.cjs.js',
      format: 'cjs',
      exports: 'auto',
    },
    {
      file: 'dist/uniparser.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env'],
      exclude: 'node_modules/**',
    }),
  ],
};
