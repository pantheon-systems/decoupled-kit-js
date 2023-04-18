import fs from 'fs-extra';
import type { HelperDelegate, Template } from 'handlebars';
import Handlebars from 'handlebars';
import klaw from 'klaw';
import path from 'path';

/**
 * Handlebars {@link HelperDelegate}
 */
export const hbsHelpers: { [key: string]: HelperDelegate } = {
	/**
	 * Transforms input into a valid package.json `name`
	 * @param txt - handlebars rendered string
	 * @returns a valid package.json name
	 */
	pkgName: (txt: string): string => {
		// see https://github.com/dword-design/package-name-regex/blob/2fcb7887bdcf2815ce38f51f9bc333101ab2fd31/src/index.js#L1
		const npmNameRegex =
			/^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;

		// turn the string into dash-case if it is not a valid package.json name
		return npmNameRegex.test(txt)
			? txt
			: txt
					.replace(/([A-Z])([A-Z])/g, '$1-$2')
					.replace(/([a-z])([A-Z])/g, '$1-$2')
					.replace(/[\s_]+/g, '-')
					.toLowerCase();
	},
	/**
	 * Appends '/wp/graphql' to the input
	 * @param txt - handlebars rendered string
	 * @returns `${txt}/wp/graphql or txt if it already ends with /wp/graphql
	 */
	wpGraphql: (txt: string): string => {
		const wpGraphqlUrlRegex = /\/wp\/graphql\/?$/;
		// trim trailing /
		return wpGraphqlUrlRegex.test(txt)
			? txt
			: `${txt.replace(/\/$/, '')}/wp/graphql`;
	},
};

/**
 * Gathers all handlebars templates in `${rootDir}/templates/partials`
 * to be registered in the handlebars instance
 * @param rootDir - dir to look for the partials dir from
 * @example resolves to {rootDir}/templates/partials
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
const getPartials = async (
	rootDir: string,
): Promise<{ name: string; partial: Template }[]> => {
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

/**
 *
 * @param helpers an object containing handlebars helpers
 * @returns an array of helpers
 */
const getHelpers = (
	helpers: typeof hbsHelpers,
): { name: string; helper: HelperDelegate }[] => {
	return Object.keys(helpers).map((key) => ({
		name: key,
		helper: helpers[key],
	}));
};

/**
 *
 * @param options.rootDir the root dir of the script. Used to find the templates.
 * @param options.helpers custom handlebars helpers to be registered to the
 * handlebars instance
 * @returns an instance of handlebars with all helpers and partials registered
 */
const createHandlebarsInstance = async (options: {
	rootDir: string;
	helpers: typeof hbsHelpers;
}) => {
	const hbs = Handlebars.create();
	const partialsArr = await getPartials(options.rootDir);
	const helpersArr = getHelpers(options.helpers);

	partialsArr.forEach(({ name, partial }) =>
		hbs.registerPartial(name, partial),
	);
	helpersArr.forEach(({ name, helper }) => hbs.registerHelper(name, helper));

	return hbs;
};

/**
 *
 * @param rootDir - dir to look for the partials dir from
 * @example resolves to {rootDir}/templates/partials
 * @returns an instance of handlebars our with helpers and partials registered
 */
export const getHandlebarsInstance = async (rootDir: string) => {
	const hbs = await createHandlebarsInstance({ rootDir, helpers: hbsHelpers });
	return hbs;
};
