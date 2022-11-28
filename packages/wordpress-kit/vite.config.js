import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';

const globals = {
	'graphql-request': 'graphqlRequest',
	'tailwindcss/plugin': 'tailwindcssPlugin',
	'@pantheon-systems/cms-kit': 'cmsKit',
	http: 'http',
};

const external = [
	'graphql',
	'graphql-request',
	'tailwindcss/plugin',
	'@pantheon-systems/cms-kit',
	'http',
];

/** @type {import('vite').defineConfig} */
export default defineConfig(() => {
	return {
		plugins: [typescript()],
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
		test: {
			globals: true,
			setupFiles: ['./__tests__/setupFile.ts'],
			coverage: {
				reportsDirectory: `./coverage`,
			},
		},
	};
});
