import typescript from '@rollup/plugin-typescript';

const globals = {
  humps: 'humps',
  'isomorphic-fetch': 'isomorphicFetch',
  '@apollo/client/core': 'apolloCore',
  '@gdwc/drupal-state': 'DrupalState',
};
const external = [
  'humps',
  'isomorphic-fetch',
  '@apollo/client/core',
  '@gdwc/drupal-state',
];

export default [
  {
    input: 'index.ts',
    external,
    output: {
      file: 'dist/drupal-kit.es.js',
      format: 'es',
      globals,
    },
    plugins: [typescript()],
  },
  {
    input: 'index.ts',
    external,
    output: {
      file: 'dist/drupal-kit.umd.js',
      format: 'umd',
      name: 'DrupalKit',
      globals,
    },
    plugins: [typescript()],
  },
];
