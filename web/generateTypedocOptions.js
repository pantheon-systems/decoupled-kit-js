//@ts-check

/**
 * Generates options for docusaurus-plugin-typedoc
 * given a package name and position for the sidebar.
 * @param {string} packageName
 * @param {number} sidebarPosition
 * @param {object} configOptions extra or overriding tsconfig options
 * @returns Docusaurus TypeDoc plugin options
 */
const generateTypeDocOptions = ({
	packageName,
	sidebarPosition,
	configOptions,
}) => {
	/** @type {import('typedoc').Options} */
	const options = {
		// typedoc options
		entryPoints: configOptions?.entryPoints || [
			`../packages/${packageName}/src/index.ts`,
		],
		tsconfig: `../packages/${packageName}/tsconfig.json`,
		readme: `../packages/${packageName}/README.md`,
		out: `Packages/${packageName}`,
		entryPointStrategy: 'resolve',
		// docusaurus-plugin-typedoc options
		cleanOutputDir: true,
		sidebar: {
			categoryLabel: `${packageName}`,
			position: sidebarPosition,
		},
	};
	Object.assign(options, configOptions);

	return [
		'docusaurus-plugin-typedoc',
		{
			id: `api-${sidebarPosition + 1}`,
			...options,
		},
	];
};

// configs to pass into the generateTypeDocOptions function
const packages = [
	{
		packageName: 'drupal-kit',
		sidebarPosition: 0,
	},
	{
		packageName: 'wordpress-kit',
		sidebarPosition: 1,
	},
	{
		packageName: 'cms-kit',
		sidebarPosition: 2,
	},
	{
		packageName: 'nextjs-kit',
		sidebarPosition: 3,
	},
	{
		packageName: 'react-kit',
		sidebarPosition: 4,
		configOptions: {
			entryPoints: [
				'../packages/react-kit/src/components/Button/index.tsx',
				'../packages/react-kit/src/components/Header/index.tsx',
				'../packages/react-kit/src/components/Row/index.tsx',
			],
			tsconfig: '../packages/react-kit/tsconfig.build.json',
		},
	},
	{
		packageName: 'create-pantheon-decoupled-kit',
		sidebarPosition: 5,
		configOptions: {
			entryPoints: ['../packages/create-pantheon-decoupled-kit/index.ts'],
			tsconfig:
				'../packages/create-pantheon-decoupled-kit/tsconfig.typedoc.json',
		},
	},
	{
		packageName: 'decoupled-kit-health-check',
		sidebarPosition: 6,
	},
];

// map over the configs. returns the generatedTypeDocOptions to pass into the docusaurus config
module.exports = packages.map(generateTypeDocOptions);
