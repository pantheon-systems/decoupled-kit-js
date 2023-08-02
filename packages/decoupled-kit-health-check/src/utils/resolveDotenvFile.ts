import path from 'node:path';
import fs from 'node:fs';

/**
 *
 * @param file name of the .env file
 * @returns an object containing a boolean which is true if the
 * file exists, and the path to the file
 */
const dotenvFile = (file: string) => ({
	exists: fs.existsSync(path.resolve(process.cwd(), file)),
	path: path.resolve(process.cwd(), file),
});

/**
 * Resolves the path to a .env or .env.development.local
 * file in the current directory (where the health-check script was called)
 * @returns the path to a .env file or undefined
 */
export const resolveDotenvFile = () => {
	const envDevelopmentLocal = dotenvFile('.env.development.local');
	const envPlain = dotenvFile('.env');
	if (envDevelopmentLocal.exists) {
		return envDevelopmentLocal.path;
	} else if (envPlain.exists) {
		return envPlain.path;
	} else {
		console.log('No .env* file found, assuming production environment.');
		return undefined;
	}
};
