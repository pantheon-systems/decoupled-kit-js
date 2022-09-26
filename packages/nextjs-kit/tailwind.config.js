/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/components/**/*.tsx'],
	safelist: [
		{
			pattern: /grid-cols-([0-9])/,
			variants: ['lg'],
		},
	],
	theme: {
		extend: {},
	},
	prefix: 'ps-',
	plugins: [require('@tailwindcss/typography')],
};
