import { ThemeType } from '../types';
import { fontSizeList } from '../Constants';

/**
 * Class to generate all the fonts related utilities
 * @class FontsUtilities
 * @param {ThemeType} theme - The theme object from tailwindcss plugin
 *
 * @example
 * ```
 * const fonts = new FontsUtilities(theme);
 *
 * fonts.getFontSizeUtilities() // returns the font size utilities
 * ```
 */
export class FontsUtilities {
	private theme: ThemeType;

	constructor(theme: ThemeType) {
		this.theme = theme;
	}
	/**
	 * Generates the font size utilities based on the
	 * font size list that includes tailwind's default font size values and sensible defaults.
	 *
	 * @returns {object} - A object with the font size utilities
	 * @example
	 * ```
	 * {
	 *  '.has-large-font-size': '3rem',
	 *  ...
	 * }
	 * ```
	 */
	getFontSizeUtilities = () =>
		fontSizeList.reduce(
			(acc, fontSize) => ({
				...acc,
				[`.has-${fontSize.name}-font-size`]: {
					fontSize: `${this.theme(
						`fontSize.${fontSize.tailwind}`,
						`${fontSize.default}`,
					)} !important`,
				},
			}),
			{},
		);

	textAlignUtilities = {
		'.has-text-align-center': {
			textAlign: 'center',
		},
		'.has-text-align-right': {
			textAlign: 'right',
		},
		'.has-text-align-left': {
			textAlign: 'left',
		},
	};

	dropCapUtilities = {
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
}
