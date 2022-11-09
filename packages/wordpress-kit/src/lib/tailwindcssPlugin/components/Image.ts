import { alignment } from './shared';

export const ImageComponent = () => ({
	'.wp-block-image': {
		...alignment,
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
			marginRight: '1.5rem',
			marginTop: '0',
			width: 'fit-content',
			...alignment['&.alignleft'],
		},
		'&.alignright': {
			marginLeft: '1.5rem',
			marginTop: '0',
			width: 'fit-content',
			...alignment['&.alignright'],
		},
		'&.is-style-rounded': {
			img: {
				borderRadius: '9999px',
			},
		},
		marginLeft: 'auto',
		marginRight: 'auto',
	},
});
