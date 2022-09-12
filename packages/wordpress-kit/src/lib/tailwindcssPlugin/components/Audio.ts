export const AudioComponent = ({
  alignFull: { minWidth },
}: {
  alignFull: { minWidth: string };
}) => {
  return {
    '.wp-block-audio': {
      margin: '0 auto',
      maxWidth: '650px',
      '> figcaption': {
        marginTop: '0',
        textAlign: 'center',
        fontSize: '0.875rem',
        color: '#555',
      },
      '> audio': {
        width: '100%',
        minWidth: '300px',
      },
      '&.alignwide': {
        maxWidth: '850px',
      },
      '&.alignleft': {
        float: 'left',
      },
      '&.alignright': {
        float: 'right',
      },
      '&.alignfull': {
        [`@media (min-width:${minWidth})`]: {
          // sets a negative margin to allow full width tables to span past the
          // width its parent container
          marginLeft: 'calc(-1 * max(1rem, 10vw))',
          marginRight: 'calc(-1 * max(1rem, 10vw))',
          maxWidth: 'unset',
        },
      },
    },
  };
};
