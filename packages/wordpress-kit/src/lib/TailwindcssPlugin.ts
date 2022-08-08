import plugin from 'tailwindcss/plugin';

import { Color } from '../types/TailwindcssPlugin';
import { imageComponent } from './tailwindcssPlugin/components/Image';
import { pullQuoteUtilities } from './tailwindcssPlugin/components/PullQuote';
import { quote } from './tailwindcssPlugin/components/Quote';
import { tableComponent } from './tailwindcssPlugin/components/Table';
import { mergeToConfig } from './tailwindcssPlugin/Config';
import { colorList, fontSizeList } from './tailwindcssPlugin/Constants';

export default plugin(function ({ addUtilities, theme, addComponents }) {
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

  const textAlignUtilities = {
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

  const quoteUtilities = quote;

  const pullQuote = pullQuoteUtilities({
    quoteSize: theme('fontSize.4xl', '2.5rem'),
  });

  const table = tableComponent({
    alignFull: {
      minWidth: theme('screen.xl', '1280px'),
    },
    stripeColor: theme('colors.stripes', '#f2f2f2'),
  });

  const image = imageComponent({
    alignFull: { minWidth: theme('screen.xl', '1280px') },
  });

  addUtilities([
    backgroundUtilities,
    borderColorUtilities,
    colorUtilities,
    dropCapUtilities,
    fontSizeUtilities,
    quoteUtilities,
    textAlignUtilities,
  ]);

  addComponents([table, image, pullQuote]);
}, mergeToConfig);
