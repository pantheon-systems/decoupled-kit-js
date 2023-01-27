import chalk from 'chalk';
import { execSync } from 'child_process';
import { Answers } from 'inquirer';
import { NodePlopAPI } from 'node-plop';
import { RunESLintActionConfig } from '../types';

export const runESLint = (
	answers: Answers,
	config: RunESLintActionConfig,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	_plop: NodePlopAPI,
) => {
	if (typeof answers.outDir !== 'string') return;
	answers.silent || console.log(chalk.green('Linting...'));
	execSync(
		`npx eslint --ext .js,.jsx,.ts,.tsx --fix --env node --parser @typescript-eslint/parser --plugin ${
			config.plugins ? `--plugin ${config.plugins}` : ''
		} --ignore-pattern ${config.ignorePattern} *`,
		{ cwd: answers.outDir, stdio: 'inherit' },
	);
	return 'success';
};
