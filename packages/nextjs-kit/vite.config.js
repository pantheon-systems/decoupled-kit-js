import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

const globals = {
  react: 'react',
  'react-dom': 'reactDom',
  'react/jsx-runtime': 'reactJsxRuntime',
  next: 'next',
  'next/link': 'Link',
};
const external = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  'next',
  'next/link',
];

/** @type {import('vite').defineConfig} */
export default defineConfig(() => {
  return {
    plugins: [react(), dts({ insertTypesEntry: true })],
    build: {
      lib: {
        entry: './index.ts',
        name: 'nextjs-kit',
        formats: ['umd', 'es'],
        fileName: format => `nextjs-kit.${format}.js`,
      },
      rollupOptions: {
        external,
        output: {
          globals,
        },
      },
    },
    test: {
      globals: true,
      coverage: {
        reportsDirectory: `./coverage`,
      },
    },
  };
});
