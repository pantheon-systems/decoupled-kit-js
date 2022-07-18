import plugin from 'tailwindcss/plugin';

import type { Config } from 'tailwindcss';

type ColorConfig = {
  primary?: string;
  secondary?: string;
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

const mergeToConfig: Config = {
  content: [],
  safelist: [
    '.has-primary-color',
    '.has-secondary-color',
    '.has-dark-gray-color',
    '.has-white-color',

    '.has-background',
    '.has-primary-background-color',
    '.has-secondary-background-color',
    '.has-dark-gray-background-color',
    '.has-white-background-color',

    '.has-huge-font-size',
    '.has-large-font-size',
    '.has-normal-font-size',
    '.has-small-font-size',
    '.has-light-gray-color',

    '.has-drop-cap',
  ],
};

export default plugin(function ({ addUtilities, theme }) {
  const fontSizeUtilities = {
    '.has-huge-font-size': {
      fontSize: `${theme('fontSize.7xl', '5rem')} !important`,
    },
    '.has-large-font-size': {
      fontSize: `${theme('fontSize.4xl', '4rem')} !important`,
    },
    '.has-normal-font-size': {
      fontSize: `${theme('fontSize.xl', '1.25rem')} !important`,
    },
    '.has-small-font-size': {
      fontSize: `${theme('fontSize.sm', '1rem')} !important`,
    },
  };

  const colorUtilities = {
    '.has-primary-color': {
      color: theme('colors.primary') || theme('colors.blue.500') || '#0073a8',
    },
    '.has-secondary-color': {
      color: theme('colors.secondary') || theme('colors.gray.500') || '#005075',
    },
    '.has-dark-gray-color': {
      color:
        theme('colors.darkGray') || theme('colors.neutral.800') || '#333333',
    },
    '.has-light-gray-color': {
      color:
        theme('colors.lightGray') || theme('colors.neutral.500') || '#666666',
    },
    '.has-white-color': {
      color: theme('colors.white') || '#ffffff',
    },
  };

  const backgroundPadding = `${theme(
    'padding.backgroundX',
    theme('padding.5', '1.25em')
  )} ${theme('padding.backgroundY', theme('padding.9', '2.35em'))}`;

  const backgroundUtilities = {
    '.has-background': {
      padding: backgroundPadding,
    },
    '.has-primary-background-color': {
      backgroundColor:
        theme('colors.primary') || theme('colors.blue.500') || '#0073a8',
    },
    '.has-secondary-background-color': {
      backgroundColor:
        theme('colors.secondary') || theme('colors.gray.500') || '#005075',
    },
    '.has-dark-gray-background-color': {
      backgroundColor:
        theme('colors.darkGray') || theme('colors.neutral.800') || '#333333',
    },
    '.has-light-gray-background-color': {
      backgroundColor:
        theme('colors.lightGray') || theme('colors.neutral.500') || '#666666',
    },
    '.has-white-background-color': {
      backgroundColor: theme('colors.white') || '#ffffff',
    },
  };

  const dropCapUtilities = {
    '.has-drop-cap': {
      '&:first-letter': {
        float: 'left',
        fontSize: '3.75rem',
        lineHeight: '0.68',
        fontWeight: 'bolder',
        margin: '1rem 1rem 0 0',
        textTransform: 'uppercase',
        fontStyle: 'normal',
      },
    },
  };

  addUtilities([
    colorUtilities,
    fontSizeUtilities,
    backgroundUtilities,
    dropCapUtilities,
  ]);
}, mergeToConfig);
