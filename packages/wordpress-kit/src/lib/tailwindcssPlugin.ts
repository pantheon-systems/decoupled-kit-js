import plugin from 'tailwindcss/plugin';

import { Color } from '../types/tailwindcssPlugin';
import { mergeToConfig } from './tailwindCssPlugin/config';
import { colorList, fontSizeList } from './tailwindCssPlugin/constants';

export default plugin(function ({ addUtilities, theme }) {
  const getColor = (color: Color) =>
    theme(
      `colors.${color.themeName}`,
      theme(`colors.${color.tailwindDefault}`, color.hexDefault)
    );

  const colorUtilities = colorList.reduce(
    (acc, color) => ({
      ...acc,
      [`.has-${color.name}-color`]: {
        color: getColor(color),
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
        backgroundColor: getColor(color),
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

  const pullQuoteUtilities = {
    '.wp-block-pullquote': {
      blockquote: {
        p: {
          fontSize: '1.8em',
        },
        cite: {
          textTransform: 'uppercase',
          fontSize: '.8em',
          fontStyle: 'normal',
        },
        border: 'none',
        color: 'inherit',
        quotes: 'none',
      },
      borderColor: 'currentColor',
      borderWidth: '3px 0',
      marginBottom: '0',
      marginTop: '0',
      padding: '2em 0',
      textAlign: 'center',
    },
  };

  const borderColorUtilities = colorList.reduce(
    (acc, color) => ({
      ...acc,
      [`.has-${color.name}-border-color`]: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        borderColor: `${getColor(color)} !important`,
      },
    }),
    {}
  );

  addUtilities([
    backgroundUtilities,
    borderColorUtilities,
    colorUtilities,
    dropCapUtilities,
    fontSizeUtilities,
    pullQuoteUtilities,
    quoteUtilities,
  ]);
}, mergeToConfig);
