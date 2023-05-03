import { defineConfig } from 'vitest/config';

/** @type {import('vitest').defineConfig} */
export default defineConfig(() => {
	return {
		test: {
			globals: true,
			coverage: {
				reportsDirectory: `./coverage`,
			},
		},
	};
});
