import { alignment } from './shared';

export const VideoComponent = () => ({
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
		...alignment,
		'&.alignleft': {
			...alignment['&.alignleft'],
			marginInlineStart: '0',
			marginInlineEnd: '2em',
			maxWidth: '360px',
			width: '100%',
		},
		'&.alignright': {
			...alignment['&.alignright'],
			marginInlineStart: '2em',
			marginInlineEnd: '0',
			maxWidth: '360px',
			width: '100%',
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
		...alignment,
		'&.alignleft': {
			...alignment['&.alignleft'],
			marginRight: '1.5rem',
			marginTop: '0',
			width: 'fit-content',
		},
		'&.alignright': {
			...alignment['&.alignright'],
			marginLeft: '1.5rem',
			marginTop: '0',
			width: 'fit-content',
		},
		'&.alignfull': {
			...alignment['&.alignfull'],
			video: {
				height: 'auto',
				maxWidth: 'none',
			},
			padding: '0',
			maxWidth: 'none',
		},
		marginLeft: 'auto',
		marginRight: 'auto',
	},
});
