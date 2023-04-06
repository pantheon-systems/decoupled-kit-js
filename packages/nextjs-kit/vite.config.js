import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import typescript from '@rollup/plugin-typescript';

const globals = {
	react: 'react',
	'react-dom': 'reactDom',
	next: 'next',
	'react/jsx-runtime': 'jsx',
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
	'next/image',
];

/** @type {import('vite').defineConfig} */
export default defineConfig(() => {
	return {
		plugins: [react(), typescript()],
		build: {
			lib: {
				entry: './index.ts',
				name: 'nextjs-kit',
				formats: ['umd', 'es'],
				fileName: (format) => `nextjs-kit.${format}.js`,
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
