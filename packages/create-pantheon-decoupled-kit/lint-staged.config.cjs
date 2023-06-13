// TODO ensure only tagged templates are linted
// but make sure other ts files are linted
module.exports = {
	'./src/templates/**/*.ts.ts': [
		`eslint --fix --config ./.eslintrc --ignore-pattern **/src/templates/**/*.{d.ts,ts,jsx,tsx}`,
		`prettier --write --ignore-path ../../.prettierignore`,
	],
	'./src/**/*': [
		`eslint --fix --config ./.eslintrc --ignore-pattern **/src/templates/**/*`,
		`prettier --write --ignore-path ../../.prettierignore`,
	],
};
