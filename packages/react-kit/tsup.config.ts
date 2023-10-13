import { defineConfig } from 'tsup';

export default defineConfig({
	tsconfig: './tsconfig.build.json',
	entry: ['./src/**/*.{tsx,ts}', './src/style.css'],
	splitting: true,
	treeshake: true,
	dts: true,
	clean: true,
	outDir: './dist',
	format: ['esm', 'cjs'],
	minify: true,
	platform: 'neutral',
});
