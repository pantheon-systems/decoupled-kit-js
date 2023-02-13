/**
 * Transforms input into a valid package.json `name`
 * @param txt - handlebars rendered string
 * @returns a valid package.json name
 */
export const pkgNameHelper = (txt: string): string => {
	// see https://github.com/dword-design/package-name-regex/blob/2fcb7887bdcf2815ce38f51f9bc333101ab2fd31/src/index.js#L1
	const npmNameRegex = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;

	// turn the string into dash-case if it is not a valid package json name
	return npmNameRegex.test(txt)
		? txt
		: txt
				.replace(/([A-Z])([A-Z])/g, '$1-$2')
				.replace(/([a-z])([A-Z])/g, '$1-$2')
				.replace(/[\s_]+/g, '-')
				.toLowerCase();
};
