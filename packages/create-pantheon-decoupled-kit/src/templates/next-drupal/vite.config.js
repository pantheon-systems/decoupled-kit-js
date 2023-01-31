import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
	console.log(`Running tests for the ${mode} profile...`);
	const locales = mode === 'umami' ? `\['en', 'es'\]` : `\['en'\]`;
	return {
		test: {
			globals: true,
			setupFiles: ['__tests__/setupFile.js'],
			coverage: {
				reportsDirectory: `./coverage/${mode}`,
			},
			resolveSnapshotPath: (testPath, snapExtension) =>
				path.resolve(
					__dirname,
					'__tests__',
					'__snapshots__',
					mode,
					`${testPath.split('snapshotTests/')[1]}${snapExtension}`,
				),
		},
		plugins: [react()],
		define: {
			// Set a global variable for the current profile
			PROFILE: JSON.stringify(mode),
			// Mock environment variables
			'process.env.backendUrl': JSON.stringify(`https://${mode}`),
			'process.env.BACKEND_URL': JSON.stringify(`https://${mode}`),
			'process.env.locales': locales,
			'process.env.CLIENT_ID': JSON.stringify(`${mode}_client_id`),
			'process.env.CLIENT_SECRET': JSON.stringify(`${mode}_client_secret`),
		},
	};
});
