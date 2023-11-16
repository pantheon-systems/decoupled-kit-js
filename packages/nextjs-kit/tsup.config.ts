import { defineConfig } from 'tsup';
import pkgJson from './package.json';

export default defineConfig({
	tsconfig: './tsconfig.build.json',
	entry: [
		'./src/**/*.ts',
		'./src/**/*.tsx',
		'./src/index.ts',
		'./src/style.css',
	],
	splitting: false,
	treeshake: true,
	dts: true,
	clean: true,
	outDir: './dist',
	format: ['esm', 'cjs'],
	external: [
		...Object.keys(pkgJson.peerDependencies),
		...Object.keys(pkgJson.devDependencies),
	],
	minify: true,
	platform: 'neutral',
});
