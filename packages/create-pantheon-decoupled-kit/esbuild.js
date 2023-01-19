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
};
try {
	const result = await build(buildOptions);
	console.log(chalk.green('Build successful!'));
} catch (error) {
	console.error(chalk.red('Something went wrong:\n'), error);
}
