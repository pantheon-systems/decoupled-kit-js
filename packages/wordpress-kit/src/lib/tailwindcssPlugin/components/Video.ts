type mediaType = '@media (min-width: 768px)';

export const VideoComponent = ({
	alignFull: { minWidth },
}: {
	alignFull: { minWidth: string };
}) => ({
	'.wp-block-embed': {
		figure: {
			display: 'block',
			marginInlineStart: '40px',
			marginInlineEnd: '40px',
		},
		margin: '0 0 1em',
		overflowWrap: 'break-word',

		iframe: {
			maxWidth: '100%',
		},

		div: {
			display: 'block',
		},
		'>.wp-block-embed__wrapper': {
			margin: '0 0 1em',
			overflowWrap: 'break-word',

			position: 'relative',
			iframe: {
				position: 'absolute',
				top: '0',
				right: '0',
				bottom: '0',
				left: '0',
				height: '100%',
				width: '100%',
			},
		},
		'>.wp-block-embed__wrapper::before': {
			paddingTop: '56.25%',
			content: '',
			display: 'block',
		},

		'&.wp-embed-responsive': {
			iframe: {
				position: 'absolute',
				top: '0',
				right: '0',
				bottom: '0',
				left: '0',
				height: 'auto',
				width: '100%',
			},
		},
		'&.alignfull': {
			[`@media (min-width:${minWidth})` as mediaType]: {
				// sets a negative margin to allow full width images to span past the
				// width its parent container
				marginLeft: 'calc(-1 * max(1rem, 10vw))',
				marginRight: 'calc(-1 * max(1rem, 10vw))',
			},
			iframe: {
				height: 'auto',
				maxWidth: 'none',
			},
		},
		// '>.wp-block-embed__wrapper': {
		// 	position: 'relative',
		// 	iframe: {
		// 		width: '100%',
		// 	},
		// },
		// 	iframe: {
		// 		height: 'auto',
		// 		maxWidth: 'none',
		// 	},
		// 	padding: '0',
		// 	maxWidth: 'none',
		// },
		// '&.wp-has-aspect-ratio': {
		// 	iframe: {
		// 		position: 'absolute',
		// 		top: '0',
		// 		right: '0',
		// 		bottom: '0',
		// 		left: '0',
		// 		height: '100%',
		// 		width: '100%',
		// 	},
		// },
		figcaption: {
			fontSize: '.9rem',
			textAlign: 'center',
			wordBreak: 'break-word',
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
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: '650px',
	},
});
