import {
  Color,
  GradientColors,
  ThemeType,
} from '@pantheon-systems/wordpress-kit/src/types/TailwindcssPlugin';
import { colorList, gradientList } from '../Constants';

export default class ColorUtilities {
  private theme: ThemeType;

  constructor(theme: ThemeType) {
    this.theme = theme;
  }

  private getColor = (color: Color) =>
    this.theme(
      `colors.${color.themeName}`,
      this.theme(`colors.${color.tailwindDefault}`, color.hexDefault)
    );

  private findColor = (colorName: string) => {
    const color = colorList.find(color => color.themeName === colorName);
    if (!color) {
      throw new Error(`Color ${colorName} not found`);
    }
    return color;
  };

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
