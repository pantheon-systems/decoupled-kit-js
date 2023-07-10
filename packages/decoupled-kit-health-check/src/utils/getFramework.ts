import path from 'node:path';
import fs from 'node:fs';

export const getFramework = () => {
	const pkgPath = path.resolve(process.cwd(), 'package.json');
	const pkgJson = JSON.parse(fs.readFileSync(pkgPath, 'utf8')) as {
		[key: string]: { [key: string]: string };
	};
	if (pkgJson.dependencies.next) {
		return 'next';
	}
	if (pkgJson.dependencies.gatsby) {
		return 'gatsby';
	}
	return 'none';
};
