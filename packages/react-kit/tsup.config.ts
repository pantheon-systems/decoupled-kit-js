import { defineConfig } from 'tsup';

export default defineConfig({
	tsconfig: './tsconfig.build.json',
	entry: [
		'./src/**/*.{tsx,ts}',
		'./src/index.css',
		'!./src/types.d.ts',
		'!./src/**/*.stories.{tsx,ts}',
	],
	splitting: true,
	treeshake: true,
	dts: true,
	clean: true,
	outDir: './dist',
	format: ['esm', 'cjs'],
	minify: true,
	external: ['react', 'react-dom', 'tailwindcss'],
	platform: 'neutral',
});
