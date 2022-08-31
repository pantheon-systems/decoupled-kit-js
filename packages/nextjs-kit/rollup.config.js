import typescript from '@rollup/plugin-typescript';
import { getFiles } from './utils/getFiles';

const globals = {
  react: 'react',
  'react-dom': 'reactDom',
  'react/jsx-runtime': 'reactJsxRuntime',
  next: 'next',
  'next/link': 'Link',
  'next/router': 'Router',
};
const external = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  'next',
  'next/link',
  'next/router',
];

export default [
  {
    input: [...getFiles('src/components'), ...getFiles('src/lib')],
    external,
    output: {
      dir: 'dist/es',
      name: 'nextjs-kit',
      format: 'es',
      globals,
    },
    plugins: [typescript()],
  },
  {
    input: 'umd-entrypoint.ts',
    external,
    output: {
      file: 'dist/umd/nextjs-kit.umd.js',
      name: 'NextjsKit',
      format: 'umd',
      esModule: false,
      exports: 'default',
      globals,
    },
    plugins: [typescript()],
  },
];
