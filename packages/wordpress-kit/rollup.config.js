import typescript from '@rollup/plugin-typescript';

const globals = {
  '@apollo/client': 'apolloClient',
  'isomorphic-fetch': 'isomorphicFetch',
};

const external = ['@apollo/client', 'isomorphic-fetch'];

export default [
  {
    input: 'index.ts',
    external,
    output: {
      file: 'dist/wordpress-kit.es.js',
      format: 'es',
      globals,
    },
    plugins: [typescript()],
  },
  {
    input: 'index.ts',
    external,
    output: {
      file: 'dist/wordpress-kit.umd.js',
      format: 'umd',
      name: 'WordpressKit',
      globals,
    },
    plugins: [typescript()],
  },
];
