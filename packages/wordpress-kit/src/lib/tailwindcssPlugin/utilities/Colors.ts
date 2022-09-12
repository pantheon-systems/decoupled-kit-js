import type {
  GradientColors,
  ThemeType,
  Color,
} from '../../../types/TailwindcssPlugin';
import { colorList, gradientList } from '../Constants';

/**
 * Class to generate all the color related utilities
 * @class ColorUtilities
 * @param {ThemeType} theme - The theme object from tailwindcss plugin
 *
 * @example
 * ```
 * const color = new ColorUtilities(theme);
 *
 * color.getBackgroundUtilities() // returns the background utilities
 * color.getBorderColorUtilities() // returns the border color utilities
 * ```
 *
 */
export class ColorUtilities {
  private theme: ThemeType;

  constructor(theme: ThemeType) {
    this.theme = theme;
  }

  /**
   * Checks if the color is in the theme colors list
   * is a tailwind default color. If not, returns a hex color.
   *
   * @param color - A color object
   * @returns string - A string with the color value
   */
  private getColor = (color: Color) =>
    this.theme(
      `colors.${color.themeName}`,
      this.theme(`colors.${color.tailwindDefault}`, color.hexDefault)
    );

  /**
   * Finds a color by themeName
   *
   * @param {string} colorName
   * @return Color
   * @throws Error(`Color ${colorName} not found`)
   */
  private findColor = (colorName: string) => {
    const color = colorList.find(color => color.themeName === colorName);
    if (!color) {
      throw new Error(`Color ${colorName} not found`);
    }
    return color;
  };

  /**
   * @private
   * Formats color gradients from a list of colors.
   *
   * @remarks
   * to be used in the linear-gradient css function.
   * @param {GradientColors[]} colors - Array of gradient colors i.e
   *
   * ```
   * [{ color: 'primary', position: '0%' }, ...]
   * ```
   *
   * @returns {string} A string to be used as a css gradient. Example: '#000000 50%, #ffffff 100%'
   */
  private formatGradientColors = (colors: GradientColors[]) => {
    const formattedColors = colors.map(({ color, position }) => {
      if (color.startsWith('#')) {
        return `${color} ${position}`;
      }

      const themeColor = this.findColor(color);
      return `${this.getColor(themeColor)} ${position}`;
    });

    return formattedColors.join(', ');
  };

  /**
   *
   * Takes the colors from the colorList constant and
   * build an object with the following structure:
   *
   * @returns ```{[`.has-${colorName}-color`]: { color: 'colorValue' }, ... }``` - color utilities.
   *
   * @example
   * const colorUtilities = getColorUtilities();
   * ```
   * {
   *  '.has-primary-color': {
   *   color: '#0070f3',
   *  },
   *  ...
   * },
   * ```
   */
  getColorUtilities = () =>
    colorList.reduce(
      (acc, color) => ({
        ...acc,
        [`.has-${color.name}-color`]: {
          color: this.getColor(color),
        },
      }),
      {}
    );

  /**
   *
   * Takes the colors from the colorList constant to
   * build an object with the background colors and a padding.
   *
   * @returns ```
   * {[`.has-${colorName}-background-color`]: {
   *   backgroundColor: 'colorValue' },
   *   ...
   * }
   * ```
   *
   * @example
   * const backgroundUtilities = getBackgroundUtilities();
   * ```
   * {
   *  '.has-primary-background-color': {
   *    backgroundColor: '#0070f3',
   *  },
   *  '.has-background': {
   *    padding: '1.25rem 2.35rem',
   *  }
   *  ...
   * },
   * ```
   */
  getBackgroundUtilities = () => {
    const backgroundPadding = `${this.theme(
      'padding.backgroundX',
      this.theme('padding.5', '1.25em')
    )} ${this.theme('padding.backgroundY', this.theme('padding.9', '2.35em'))}`;

    return colorList.reduce(
      (acc, color) => ({
        ...acc,
        [`.has-${color.name}-background-color`]: {
          backgroundColor: this.getColor(color),
        },
      }),
      {
        '.has-background': {
          padding: backgroundPadding,
        },
      }
    );
  };

  /**
   *
   * Takes the colors from the colorList constant to
   * build the borderColor utilities object
   *
   * @returns ```
   * {[`.has-${colorName}-border-color`]: {
   *    borderColor: 'colorValue' !important },
   *    ...
   * }
   * ```
   *
   * @example
   * const backgroundUtilities = getBackgroundUtilities();
   * ```
   * {
   *  '.has-primary-background-color': {
   *    borderColor: '#0070f3 !important',
   *  },
   *  ...
   * },
   * ```
   */
  getBorderColorUtilities = () =>
    colorList.reduce(
      (acc, color) => ({
        ...acc,
        [`.has-${color.name}-border-color`]: {
          borderColor: `${this.getColor(color)} !important`,
        },
      }),
      {}
    );

  /**
   *
   * Takes the gradients from the gradientList constant to
   * build the gradient utilities object.
   *
   * @returns ```{[`.has-${gradientName}-gradient`]: { background: linear-gradient(direction , color colorPosition, color colorPosition) }, ... }``` - gradient utilities.
   *
   * @example
   * const backgroundUtilities = getBackgroundUtilities();
   * ```
   * {
   *  '.has-diagonal-primary-to-foreground-gradient': {
   *    background: 'linear-gradient(to bottom right, #1a4548 50%, #000000 100%)',
   *  },
   *  ...
   * },
   * ```
   */
  getGradientUtilities = () =>
    gradientList.reduce(
      (acc, { name, direction, colors }) => ({
        ...acc,
        [`.has-${name}-gradient-background`]: {
          background: `linear-gradient(${direction}, ${this.formatGradientColors(
            colors
          )}) !important`,
        },
      }),
      {}
    );
}
