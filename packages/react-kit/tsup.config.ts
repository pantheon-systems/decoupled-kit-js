import { defineConfig } from 'tsup';
import pkgJson from './package.json';

export default defineConfig({
	tsconfig: './tsconfig.build.json',
	entry: [
		'./src/**/*.{tsx,ts}',
		'./src/styles.css',
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
	external: [
		...Object.keys(pkgJson.peerDependencies),
		...Object.keys(pkgJson.devDependencies),
	],
	platform: 'neutral',
});
