// @ts-check
/**
 * Generates options for docusaurus-plugin-typedoc
 * given a package name and position for the sidebar.
 * @param {string} packageName
 * @param {number} position
 * @returns TypeDocOptions
 */
const generateTypedocOptions = (packageName, position) => {
	const options = {
		compilerOptions: {
			noEmit: true,
		},
		entryPoints: [`../packages/${packageName}/src`],
		tsconfig: `../packages/${packageName}/tsconfig.json`,
		readme: `../packages/${packageName}/README.md`,
		out: `Packages/${packageName}`,
		entryPointStrategy: 'expand',
		exclude: [
			'./main.ts',
			'**/node_modules/**',
			'**/__tests__/**',
			'**/vite-env.d.ts',
		],
		sidebar: {
			categoryLabel: `${packageName}`,
			position: position,
		},
	};

	/** @type {import('typedoc').Options} */
	return options;
};

module.exports = generateTypedocOptions;
