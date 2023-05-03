import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';

const globals = {
	'isomorphic-fetch': 'isomorphicFetch',
	'@gdwc/drupal-state': 'DrupalState',
	'@pantheon-systems/cms-kit': 'cmsKit',
};
const external = [
	'isomorphic-fetch',
	'@gdwc/drupal-state',
	'@pantheon-systems/cms-kit',
];

/** @type {import('vite').defineConfig} */
export default defineConfig(() => {
	return {
		test: {
			globals: true,
			setupFiles: ["__tests__/setupFile.ts"]
		},
		plugins: [dts({ insertTypesEntry: true })],
		build: {
			lib: {
				entry: './index.ts',
				name: 'drupal-kit',
				formats: ['umd', 'es'],
				fileName: (format) => `drupal-kit.${format}.js`,
			},
			rollupOptions: {
				external,
				output: {
					globals,
				},
			},
		},
	};
});
