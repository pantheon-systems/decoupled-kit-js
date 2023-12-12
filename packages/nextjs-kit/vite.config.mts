import { defineConfig } from 'vitest/config';

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
