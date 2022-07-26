import type { Config } from 'tailwindcss';

export type ColorConfig = {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  foreground?: string;
  cyanBluishGray?: string;
  palePink?: string;
  vividRed?: string;
  luminousVividOrange?: string;
  luminousVividAmber?: string;
  lightGreenCyan?: string;
  vividGreenCyan?: string;
  paleCyanBlue?: string;
  vividCyanBlue?: string;
  vividPurple?: string;
  darkGray?: string;
  lightGray?: string;
  white?: string;
};

export type PaddingConfig = {
  backgroundX?: string;
  backgroundY?: string;
};

export type FontSizeConfig = {
  '7xl'?: string;
  '4xl'?: string;
  xl?: string;
  sm?: string;
};

export type WordpressMapConfig = {
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

export type Color = {
  name: string;
  themeName: string;
  tailwindDefault: string;
  hexDefault: string;
};

export type FontSize = {
  name: string;
  tailwind: string;
  default: string;
};

export type TailwindcssConfig = Config & WordpressMapConfig;
