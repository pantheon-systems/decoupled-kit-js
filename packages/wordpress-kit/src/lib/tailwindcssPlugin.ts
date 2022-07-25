import plugin from 'tailwindcss/plugin';

import type { Config } from 'tailwindcss';

type ColorConfig = {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  foreground?: string;
  cyanBluishGray?: string;
  palePink?: string;
  vividRed?: string;
  luminousVividOrange?: string;
  luminousVividAmber?: string;
  lighGreenCyan?: string;
  vividGreenCyan?: string;
  paleCyanBlue?: string;
  vividCyanBlue?: string;
  vividPurple?: string;
  darkGray?: string;
  lightGray?: string;
  white?: string;
};

type PaddingConfig = {
  backgroundX?: string;
  backgroundY?: string;
};

type FontSizeConfig = {
  '7xl'?: string;
  '4xl'?: string;
  xl?: string;
  sm?: string;
};

type WordpressMapConfig = {
  theme?: {
    extend?: {
      /**
       * The colors mapped from the code editor in the WordPress admin.
       * @example
       * ```
       *primary: '#0070f3',
       *secondary: '#ff4081',
       *darkGray: '#333',
       *lightGray: '#fafafa',
       *white: '#fff',
       * ```
       *
       *@default
       * ```
       *primary: value of "blue-500" or '#0073a8',
       *secondary: value of "gray-500" or '#005075',
       *darkGray: value of "neutral-800" or '#333333',
       *lightGray: value of "neutral-500" or '#666666',
       *white: value of "white" or '#ffffff',
       * ```
       */
      colors?: ColorConfig;
      /**
       * Padding applied when the block has a background color.
       * @example
       * ```
       *backgroundX: '2rem',
       *backgroundY: '1rem',
       * ```
       *
       * @default
       * ```
       * backgroundX: value of p-5 or '1.25rem',
       * backgroundY: value of p-9 or '2.35rem',
       * ```
       */
      padding?: PaddingConfig;
      /**
       * The font size map for the code editor in the WordPress admin.
       *
       * ```
       * huge: text-7xl
       * large: text-4xl
       * normal: text-xl
       * small: text-sm
       *```
       *
       * @example
       * ```
       *"7xl": 5rem;
       *"4xl": 4rem;
       *xl: 2rem;
       *sm: 1rem;
       * ```
       *
       * @default
       * ```
       * "7xl": '5rem',
       * "4xl": '4rem',
       * xl: '1.25rem',
       * sm: '1rem',
       */
      fontSize?: FontSizeConfig;
    };
    /**
     * The colors mapped from the code editor in the WordPress admin.
     * @example
     * ```
     *primary: '#0070f3',
     *secondary: '#ff4081',
     *darkGray: '#333',
     *lightGray: '#fafafa',
     *white: '#fff',
     * ```
     *
     *@default
     * ```
     *primary: value of "blue-500" or '#0073a8',
     *secondary: value of "gray-500" or '#005075',
     *darkGray: value of "neutral-800" or '#333333',
     *lightGray: value of "neutral-500" or '#666666',
     *white: value of "white" or '#ffffff',
     * ```
     */
    colors?: ColorConfig;
    /**
     * Padding applied when the block has a background color.
     * @example
     * ```
     *backgroundX: '2rem',
     *backgroundY: '1rem',
     * ```
     *
     * @default
     * ```
     * backgroundX: value of p-5 or '1.25rem',
     * backgroundY: value of p-9 or '2.35rem',
     * ```
     */
    padding?: PaddingConfig;
    /**
     * The font size map for the code editor in the WordPress admin.
     *
     * ```
     * huge: text-7xl
     * large: text-4xl
     * normal: text-xl
     * small: text-sm
     *```
     *
     * @example
     * ```
     *"7xl": 5rem;
     *"4xl": 4rem;
     *xl: 2rem;
     *sm: 1rem;
     * ```
     *
     * @default
     * ```
     * "7xl": '5rem',
     * "4xl": '4rem',
     * xl: '1.25rem',
     * sm: '1rem',
     */
    fontSize?: FontSizeConfig;
  };
};

export type TailwindcssConfig = Config & WordpressMapConfig;

type Color = {
  name: string;
  themeName: string;
  tailwindDefault: string;
  hexDefault: string;
};

const colorList: Color[] = [
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

const fontSizeList = [
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

const colorClasses = colorList.map(color => `.has-${color.name}-color`);

const backgroundColorClasses = colorList.map(
  color => `.has-${color.name}-background-color`
);

const fontSizeClasses = fontSizeList.map(
  fontSize => `.has-${fontSize.name}-font-size`
);

const mergeToConfig: Config = {
  content: [],
  safelist: [
    ...colorClasses,
    '.has-background',
    ...backgroundColorClasses,
    ...fontSizeClasses,
    '.has-drop-cap',

    '.wp-block-quote',
    '.is-style-plain',
    '.is-style-large',
  ],
};

export default plugin(function ({ addUtilities, theme }) {
  const colorUtilities = colorList.reduce(
    (acc, color) => ({
      ...acc,
      [`.has-${color.name}-color`]: {
        color:
          theme(`colors.${color.themeName}`) ||
          theme(`colors.${color.tailwindDefault}`) ||
          color.hexDefault,
      },
    }),
    {}
  );

  const fontSizeUtilities = fontSizeList.reduce(
    (acc, fontSize) => ({
      ...acc,
      [`.has-${fontSize.name}-font-size`]: {
        fontSize: `${theme(
          `fontSize.${fontSize.tailwind}`,
          `${fontSize.default}`
        )} !important`,
      },
    }),
    {}
  );

  const backgroundPadding = `${theme(
    'padding.backgroundX',
    theme('padding.5', '1.25em')
  )} ${theme('padding.backgroundY', theme('padding.9', '2.35em'))}`;

  const backgroundUtilities = colorList.reduce(
    (acc, color) => ({
      ...acc,
      [`.has-${color.name}-background-color`]: {
        backgroundColor:
          theme(`colors.${color.themeName}`) ||
          theme(`colors.${color.tailwindDefault}`) ||
          color.hexDefault,
      },
    }),
    {
      '.has-background': {
        padding: backgroundPadding,
      },
    }
  );

  const dropCapUtilities = {
    '.has-drop-cap': {
      '&:first-letter': {
        float: 'left',
        fontSize: '3.25em',
        lineHeight: '0.68',
        fontWeight: 'bolder',
        margin: '1rem 1rem 0 0',
        textTransform: 'uppercase',
        fontStyle: 'normal',
      },
    },
  };

  const quoteUtilities = {
    '.is-style-plain': {
      cite: {
        fontStyle: 'normal',
        fontSize: '0.8rem',
      },
      quotes: 'none',
      border: 'none',
      fontStyle: 'normal',
    },
    '.is-style-large': {
      cite: {
        fontStyle: 'italic',
        fontSize: '1.2rem',
      },
      margin: '0',
      fontSize: '2.5rem',
      quotes: 'none',
      border: 'none',
      fontStyle: 'normal',
    },

    '.wp-block-quote': {
      cite: {
        fontStyle: 'normal',
        fontSize: '0.8rem',
      },
    },
  };

  addUtilities([
    colorUtilities,
    fontSizeUtilities,
    backgroundUtilities,
    dropCapUtilities,
    quoteUtilities,
  ]);
}, mergeToConfig);
