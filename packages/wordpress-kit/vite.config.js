import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const globals = {
	'graphql-request': 'graphqlRequest',
	'tailwindcss/plugin': 'tailwindcssPlugin',
};

const external = ['graphql-request', 'tailwindcss/plugin'];

/** @type {import('vite').defineConfig} */
export default defineConfig(() => {
	return {
		plugins: [dts({ insertTypesEntry: true })],
		build: {
			lib: {
				entry: './index.ts',
				name: 'wordpress-kit',
				formats: ['umd', 'es'],
				fileName: (format) => `wordpress-kit.${format}.js`,
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
