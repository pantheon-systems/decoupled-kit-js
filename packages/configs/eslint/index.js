/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	env: {
		node: true,
	},
	plugins: ['@typescript-eslint'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
	],
	extends: ['prettier', 'plugin:prettier/recommended', 'eslint:recommended'],
	ignorePatterns: ['/node_modules', 'build', 'static', 'public'],
};
