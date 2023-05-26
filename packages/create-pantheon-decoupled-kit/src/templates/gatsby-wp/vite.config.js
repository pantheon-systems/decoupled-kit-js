import { defineConfig } from 'vitest/config';

export default defineConfig(() => {
	return {
		test: {
			globals: true,
			setupFiles: './__tests__/setupFile.js',
			environment: 'jsdom',
			coverage: {
				reportsDirectory: `./coverage`,
			},
		},
		define: {
			'process.env.backendUrl': JSON.stringify(
				'https://my-wordpress-site.pantheon.io/wp/graphql',
			),
		},
	};
});
