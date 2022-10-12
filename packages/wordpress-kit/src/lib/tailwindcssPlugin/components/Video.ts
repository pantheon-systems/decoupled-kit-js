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
		figcaption: {
			fontSize: '.9rem',
			textAlign: 'center',
			wordBreak: 'break-word',
		},
		'>.wp-block-embed__wrapper': {
			margin: '0 0 1em',
			overflowWrap: 'break-word',
			position: 'relative',
		},
		'>.wp-block-embed__wrapper:before': {
			content: '""',
			paddingTop: '56.25%',
			display: 'block',
		},
		'&.wp-has-aspect-ratio': {
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
		'&.alignfull': {
			[`@media (min-width:${minWidth})` as mediaType]: {
				// sets a negative margin to allow full width images to span past the
				// width its parent container
				marginLeft: 'calc(-1 * max(1rem, 10vw))',
				marginRight: 'calc(-1 * max(1rem, 10vw))',
				maxWidth: 'none',
				width: 'unset',
			},
		},
		'&.alignleft': {
			float: 'left',
			marginInlineStart: '0',
			marginInlineEnd: '2em',
			maxWidth: '360px',
			width: '100%',
		},
		'&.alignright': {
			float: 'right',
			marginInlineStart: '2em',
			marginInlineEnd: '0',
			maxWidth: '360px',
			width: '100%',
		},
		'&.alignwide': {
			maxWidth: '1000px',
		},
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: '650px',
	},
	'.wp-block-video': {
		figcaption: {
			fontSize: '.9rem',
			textAlign: 'center',
			wordBreak: 'break-word',
		},
		video: {
			height: 'auto',
			width: '100%',
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
			video: {
				height: 'auto',
				maxWidth: 'none',
			},
			padding: '0',
			maxWidth: 'none',
		},
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: '650px',
	},
});
