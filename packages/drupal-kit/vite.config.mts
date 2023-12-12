import { defineConfig } from 'vite';
// import dts from 'vite-plugin-dts';

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

export default defineConfig(() => {
	return {
		build: {
			lib: {
				entry: './src/index.ts',
				name: 'drupal-kit',
				formats: ['cjs', 'es'],
				fileName: (format) => `drupal-kit.${format === 'es' ? 'mjs' : 'js'}`,
			},
			rollupOptions: {
				external,
				treeshake: true,
				output: {
					exports: 'named',
					globals,
				},
			},
		},
		test: {
			globals: true,
			setupFiles: ['__tests__/setupFile.ts'],
		},
	};
});
