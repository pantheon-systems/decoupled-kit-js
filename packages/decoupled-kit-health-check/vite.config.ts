import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		setupFiles: '/__tests__/setupFile.ts',
		coverage: {
			provider: 'v8',
			reportsDirectory: 'coverage',
			exclude: ['**/__mocks__/**', '**/__tests__/**'],
		},
	},
});
