import { defineConfig } from 'vitest/config';

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
