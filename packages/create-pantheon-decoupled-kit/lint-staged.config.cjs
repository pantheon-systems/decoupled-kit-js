module.exports = {
	'./src/templates/**/*.{ts.ts}': [
		`eslint --fix --config ./.eslintrc --ignore-pattern **/src/templates/**/*.{d.ts,ts,jsx,tsx}`,
		`prettier --write --ignore-path ../../.prettierignore`,
	],
};
