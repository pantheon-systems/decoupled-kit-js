import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'index.ts',
    output: {
      file: 'dist/wordpress-kit.es.js',
      format: 'es',
    },
    plugins: [typescript()],
  },
  {
    input: 'index.ts',
    output: {
      file: 'dist/wordpress-kit.umd.js',
      format: 'umd',
      name: 'WordpressKit',
    },
    plugins: [typescript()],
  },
];
