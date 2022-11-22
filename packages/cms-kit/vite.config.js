import { defineConfig } from 'vitest/config';
import typescript from '@rollup/plugin-typescript';

const globals = {
	http: 'http',
};
const external = ['http'];

/** @type {import('vite').defineConfig} */
export default defineConfig(() => {
	return {
		plugins: [typescript()],
		build: {
			lib: {
				entry: './index.ts',
				name: 'cms-kit',
				formats: ['umd', 'es'],
				fileName: (format) => `cms-kit.${format}.js`,
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
