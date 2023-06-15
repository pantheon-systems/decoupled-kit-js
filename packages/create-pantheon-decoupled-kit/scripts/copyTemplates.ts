#!/usr/bin/env tsx
import fs from 'fs-extra';
import chalk from 'chalk';
import { globSync } from 'glob';
import { TAGGED_TEMPLATE_REGEX } from '@cli/utils';
try {
	// select all template files including ones starting with a .
	for await (const file of globSync(['./src/templates/**/*'], { dot: true })) {
		// Only copy non-tagged template files
		if (!TAGGED_TEMPLATE_REGEX.test(file)) {
			if (fs.lstatSync(file).isDirectory()) continue;
			const [, filePath] = file.split(/^src\//);
			await fs.copy(file, `./dist/${filePath}`);
		}
	}
	console.log(chalk.green('Templates copied!'));
} catch (error) {
	console.error(chalk.red('Templates were not copied:\n'), error);
}
