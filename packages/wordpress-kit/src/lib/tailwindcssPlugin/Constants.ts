import { Color, FontSize } from '../../types';

export const colorList: Color[] = [
	{
		name: 'primary',
		themeName: 'primary',
		tailwindDefault: 'teal.900',
		hexDefault: '#1a4548',
	},
	{
		name: 'secondary',
		themeName: 'secondary',
		tailwindDefault: 'orange.200',
		hexDefault: '#ffe2c7',
	},
	{
		name: 'dark-gray',
		themeName: 'darkGray',
		tailwindDefault: 'neutral.800',
		hexDefault: '#333333',
	},
	{
		name: 'light-gray',
		themeName: 'lightGray',
		tailwindDefault: 'neutral.500',
		hexDefault: '#666666',
	},
	{
		name: 'white',
		themeName: 'white',
		tailwindDefault: 'white',
		hexDefault: '#ffffff',
	},
	// WP 6 support
	{
		name: 'tertiary',
		themeName: 'tertiary',
		tailwindDefault: 'stone.100',
		hexDefault: '#f6f6f6',
	},
	{
		name: 'background',
		themeName: 'background',
		tailwindDefault: 'white',
		hexDefault: '#ffffff',
	},
	{
		name: 'foreground',
		themeName: 'foreground',
		tailwindDefault: 'black',
		hexDefault: '#000000',
	},
	{
		name: 'pale-pink',
		themeName: 'palePink',
		tailwindDefault: 'rose.400',
		hexDefault: '#ffb3d7',
	},
	{
		name: 'cyan-bluish-gray',
		themeName: 'cyanBluishGray',
		tailwindDefault: 'neutral.300',
		hexDefault: '#abb8c3',
	},
	{
		name: 'vivid-red',
		themeName: 'vividRed',
		tailwindDefault: 'red.700',
		hexDefault: '#cf2e2e',
	},
	{
		name: 'luminous-vivid-orange',
		themeName: 'luminousVividOrange',
		tailwindDefault: 'orange.500',
		hexDefault: '#ff6900',
	},
	{
		name: 'luminous-vivid-amber',
		themeName: 'luminousVividAmber',
		tailwindDefault: 'amber.400',
		hexDefault: '#fcb900',
	},
	{
		name: 'light-green-cyan',
		themeName: 'lightGreenCyan',
		tailwindDefault: 'emerald.300',
		hexDefault: '#7bdcb5',
	},
	{
		name: 'vivid-green-cyan',
		themeName: 'vividGreenCyan',
		tailwindDefault: 'green.500',
		hexDefault: '#00d084',
	},
	{
		name: 'pale-cyan-blue',
		themeName: 'paleCyanBlue',
		tailwindDefault: 'sky.300',
		hexDefault: '#00bcd4',
	},
	{
		name: 'vivid-cyan-blue',
		themeName: 'vividCyanBlue',
		tailwindDefault: 'sky.600',
		hexDefault: '#0693e3',
	},
	{
		name: 'vivid-purple',
		themeName: 'vividPurple',
		tailwindDefault: 'purple.500',
		hexDefault: '#9b51e0',
	},
];

export const fontSizeList: FontSize[] = [
	{
		name: 'huge',
		tailwind: '7xl',
		default: '5rem',
	},
	{
		name: 'large',
		tailwind: '2xl',
		default: '3rem',
	},
	{
		name: 'normal',
		tailwind: 'xl',
		default: '2rem',
	},
	{
		name: 'small',
		tailwind: 'sm',
		default: '1rem',
	},
	// WP 6 support
	{
		name: 'x-large',
		tailwind: '4xl',
		default: '4rem',
	},
];

