import { defineConfig } from 'vitest/config';

/** @type {import('vite').defineConfig} */
export default defineConfig(() => {
	return {
		test: {
			globals: true,
			setupFiles: ['__tests__/setupFile.ts'],
		},
	};
});
