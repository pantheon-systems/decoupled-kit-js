import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
	return {
		test: {
			globals: true,
			// setupFiles: ['__tests__/setupFile.js'],
			coverage: {
				reportsDirectory: `./coverage`,
			},
		},
		plugins: [react()],
		define: {
			'process.env.backendUrl': JSON.stringify(
				'https://my-wordpress-site.pantheon.io/wp/graphql',
			),
			'process.env.WP_APPLICATION_USERNAME': JSON.stringify(`decoupled_user`),
			'process.env.WP_APPLICATION_PASSWORD': JSON.stringify(
				'abcd efgh ijkl mnop',
			),
		},
	};
});
