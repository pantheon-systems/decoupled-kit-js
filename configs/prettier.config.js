module.exports = {
	useTabs: true,
	singleQuote: true,
	semi: true,
	proseWrap: 'always',
	trailingComma: 'all',
	printWidth: 80,
	arrowParens: 'always',
	bracketSameLine: false,
	overrides: [
		{
			files: ['.github/**/*.yml'],
			options: {
				useTabs: false,
				printWidth: 300,
			},
		},
	],
};
