import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vitest/config';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
		globals: true,
		coverage: {
			reportsDirectory: `./coverage`,
		},
		setupFiles: [path.resolve(__dirname, '__tests__', 'setupFile.ts')],
	},
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, 'src', 'assets'),
			'@components': path.resolve(__dirname, 'src', 'components'),
			'@utils': path.resolve(__dirname, 'src', 'utils'),
		},
	},
});
