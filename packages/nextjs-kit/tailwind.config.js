/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/components/**/*.tsx'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
