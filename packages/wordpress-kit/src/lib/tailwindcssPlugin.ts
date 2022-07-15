import plugin from 'tailwindcss/plugin';

const mergeToConfig = {
  content: [],
  safelist: [
    '.has-primary-color',
    '.has-secondary-color',
    '.has-dark-gray-color',
    '.has-white-color',

    '.has-background',
    '.has-primary-background-color',
    '.has-secondary-background-color',
    '.has-dark-gray-background-color',
    '.has-white-background-color',

    '.has-huge-font-size',
    '.has-large-font-size',
    '.has-normal-font-size',
    '.has-small-font-size',
    '.has-light-gray-color',

    '.has-drop-cap',
  ],
};

export default plugin(function ({ addUtilities, theme }) {
  const fontSizeUtilties = {
    '.has-huge-font-size': {
      fontSize: `${theme('fontSize.7xl', '5rem')} !important`,
    },
    '.has-large-font-size': {
      fontSize: `${theme('fontSize.4xl', '4rem')} !important`,
    },
    '.has-normal-font-size': {
      fontSize: `${theme('fontSize.xl', '1.25rem')} !important`,
    },
    '.has-small-font-size': {
      fontSize: `${theme('fontSize.sm', '1rem')} !important`,
    },
  };

  const colorUtilties = {
    '.has-primary-color': {
      color: theme('colors.primary') || theme('colors.blue.500') || '#0073a8',
    },
    '.has-secondary-color': {
      color: theme('colors.secondary') || theme('colors.gray.500') || '#005075',
    },
    '.has-dark-gray-color': {
      color:
        theme('colors.darkGray') || theme('colors.neutral.800') || '#333333',
    },
    '.has-light-gray-color': {
      color:
        theme('colors.lightGray') || theme('colors.neutral.500') || '#666666',
    },
    '.has-white-color': {
      color: theme('colors.white') || '#ffffff',
    },
  };

  const backgroundPadding = `${theme(
    'padding.backgroundX',
    theme('padding.5', '1.25em')
  )} ${theme('padding.backgroundY', theme('padding.9', '2.35em'))}`;

  const backgroundUtilties = {
    '.has-background': {
      padding: backgroundPadding,
    },
    '.has-primary-background-color': {
      backgroundColor:
        theme('colors.primary') || theme('colors.blue.500') || '#0073a8',
    },
    '.has-secondary-background-color': {
      backgroundColor:
        theme('colors.secondary') || theme('colors.gray.500') || '#005075',
    },
    '.has-dark-gray-background-color': {
      backgroundColor:
        theme('colors.darkGray') || theme('colors.neutral.800') || '#333333',
    },
    '.has-light-gray-background-color': {
      backgroundColor:
        theme('colors.lightGray') || theme('colors.neutral.500') || '#666666',
    },
    '.has-white-background-color': {
      backgroundColor: theme('colors.white') || '#ffffff',
    },
  };

  const dropCapUtilties = {
    '.has-drop-cap': {
      '&:first-letter': {
        float: 'left',
        fontSize: '3.75rem',
        lineHeight: '0.68',
        fontWeight: 'bolder',
        margin: '1rem 1rem 0 0',
        textTransform: 'uppercase',
        fontStyle: 'normal',
      },
    },
  };

  addUtilities([
    colorUtilties,
    fontSizeUtilties,
    backgroundUtilties,
    dropCapUtilties,
  ]);
}, mergeToConfig);
