type mediaType = '@media (min-width: 768px)';

export const ImageComponent = ({
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
			width: '100%',
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
			maxWidth: '1000px',
		},
		'&.alignfull': {
			[`@media (min-width:${minWidth})` as mediaType]: {
				// sets a negative margin to allow full width images to span past the
				// width its parent container
				marginLeft: 'calc(-1 * max(1rem, 10vw))',
				marginRight: 'calc(-1 * max(1rem, 10vw))',
			},
			img: {
				height: 'auto',
				maxWidth: 'none',
			},
			padding: '0',
			maxWidth: 'none',
		},
		'&.is-style-rounded': {
			img: {
				borderRadius: '9999px',
			},
		},
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: '650px',
	},
});
