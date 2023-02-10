import { build } from 'esbuild';
import chalk from 'chalk';
/** @type {import('esbuild').BuildOptions} */
const buildOptions = {
	entryPoints: ['./src/bin.ts'],
	bundle: true,
	platform: 'node',
	packages: 'external',
	outdir: 'dist',
	format: 'esm',
	minify: true,
	target: 'node16',
	supported: {
		'import-assertions': true,
	},
};
try {
	await build(buildOptions);
	console.log(chalk.green('Build successful!'));
} catch (error) {
	console.error(chalk.red('Build failed:\n'), error);
}
