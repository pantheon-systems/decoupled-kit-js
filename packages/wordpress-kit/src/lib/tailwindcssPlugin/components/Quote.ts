export const Quote = {
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
    'p:empty': {
      quotes: 'none',
    },
    '&.has-text-align-center': {
      border: 'none',
    },
    '&.has-text-align-right': {
      borderLeft: 'none',
      paddingRight: '1.06em',
      borderRightWidth: '0.25rem',
      borderRightColor: '#e5e7eb',
    },
    cite: {
      fontStyle: 'normal',
      fontSize: '0.8rem',
    },
  },
};
