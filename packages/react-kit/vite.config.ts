import path from 'node:path';
import { defineConfig } from 'vitest/config';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig(() => {
	return {
		test: {
			environment: 'jsdom',
			globals: true,
			coverage: {
				reportsDirectory: `./coverage`,
			},
		},
		resolve: {
			alias: {
				'@components': path.resolve(__dirname, 'src', 'components'),
			},
		},
	};
});
