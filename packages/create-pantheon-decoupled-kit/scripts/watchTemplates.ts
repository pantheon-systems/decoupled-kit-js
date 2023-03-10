import chalk from 'chalk';
import chokidar from 'chokidar';
import path from 'path';
import { main } from '../src/index';
import { watchOptions } from '../watch';
import { decoupledKitGenerators } from '../src/generators/index';

const templatesPath = path.resolve(process.cwd(), './src/templates');

const ready = () => {
	console.log(chalk.yellow('⌛️ Generating initial app...'));
	runMain(true);
	console.log(
		chalk.green('👁  App is ready. Watching for changes to templates..'),
	);
};

const change = (event: string, path: string) => {
	const color =
		event === 'change'
			? chalk.cyan
			: event === 'unlink'
			? chalk.red
			: event === 'add'
			? chalk.green
			: chalk.white;
	console.log(color(`${event}`), `${path.split(process.cwd())[1]}`);
	runMain(false);
};

const runMain = (init: boolean) => {
	if (!watchOptions) {
		console.error(
			'No watch options found. Add a watch.{ts,js} at the root of the create-pantheon-decoupled-kit directory. See the README for more info',
		);
	}
	if (init) {
		main(watchOptions, decoupledKitGenerators).catch(console.error);
	} else {
		watchOptions.noInstall = true;
		main(watchOptions, decoupledKitGenerators).catch(console.error);
	}
};

const watcher = chokidar
	.watch(templatesPath, {
		ignoreInitial: true,
		usePolling: true,
		interval: Number(watchOptions?.debounce) || 0,
	})
	.on('ready', () => ready())
	.on('all', (event, path) => change(event, path));

// clean up watcher to avoid memory leaks during HMR
process.on('exit', () => {
	watcher.close().catch(console.error);
});
