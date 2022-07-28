import { Color, FontSize } from '../../types/tailwindcssPlugin';

export const colorList: Color[] = [
  {
    name: 'primary',
    themeName: 'primary',
    tailwindDefault: 'blue.500',
    hexDefault: '#0073a8',
  },
  {
    name: 'secondary',
    themeName: 'secondary',
    tailwindDefault: 'gray.500',
    hexDefault: '#005075',
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
    tailwindDefault: 'teal.800',
    hexDefault: '#00a8e1',
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
    hexDefault: '#000',
  },
  {
    name: 'pale-pink',
    themeName: 'palePink',
    tailwindDefault: 'pink.100',
    hexDefault: '#ffb3d7',
  },
  {
    name: 'cyan-bluish-gray',
    themeName: 'cyanBluishGray',
    tailwindDefault: 'neutral.300',
    hexDefault: '#ABB8C3',
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
    tailwindDefault: 'orange.600',
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
    tailwindDefault: 'green.700',
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
    tailwindDefault: 'cyan.600',
    hexDefault: '#0693e3',
  },
  {
    name: 'vivid-purple',
    themeName: 'vividPurple',
    tailwindDefault: 'purple.600',
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
