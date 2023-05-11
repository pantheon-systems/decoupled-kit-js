import type { Config } from 'tailwindcss';
import type { ThemeConfig } from 'tailwindcss/types/config';

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
	stripes?: string;
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

export type WordPressMapConfig = {
	theme?: {
		extend?: {
			/**
			 * The colors mapped from the block editor in the WordPress admin.
			 * @example
			 * ```
			 *primary: #0073a8
			 *secondary: #005075
			 *tertiary: #00a8e1
			 *darkGray: #333333
			 *lightGray: #666666
			 *background: #ffffff
			 *white: #ffffff
			 *foreground: #00000
			 *palePink: #ffb3d7
			 *cyanBluishGray: #ABB8C3
			 *vividRed: #cf2e2e
			 *luminousVividOrange: #ff6900
			 *luminousVividAmber: #fcb900
			 *lightGreenCyan: #7bdcb5
			 *vividGreenCyan: #00d084
			 *paleCyanBlue: #00bcd4
			 *vividCyanBlue: #0693e3
			 *vividPurple: #9b51e0
			 * ```
			 *
			 *@default
			 * ```
			 *primary: value of blue.500 or #0073a8
			 *secondary: value of gray.500 or #005075
			 *darkGray: value of neutral.800 or #333333
			 *lightGray: value of neutral.500 or #666666
			 *white: value of white or #ffffff
			 *tertiary: value of teal.800 or #00a8e1
			 *background: value of white or #ffffff
			 *foreground: value of black or #000
			 *palePink: value of pink.100 or #ffb3d7
			 *cyanBluishGray: value of neutral.300 or #ABB8C3
			 *vividRed: value of red.700 or #cf2e2e
			 *luminousVividOrange: value of orange.600 or #ff6900
			 *luminousVividAmber: value of amber.400 or #fcb900
			 *lightGreenCyan: value of emerald.300 or #7bdcb5
			 *vividGreenCyan: value of green.700 or #00d084
			 *paleCyanBlue: value of sky.300 or #00bcd4
			 *vividCyanBlue: value of cyan.600 or #0693e3
			 *vividPurple: value of purple.600 or #9b51e0
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
		 * The colors mapped from the block editor in the WordPress admin.
		 * @example
		 * ```
		 *primary: #0073a8
		 *secondary: #005075
		 *tertiary: #00a8e1
		 *darkGray: #333333
		 *lightGray: #666666
		 *background: #ffffff
		 *white: #ffffff
		 *foreground: #00000
		 *palePink: #ffb3d7
		 *cyanBluishGray: #ABB8C3
		 *vividRed: #cf2e2e
		 *luminousVividOrange: #ff6900
		 *luminousVividAmber: #fcb900
		 *lightGreenCyan: #7bdcb5
		 *vividGreenCyan: #00d084
		 *paleCyanBlue: #00bcd4
		 *vividCyanBlue: #0693e3
		 *vividPurple: #9b51e0
		 * ```
		 *
		 *@default
		 * ```
		 *primary: value of blue.500 or #0073a8
		 *secondary: value of gray.500 or #005075
		 *darkGray: value of neutral.800 or #333333
		 *lightGray: value of neutral.500 or #666666
		 *white: value of white or #ffffff
		 *tertiary: value of teal.800 or #00a8e1
		 *background: value of white or #ffffff
		 *foreground: value of black or #000
		 *palePink: value of pink.100 or #ffb3d7
		 *cyanBluishGray: value of neutral.300 or #ABB8C3
		 *vividRed: value of red.700 or #cf2e2e
		 *luminousVividOrange: value of orange.600 or #ff6900
		 *luminousVividAmber: value of amber.400 or #fcb900
		 *lightGreenCyan: value of emerald.300 or #7bdcb5
		 *vividGreenCyan: value of green.700 or #00d084
		 *paleCyanBlue: value of sky.300 or #00bcd4
		 *vividCyanBlue: value of cyan.600 or #0693e3
		 *vividPurple: value of purple.600 or #9b51e0
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

export type GradientColors = {
	color: string;
	position: string;
};

export type TailwindcssConfig = Config & WordPressMapConfig;

type PartialThemeConfig = Partial<
	ThemeConfig & {
		extend: Partial<ThemeConfig>;
	}
>;

export type ThemeType = <T = PartialThemeConfig | undefined>(
	path?: string | undefined,
	defaultValue?: T | undefined,
) => T;
