import { defineConfig, defaultExclude } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		coverage: {
			provider: 'c8',
			reportsDirectory: 'coverage',
			exclude: ['**/__mocks__/**'],
		},
		setupFiles: ['./__tests__/setupFile.ts'],
		exclude: [...defaultExclude, './__tests__/setupFile'],
	},
});