export const gradientList = [
	{
		name: 'vertical-secondary-to-tertiary',
		direction: 'to bottom',
		colors: [
			{
				color: 'secondary',
				position: '0%',
			},
			{
				color: 'tertiary',
				position: '100%',
			},
		],
	},
	{
		name: 'vertical-secondary-to-background',
		direction: 'to bottom',
		colors: [
			{
				color: 'secondary',
				position: '0%',
			},
			{
				color: 'background',
				position: '100%',
			},
		],
	},
	{
		name: 'vertical-tertiary-to-background',
		direction: 'to bottom',
		colors: [
			{
				color: 'tertiary',
				position: '0%',
			},
			{
				color: 'background',
				position: '100%',
			},
		],
	},
	{
		name: 'diagonal-primary-to-foreground',
		direction: 'to bottom right',
		colors: [
			{
				color: 'primary',
				position: '0%',
			},
			{
				color: 'foreground',
				position: '100%',
			},
		],
	},
	{
		name: 'diagonal-secondary-to-background',
		direction: 'to bottom right',
		colors: [
			{
				color: 'secondary',
				position: '50%',
			},
			{
				color: 'background',
				position: '50%',
			},
		],
	},
	{
		name: 'diagonal-background-to-secondary',
		direction: 'to bottom right',
		colors: [
			{
				color: 'background',
				position: '50%',
			},
			{
				color: 'secondary',
				position: '50%',
			},
		],
	},
	{
		name: 'diagonal-tertiary-to-background',
		direction: 'to bottom right',
		colors: [
			{
				color: 'tertiary',
				position: '50%',
			},
			{
				color: 'background',
				position: '50%',
			},
		],
	},
	{
		name: 'diagonal-background-to-tertiary',
		direction: 'to bottom right',
		colors: [
			{
				color: 'background',
				position: '50%',
			},
			{
				color: 'tertiary',
				position: '50%',
			},
		],
	},
	{
		name: 'vivid-cyan-blue-to-vivid-purple',
		direction: '135deg',
		colors: [
			{
				color: 'vividCyanBlue',
				position: '0%',
			},
			{
				color: 'vividPurple',
				position: '100%',
			},
		],
	},
	{
		name: 'light-green-cyan-to-vivid-green-cyan',
		direction: '135deg',
		colors: [
			{
				color: 'lightGreenCyan',
				position: '0%',
			},
			{
				color: 'vividGreenCyan',
				position: '100%',
			},
		],
	},
	{
		name: 'luminous-vivid-amber-to-luminous-vivid-orange',
		direction: '135deg',
		colors: [
			{
				color: 'luminousVividAmber',
				position: '0%',
			},
			{
				color: 'luminousVividOrange',
				position: '100%',
			},
		],
	},
	{
		name: 'luminous-vivid-orange-to-vivid-red',
		direction: '135deg',
		colors: [
			{
				color: 'luminousVividOrange',
				position: '0%',
			},
			{
				color: 'vividRed',
				position: '100%',
			},
		],
	},
	{
		name: 'very-light-gray-to-cyan-bluish-gray',
		direction: '135deg',
		colors: [
			{
				color: 'lightGray',
				position: '0%',
			},
			{
				color: 'cyanBluishGray',
				position: '100%',
			},
		],
	},
	{
		name: 'cool-to-warm-spectrum',
		direction: '135deg',
		colors: [
			{
				color: '#4aeadc',
				position: '0%',
			},
			{
				color: '#9778d1',
				position: '20%',
			},
			{
				color: '#cf2aba',
				position: '40%',
			},
			{
				color: '#ee2c82',
				position: '60%',
			},
			{
				color: '#fb6962',
				position: '80%',
			},
			{
				color: '#fef84c',
				position: '100%',
			},
		],
	},
	{
		name: 'blush-light-purple',
		direction: '135deg',
		colors: [
			{
				color: '#ffceec',
				position: '0%',
			},
			{
				color: '#9896f0',
				position: '100%',
			},
		],
	},
	{
		name: 'blush-bordeaux',
		direction: '135deg',
		colors: [
			{
				color: '#fecda5',
				position: '0%',
			},
			{
				color: '#fe2d2d',
				position: '50%',
			},
			{
				color: '#6b003e',
				position: '100%',
			},
		],
	},
	{
		name: 'luminous-dusk',
		direction: '135deg',
		colors: [
			{
				color: '#ffcb70',
				position: '0%',
			},
			{
				color: '#c751c0',
				position: '50%',
			},
			{
				color: '#4158d0',
				position: '100%',
			},
		],
	},
	{
		name: 'pale-ocean',
		direction: '135deg',
		colors: [
			{
				color: '#fff5cb',
				position: '0%',
			},
			{
				color: '#b6e3d4',
				position: '50%',
			},
			{
				color: '#33a7b5',
				position: '100%',
			},
		],
	},
	{
		name: 'electric-grass',
		direction: '135deg',
		colors: [
			{
				color: '#caf880',
				position: '0%',
			},
			{
				color: '#71ce7e',
				position: '100%',
			},
		],
	},
	{
		name: 'midnight',
		direction: '135deg',
		colors: [
			{
				color: '#020381',
				position: '0%',
			},
			{
				color: '#2874fc',
				position: '100%',
			},
		],
	},
];
