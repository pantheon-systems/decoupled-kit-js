import plugin from 'tailwindcss/plugin';

import type { Config } from 'tailwindcss';
import { Color, FontSize } from '../types/tailwindcssPlugin';

const colorList: Color[] = [
  {
    name: 'primary',
    themeName: 'primary',
    tailwindDefault: 'blue.500',
    hexDefault: '#0073a8',
  },
  {
    name: 'secondary',
    themeName: 'secondary',
    tailwindDefault: 'gray.500',
    hexDefault: '#005075',
  },
  {
    name: 'dark-gray',
    themeName: 'darkGray',
    tailwindDefault: 'neutral.800',
    hexDefault: '#333333',
  },
  {
    name: 'light-gray',
    themeName: 'lightGray',
    tailwindDefault: 'neutral.500',
    hexDefault: '#666666',
  },
  {
    name: 'white',
    themeName: 'white',
    tailwindDefault: 'white',
    hexDefault: '#ffffff',
  },
  // WP 6 support
  {
    name: 'tertiary',
    themeName: 'tertiary',
    tailwindDefault: 'teal.800',
    hexDefault: '#00a8e1',
  },
  {
    name: 'background',
    themeName: 'background',
    tailwindDefault: 'white',
    hexDefault: '#ffffff',
  },
  {
    name: 'foreground',
    themeName: 'foreground',
    tailwindDefault: 'black',
    hexDefault: '#000',
  },
  {
    name: 'pale-pink',
    themeName: 'palePink',
    tailwindDefault: 'pink.100',
    hexDefault: '#ffb3d7',
  },
  {
    name: 'cyan-bluish-gray',
    themeName: 'cyanBluishGray',
    tailwindDefault: 'neutral.300',
    hexDefault: '#ABB8C3',
  },
  {
    name: 'vivid-red',
    themeName: 'vividRed',
    tailwindDefault: 'red.700',
    hexDefault: '#cf2e2e',
  },
  {
    name: 'luminous-vivid-orange',
    themeName: 'luminousVividOrange',
    tailwindDefault: 'orange.600',
    hexDefault: '#ff6900',
  },
  {
    name: 'luminous-vivid-amber',
    themeName: 'luminousVividAmber',
    tailwindDefault: 'amber.400',
    hexDefault: '#fcb900',
  },
  {
    name: 'light-green-cyan',
    themeName: 'lightGreenCyan',
    tailwindDefault: 'emerald.300',
    hexDefault: '#7bdcb5',
  },
  {
    name: 'vivid-green-cyan',
    themeName: 'vividGreenCyan',
    tailwindDefault: 'green.700',
    hexDefault: '#00d084',
  },
  {
    name: 'pale-cyan-blue',
    themeName: 'paleCyanBlue',
    tailwindDefault: 'sky.300',
    hexDefault: '#00bcd4',
  },
  {
    name: 'vivid-cyan-blue',
    themeName: 'vividCyanBlue',
    tailwindDefault: 'cyan.600',
    hexDefault: '#0693e3',
  },
  {
    name: 'vivid-purple',
    themeName: 'vividPurple',
    tailwindDefault: 'purple.600',
    hexDefault: '#9b51e0',
  },
];

const fontSizeList: FontSize[] = [
  {
    name: 'huge',
    tailwind: '7xl',
    default: '5rem',
  },
  {
    name: 'large',
    tailwind: '2xl',
    default: '3rem',
  },
  {
    name: 'normal',
    tailwind: 'xl',
    default: '2rem',
  },
  {
    name: 'small',
    tailwind: 'sm',
    default: '1rem',
  },
  // WP 6 support
  {
    name: 'x-large',
    tailwind: '4xl',
    default: '4rem',
  },
];

const colorClasses = colorList.map(color => `.has-${color.name}-color`);

const backgroundColorClasses = colorList.map(
  color => `.has-${color.name}-background-color`
);

const borderColorClasses = colorList.map(
  color => `.has-${color.name}-border-color`
);

const fontSizeClasses = fontSizeList.map(
  fontSize => `.has-${fontSize.name}-font-size`
);

const mergeToConfig: Config = {
  content: [],
  safelist: [
    ...colorClasses,
    ...borderColorClasses,
    '.has-background',
    ...backgroundColorClasses,
    ...fontSizeClasses,
    '.has-drop-cap',

    '.wp-block-quote',
    '.is-style-plain',
    '.is-style-large',
    '.wp-block-pullquote',
  ],
};

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
          fontSize: theme('fontSize.4xl', '2.5rem'),
        },
        cite: {
          textTransform: 'uppercase',
          fontSize: theme('fontSize.xl', '1.5rem'),
        },
        border: 'none',
        color: 'inherit',
        fontStyle: 'normal',
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
