// TODO ensure only tagged templates are linted
// but make sure other ts files are linted
module.exports = {
	// lint tagged templates
	'./src/templates/**/*.{ts,tsx,css,json}.ts': [
		`eslint --fix --config ./.eslintrc --ignore-pattern **/src/templates/**/*.{d.ts,ts,jsx,tsx,snap}`,
		`prettier --write --ignore-path ../../.prettierignore`,
	],
	// lint everything except templates
	'./src/**/*': [
		`eslint --fix --config ./.eslintrc --ignore-pattern **/src/templates/**/*`,
		`prettier --write --ignore-path ../../.prettierignore`,
	],
};
