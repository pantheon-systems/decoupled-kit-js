import { Color, FontSize } from '../../types/tailwindcssPlugin';

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
