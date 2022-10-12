const { tailwindcssPlugin } = require('@pantheon-systems/wordpress-kit');

/** @type {import('@pantheon-systems/wordpress-kit').TailwindcssConfig} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		// colors: { extend: 'red' }
		extend: { colors: { extend: 'yellow' } },
	},
	plugins: [require('@tailwindcss/typography'), tailwindcssPlugin],
};
