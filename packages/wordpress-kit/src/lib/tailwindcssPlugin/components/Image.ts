type mediaType = '@media (min-width: 768px)';

const ImageComponent = ({
  alignFull: { minWidth },
}: {
  alignFull: { minWidth: string };
}) => ({
  '.wp-block-image': {
    figcaption: {
      fontSize: '.9rem',
      textAlign: 'center',
      wordBreak: 'break-word',
    },
    img: {
      maxWidth: '650px',
      borderRadius: 'inherit',
    },
    '&.alignleft': {
      float: 'left',
      marginRight: '1.5rem',
      marginTop: '0',
      width: 'fit-content',
    },
    '&.alignright': {
      float: 'right',
      marginLeft: '1.5rem',
      marginTop: '0',
      width: 'fit-content',
    },
    '&.alignwide': {
      img: {
        maxWidth: '850px',
      },
    },
    '&.alignfull': {
      [`@media (min-width:${minWidth})` as mediaType]: {
        // sets a negative margin to allow full width images to span past the
        // width its parent container
        marginLeft: 'calc(-1 * max(1rem, 10vw))',
        marginRight: 'calc(-1 * max(1rem, 10vw))',
      },
      width: 'unset',
      img: {
        width: '100%',
        height: 'auto',
        maxWidth: 'none',
      },
      padding: '0',
    },
    '&.is-style-rounded': {
      img: {
        borderRadius: '9999px',
      },
    },
    display: 'inline-grid',
    width: '100%',
    placeItems: 'center',
  },
});

export default ImageComponent;
