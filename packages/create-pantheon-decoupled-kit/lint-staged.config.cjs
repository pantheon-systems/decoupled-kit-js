module.exports = {
	// lint tagged templates
	'./src/templates/**/*.{module.css,ts,tsx,json,env.*}.ts': [
		`eslint --fix --config ./.eslintrc --no-eslintrc  --ignore-path .gitignore`,
		`prettier --write --ignore-path ../../.prettierignore`,
	],
	// lint everything except templates
	'"./src/*.ts" "./src/actions/**" "./src/generators/**"  "./src/utils/**"': [
		`eslint --fix --config ./.eslintrc --no-eslintrc  --ignore-path .gitignore`,
		`prettier --write --ignore-path ../../.prettierignore`,
	],
};
