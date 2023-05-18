import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const globals = {
	react: 'react',
	'react-dom': 'reactDom',
	next: 'next',
	'react/jsx-runtime': 'jsx',
	'next/image': 'Image',
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
		plugins: [react()],
		build: {
			lib: {
				entry: './src/index.ts',
				name: 'nextjs-kit',
				formats: ['cjs', 'es'],
				fileName: (format) => `nextjs-kit.${format === 'es' ? 'mjs' : 'js'}`,
			},
			rollupOptions: {
				external,
				treeshake: true,
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
