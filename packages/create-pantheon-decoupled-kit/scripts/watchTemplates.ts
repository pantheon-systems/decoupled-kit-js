/* eslint-disable @typescript-eslint/no-misused-promises */
import chokidar from 'chokidar';
import chalk from 'chalk';
import path from 'path';
import { main } from '../src/index.old';
import { watchOptions } from '../watch';
import { decoupledKitGenerators } from '../src/generators/index';

const templatesPath = path.resolve(process.cwd(), './src/templates');

const ready = async () => {
	console.log(chalk.yellow('⌛️ Generating initial app...'));
	await runMain(true);
	console.log(
		chalk.green('👁  App is ready. Watching for changes to templates..'),
	);
};

const change = async (event: string, path: string) => {
	const color =
		event === 'change'
			? chalk.cyan
			: event === 'unlink'
			? chalk.red
			: event === 'add'
			? chalk.green
			: chalk.white;
	console.log(color(`${event}`), `${path.split(process.cwd())[1]}`);
	await runMain(false);
};

const runMain = async (init: boolean) => {
	try {
		if (init) {
			await main(watchOptions, decoupledKitGenerators);
		} else {
			watchOptions.noInstall = true;
			await main(watchOptions, decoupledKitGenerators);
		}
	} catch (error) {
		console.error(error);
		if (!watchOptions) {
			console.error(
				'No watch options found. Add a watch.{ts,js} at the root of the create-pantheon-decoupled-kit directory. See the README for more info',
			);
		}
		process.exit(1);
	}
};

chokidar
	.watch(templatesPath, { ignoreInitial: true })
	.on('ready', async () => await ready())
	.on('all', async (event, path) => await change(event, path));
