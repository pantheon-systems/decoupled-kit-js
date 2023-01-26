import fs from 'fs-extra';
import klaw from 'klaw';
import path from 'path';

/**
 * Gets all handlebars templates in `${rootDir}/templates/partials`
 * @param rootDir - dir to look for the partials dir from
 * @returns an array of partials
 * @remarks
 * a single partial:
 * ```
 * {
 * 	name: 'myPartial',
 * 	partial: '...(a handlebars template here)'
 * }
 * ```
 */
export const getPartials = async (rootDir: string) => {
	const partialsDir = path.resolve(rootDir, 'templates', 'partials');
	const partials = [];
	for await (const file of klaw(partialsDir)) {
		if (file.stats.isDirectory()) continue;
		const fileName = path.basename(file.path);
		file.path.endsWith('.hbs') &&
			partials.push({
				name: fileName.replace(/\.hbs$/, ''),
				partial: fs.readFileSync(file.path, 'utf-8'),
			});
	}
	return partials;
};
