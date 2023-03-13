import chalk from 'chalk';
import fs from 'fs-extra';
import klaw from 'klaw';
import path from 'path';
const rootDir = new URL('.', import.meta.url).pathname;
const pkgsPath = path.resolve(rootDir, '..', '..');

const getPkgPaths = async () => {
	// filters out most dirs because we
	// only care about package.json
	const filterFunc = (item: string) => {
		if (
			fs.lstatSync(item).isFile() ||
			(!item.includes('node_modules') &&
				!item.includes('create-pantheon-decoupled-kit'))
		) {
			return true;
		}
		return false;
	};
	const pkgPaths = [];
	const klawOptions = {
		filter: filterFunc,
		depthLimit: 2,
	};
	for await (const { path } of klaw(pkgsPath, klawOptions)) {
		path.endsWith('package.json') && pkgPaths.push(path);
	}
	return pkgPaths;
};

const getVersions = async () => {
	const outputObj = {};
	const pkgPaths = await getPkgPaths();
	pkgPaths.forEach((pkgPath) => {
		// get the parent dir name which is
		// used as the key for the output
		const pkg = path.parse(path.dirname(pkgPath)).name;
		try {
			const pkgJson: unknown = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
			let version;
			if (pkgJson && typeof pkgJson === 'object' && 'version' in pkgJson) {
				version = pkgJson.version as string;
			}
			if (!version) {
				console.error(`No version found for ${pkg}`);
				return;
			}
			Object.assign(outputObj, { [pkg]: version });
		} catch (error) {
			// swallow the error if there is no pkg json
		}
	});

	const outputPath = path.resolve(rootDir, '..', 'src', 'pkgVersions.json');
	try {
		const output = JSON.stringify(outputObj, null, 2);
		fs.writeFileSync(outputPath, output);
		console.log(chalk.green('Versions updated:'));
		console.log(output);
	} catch (error) {
		console.error(error);
	}
};

await getVersions();
