import react from '@vitejs/plugin-react';
import { configDefaults, defineConfig } from 'vitest/config';

/** @type {import('vitest/config').defineConfig} */
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		setupFiles: './__tests__/setupFile',
		environment: 'jsdom',
		coverage: {
			reportsDirectory: `./coverage`,
		},
		exclude: [...configDefaults.exclude, './__tests__/setupFile.*'],
	},
	define: {
		'process.env.backendUrl': JSON.stringify(
			'https://my-wordpress-site.pantheon.io/wp/graphql',
		),
	},
});
