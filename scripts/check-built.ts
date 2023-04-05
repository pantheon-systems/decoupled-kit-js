#!/usr/bin/env tsx
import { readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import pkgJson from '../package.json';
const execPromise = promisify(exec);

/**
 * Builds all packages that have not already been built
 * @remarks This should save some time on postinstall, however it may still be required to run `pnpm build:all` to get latest changes
 */
const checkBuilt = async () => {
	const pkgs = readdirSync(resolve(process.cwd(), 'packages'));

	const pkgsToBuild = [];

	for (let pkg of pkgs) {
		const distPath = existsSync(
			resolve(process.cwd(), 'packages', pkg, 'dist'),
		);
		if (!distPath) {
			pkgsToBuild.push(pkg);
		} else {
			console.log(`${pkg} built.`);
		}
	}

	pkgsToBuild.forEach((pkg) => {
		if (pkg === 'create-pantheon-decoupled-kit') pkg = 'cli';
		try {
			//@ts-ignore
			if (pkgJson.scripts[`build:${pkg}`]) {
				console.log(`Building ${pkg}...`);
				execPromise(`pnpm build:${pkg}`, { encoding: 'utf-8' }).then(() =>
					console.log(`${pkg} ...done!`),
				);
			}
		} catch (error) {
			console.error(error);
		}
	});
};

checkBuilt();
