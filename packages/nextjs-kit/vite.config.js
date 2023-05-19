import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const globals = {
	react: 'react',
	'react-dom': 'reactDom',
	'react/jsx-runtime': 'jsxRuntime',
	'next/image': 'Image',
	'next/compat/router': 'Router',
	'next/link': 'Link',
};
const external = [
	'react',
	'react-dom',
	'react/jsx-runtime',
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
				formats: ['cjs', 'umd'],
				fileName: (format) => `nextjs-kit.${format === 'cjs' ? 'cjs' : 'js'}`,
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
