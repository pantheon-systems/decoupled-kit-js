const path = require('path');
const prettierIgnorePath = path.resolve(__dirname, '..', '.prettierignore')
module.exports = {
	'*.{js,ts,jsx,tsx}': [
		`eslint --fix --ignore-path ${prettierIgnorePath}`,
		`prettier --write --ignore-path ${prettierIgnorePath}`,
	],
	'*.{md,mdx}': 'prettier --write',
};
