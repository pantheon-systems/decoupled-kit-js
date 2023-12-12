import chalk from 'chalk';
import { build } from 'esbuild';
import { glob } from 'glob';

/** @type {import('esbuild').BuildOptions} */
const buildOptions = {
	entryPoints: [
		'./src/bin.ts',
		// compile tagged templates to js
		...(await glob(
			'./src/templates/**/*.{css,jsx,tsx,ts,js,json,md,env.*}.ts',
			{
				dot: true,
			},
		)),
	],
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
