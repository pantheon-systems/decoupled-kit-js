import { build } from 'esbuild';
import chalk from 'chalk';
import { glob } from 'glob';
import tsPaths from 'esbuild-ts-paths';

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
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	plugins: [tsPaths('./tsconfig.json')],
};
try {
	await build(buildOptions);
	console.log(chalk.green('Build successful!'));
} catch (error) {
	console.error(chalk.red('Build failed:\n'), error);
}
