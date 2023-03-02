module.exports = {
	plugins: ['react'],
	env: {
		browser: true,
	},
	extends: [
		'./index.js',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
};
