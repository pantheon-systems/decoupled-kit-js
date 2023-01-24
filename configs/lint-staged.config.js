module.exports = {
	'*.{js,ts,jsx,tsx}': [
		'eslint --fix --ignore-path ../../.prettierignore',
		'prettier --write --ignore-path ../../.prettierignore',
	],
	'*.{md,mdx}': 'prettier --write',
};
