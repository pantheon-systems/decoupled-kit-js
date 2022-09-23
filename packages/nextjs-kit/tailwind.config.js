/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/components/**/*.tsx'],
	theme: {
		extend: {},
	},
	prefix: 'ps-',
	plugins: [require('@tailwindcss/typography')],
};
