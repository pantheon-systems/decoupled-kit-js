import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'index.ts',
    output: {
      file: 'dist/drupal-kit.es.js',
      format: 'es',
    },
    plugins: [typescript()],
  },
  {
    input: 'index.ts',
    output: {
      file: 'dist/drupal-kit.umd.js',
      format: 'umd',
      name: 'DrupalKit',
    },
    plugins: [typescript()],
  },
];
