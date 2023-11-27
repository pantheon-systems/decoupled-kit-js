import { isString } from '@cli/types';

/**
 * Valid langs for markdown code-fences
 */
type Lang = 'bash' | 'js' | 'ts' | 'tsx' | 'jsx' | 'graphql';

export const taggedTemplateHelpers = {
	/**
	 * @param condition - the condition to check
	 * @param value - the value to render if the condition is true
	 * @returns the value if it a string, or an empty string
	 */
	if: (condition: unknown, value: string) => (condition ? value : ''),
	/**
	 * @param condition - the condition to check
	 * @param value1 - the value to render if the condition is true
	 * @param value2 - the value to render if the condition is false
	 * @returns value1 if the condition is true, otherwise value2
	 */
	ifelse: (condition: unknown, value1: string, value2: string) =>
		condition ? value1 : value2,
	/**
	 * Useful for nested backticks
	 * @param value - the value to render
	 * @returns the value wrapped in backticks
	 */
	backticks: (value: string | TemplateStringsArray) => {
		return `\`${value.toString()}\``;
	},
	/**
	 * Transforms input into a valid package.json `name`
	 * @param value - the value to transform
	 * @returns a valid package.json name
	 */
	pkgName: (value: unknown): string => {
		if (!isString(value))
			throw new TypeError(`Expected string, received ${typeof value}`);

		// see https://github.com/dword-design/package-name-regex/blob/2fcb7887bdcf2815ce38f51f9bc333101ab2fd31/src/index.js#L1
		const npmNameRegex =
			/^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;

		// turn the string into dash-case if it is not a valid package.json name
		return npmNameRegex.test(value)
			? value
			: value
					.replace(/([A-Z])([A-Z])/g, '$1-$2')
					.replace(/([a-z])([A-Z])/g, '$1-$2')
					.replace(/[\s_]+/g, '-')
					.toLowerCase();
	},
	/**
	 * Appends '/wp/graphql' to the input
	 * @param value - the value to append to
	 * @returns `${value}/wp/graphql or txt if it already ends with /wp/graphql
	 */
	wpGraphql: (value: string): string => {
		const wpGraphqlUrlRegex = /\/wp\/graphql\/?$/;
		// trim trailing /
		return wpGraphqlUrlRegex.test(value)
			? value
			: `${value.replace(/\/$/, '')}/wp/graphql`;
	},
	md: {
		/**
		 * Markdown code-fence helper
		 * @param options.lang - the language used in the code fence {@link Lang}
		 * @param options.value - the code inside of the code fence
		 * @returns the value wrapped in a markdown code fence
		 */
		codeFence: ({ lang, value }: { lang: Lang; value: string }) => {
			let result = '```';
			result += `${lang}\n`;
			result += `${value}\n`;
			result += '```';

			return result;
		},
	},
};
