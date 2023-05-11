import { defineConfig } from 'vite';

const globals = {
	'graphql-request': 'graphqlRequest',
	'tailwindcss/plugin': 'tailwindcssPlugin',
	'@pantheon-systems/cms-kit': 'cmsKit',
};

const external = [
	'graphql',
	'graphql-request',
	'tailwindcss/plugin',
	'@pantheon-systems/cms-kit',
];

/** @type {import('vite').defineConfig} */
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
