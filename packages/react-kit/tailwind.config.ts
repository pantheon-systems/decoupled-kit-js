import daisyui from 'daisyui';
import { type Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {},
	},
	prefix: 'ps-',
	plugins: [daisyui],
} satisfies Config;
