/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
	plugins: ['react'],
	extends: [
		'./index.js',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/jsx-runtime',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
};
