import typescript from '@rollup/plugin-typescript';

const globals = {
  'graphql-request': 'graphqlRequest',
};

const external = ['graphql-request'];

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
