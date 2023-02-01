#!/usr/bin/env vite-node
import fs from 'fs-extra';
import chalk from 'chalk';

try {
	fs.copySync('./src/templates', './dist/templates');
	console.log(chalk.green('Templates copied!'));
} catch (error) {
	console.error(chalk.red('Templates were not copied:\n'), error);
}
