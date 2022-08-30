module.exports = {
	"*.{js,ts}": [
		"eslint --fix",
		"prettier --write"
	],
	"*.{md,mdx}": "prettier --write"
}