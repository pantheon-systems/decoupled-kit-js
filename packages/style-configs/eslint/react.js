module.exports = {
	plugins: ['react'],
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
