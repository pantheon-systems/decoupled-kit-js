import plugin from 'tailwindcss/plugin';

import {
  Quote,
  ImageComponent,
  PullQuoteComponent,
  TableComponent,
  GalleryComponent,
} from './tailwindcssPlugin/components';
import { mergeToConfig } from './tailwindcssPlugin/Config';
import { ColorUtilities, FontsUtilities } from './tailwindcssPlugin/utilities';

export default plugin(function ({ addUtilities, theme, addComponents }) {
  const color = new ColorUtilities(theme);
  const font = new FontsUtilities(theme);

  const quoteUtilities = Quote;

  const pullQuote = PullQuoteComponent({
    quoteSize: theme('fontSize.4xl', '2.5rem'),
  });

  const table = TableComponent({
    alignFull: {
      minWidth: theme('screen.xl', '1280px'),
    },
    stripeColor: theme('colors.stripes', '#f2f2f2'),
  });

  const image = ImageComponent({
    alignFull: { minWidth: theme('screen.xl', '1280px') },
  });

  const gallery = GalleryComponent({
    alignFull: { minWidth: theme('screen.xl', '1280px') },
  });

  addUtilities([
    color.getBackgroundUtilities(),
    color.getBorderColorUtilities(),
    color.getColorUtilities(),
    color.getGradientUtilities(),
    font.getFontSizeUtilities(),
    font.dropCapUtilities,
    font.textAlignUtilities,
    quoteUtilities,
  ]);

  addComponents([table, image, pullQuote, gallery]);
}, mergeToConfig);
