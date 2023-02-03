import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => {
	const locales = `\['en'\]`;
	return {
		test: {
			globals: true,
			setupFiles: ['__tests__/setupFile.js'],
			coverage: {
				reportsDirectory: `./coverage`,
			},
			resolveSnapshotPath: (testPath, snapExtension) =>
				path.resolve(
					__dirname,
					'__tests__',
					'__snapshots__',
					`${testPath.split('snapshotTests/')[1]}${snapExtension}`,
				),
		},
		plugins: [react()],
		define: {
			// Mock environment variables
			'process.env.backendUrl': JSON.stringify('https://default'),
			'process.env.BACKEND_URL': JSON.stringify('https://default'),
			'process.env.locales': locales,
			'process.env.CLIENT_ID': JSON.stringify('default_client_id'),
			'process.env.CLIENT_SECRET': JSON.stringify('default_client_secret'),
		},
	};
});
