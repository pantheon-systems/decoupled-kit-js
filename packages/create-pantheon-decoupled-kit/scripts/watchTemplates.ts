/* eslint-disable @typescript-eslint/no-misused-promises */
import chokidar from 'chokidar';
import chalk from 'chalk';
import path from 'path';
import { main } from '../src/index';
import { watchOptions } from '../watch';
const templatesPath = path.resolve(process.cwd(), './src/templates');

const ready = async () => {
	console.log(chalk.yellow('⌛️ Generating initial app...'));
	await runMain(true);
	console.log(
		chalk.green('👁  App is ready. Watching for changes to templates..'),
	);
};

const change = async (event: string, path: string) => {
	console.log(chalk.cyan(`${event} ${path.split(process.cwd())[1]}`));
	await runMain(false);
};

const runMain = async (init: boolean) => {
	try {
		if (init) {
			await main(watchOptions);
		} else {
			watchOptions.noInstall = true;
			await main(watchOptions);
		}
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

chokidar
	.watch(templatesPath, { ignoreInitial: true })
	.on('ready', async () => await ready())
	.on('all', async (event, path) => await change(event, path));
