import { defineConfig } from 'vitest/config';

/** @type {import('vitest').defineConfig} */
export default defineConfig(() => {
	return {
		test: {
			outputTruncateLength: Infinity,
			globals: true,
			coverage: {
				reportsDirectory: `./coverage`,
			},
		},
	};
});
