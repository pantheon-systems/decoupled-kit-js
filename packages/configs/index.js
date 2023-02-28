module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	env: {
		node: true,
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'prettier',
		'plugin:prettier/recommended',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	ignorePatterns: ['/node_modules', 'build', 'static', 'public'],
};
