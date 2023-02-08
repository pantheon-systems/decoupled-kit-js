import chalk from 'chalk';
import fs from 'fs';
import path, { sep } from 'path';
import { Json } from '../types';

/**
 * Provides `package.json` data
 * @param {string} [pkgPath] path to `package.json`. Default is './package.json'.
 * @returns `package.json` data
 */
export const openPackageJson = (pkgPath?: string) => {
	const filePath = path.resolve(pkgPath ?? `.${sep}package.json`);
	try {
		const data = fs.readFileSync(filePath, 'utf8');
		return data ? (JSON.parse(data) as Json) : undefined;
	} catch (error) {
		console.log(
			chalk.red(
				`The following error occurred while trying to read ${filePath}:`,
			),
		);
		console.log(chalk.red(error));
		return;
	}
};
