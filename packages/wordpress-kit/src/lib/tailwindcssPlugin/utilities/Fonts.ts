import { ThemeType } from '@pantheon-systems/wordpress-kit/src/types/TailwindcssPlugin';
import { fontSizeList } from '../Constants';

export default class FontsUtilities {
  private theme: ThemeType;

  constructor(theme: ThemeType) {
    this.theme = theme;
  }

  getFontSizeUtilities = () =>
    fontSizeList.reduce(
      (acc, fontSize) => ({
        ...acc,
        [`.has-${fontSize.name}-font-size`]: {
          fontSize: `${this.theme(
            `fontSize.${fontSize.tailwind}`,
            `${fontSize.default}`
          )} !important`,
        },
      }),
      {}
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
