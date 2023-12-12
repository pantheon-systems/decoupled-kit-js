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


export default defineConfig(() => {
	return {
		build: {
			lib: {
				entry: './src/index.ts',
				name: 'wordpress-kit',
				formats: ['cjs', 'es'],
				fileName: (format) => `wordpress-kit.${format === 'es' ? 'mjs' : 'js'}`,
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
