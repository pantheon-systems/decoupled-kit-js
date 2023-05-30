import { defineConfig } from 'vitest/config';

/** @type {import('vitest/config').defineConfig} */
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
