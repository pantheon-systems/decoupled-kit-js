import { build } from 'esbuild';

/** @type {import('esbuild').BuildOptions} */
const buildOptions = {
	entryPoints: ['./src/bin.ts'],
	bundle: true,
	platform: 'node',
	packages: 'external',
	outdir: 'dist',
	format: 'esm',
	minify: true,
	target: ['esnext', 'node16'],
	outExtension: {
		'.js': '.mjs',
	},
};
try {
	await build(buildOptions);
	console.log('Build successful!');
} catch (error) {
	console.error('Build failed:\n', error);
}
