import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { Action, isString } from '../types';

/**
 * Describes dependencies, devDependencies
 */
type PkgJsonDeps = {
	[key: string]: { [key: string]: string };
};

/**
 * Adds any dependencies and/or devDependencies
 * from the data field
 */
export const addDependencies: Action = ({ data }) => {
	if (!isString(data.outDir) || !data.outDir)
		throw new Error('outDir is not valid');
	const hasDeps = (arg: unknown): arg is PkgJsonDeps => {
		if (
			arg &&
			typeof arg === 'object' &&
			('dependencies' in arg || 'devDependencies' in arg)
		) {
			return true;
		}
		return false;
	};
	/**
	 * 1. open package.json found in the outDir
	 * 2. merge each dev and prod deps with their match in the package.json
	 */

	try {
		const pkgJsonPath = path.resolve(
			process.cwd(),
			data.outDir,
			'package.json',
		);
		const pkgJson = JSON.parse(
			fs.readFileSync(pkgJsonPath, 'utf-8'),
		) as PkgJsonDeps;
		if (hasDeps(data)) {
			console.log(
				chalk.green(
					`Adding the following to ${chalk.white.bold('package.json')}...\n`,
				),
			);
			for (const key of ['dependencies', 'devDependencies']) {
				if (!data[key]) continue;
				if (!pkgJson[key]) {
					pkgJson[key] = {};
				}
				console.log(
					chalk.white(`${key}: ${JSON.stringify(data[key], null, 2)}`),
				),
					Object.assign(pkgJson[key], data[key]);
			}
			fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2));
		} else {
			console.log(chalk.yellow('No dependencies to add.'));
		}
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`${chalk.cyan('addDependencies:\n')} ${error.message}`);
		}
	}

	return `${chalk.cyan('addDependencies:')} ${chalk.green('success')}`;
};
