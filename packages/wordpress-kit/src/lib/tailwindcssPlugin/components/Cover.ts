import { alignment } from './shared';

type Opacities = { [key: string]: { opacity: string } };

const generateOpacity: () => Opacities = () => {
	const opacities: Opacities = {};
	for (let i = 0; i <= 10; i++) {
		opacities[`&.has-background-dim-${i * 10}`] = {
			opacity: `${i * 0.1}`,
		};
	}
	return opacities;
};

const background = {
	'.wp-block-cover__background': {
		position: 'absolute',
		top: '0',
		left: '0',
		bottom: '0',
		right: '0',
		'z-index': '1',
		opacity: '0.5',
		'background-color': '#000',
		...generateOpacity(),
	},
};

const innerContainer = {
	'.wp-block-cover__inner-container': {
		'z-index': '1',
		width: '100%',
		color: '#fff',
		p: {
			position: 'relative',
			'>img': {
				height: 'auto',
				'max-width': '100%',
				margin: '0',
				display: 'inline',
				'vertical-align': 'unset',
			},
		},
	},
};

const contentPosition = {
	'&.is-position-top-left': {
		'align-items': 'flex-start',
		'justify-content': 'flex-start',
	},
	'&.is-position-top-center': {
		'align-items': 'flex-start',
		'justify-content': 'center',
	},
	'&.is-position-top-right': {
		'align-items': 'flex-start',
		'justify-content': 'flex-end',
	},
	'&.is-position-center-left': {
		'align-items': 'center',
		'justify-content': 'flex-start',
	},
	'&.is-position-center-right': {
		'align-items': 'center',
		'justify-content': 'flex-end',
	},
	'&.is-position-bottom-left': {
		'align-items': 'flex-end',
		'justify-content': 'flex-start',
	},
	'&.is-position-bottom-center': {
		'align-items': 'flex-end',
		'justify-content': 'center',
	},
	'&.is-position-bottom-right': {
		'align-items': 'flex-end',
		'justify-content': 'flex-end',
	},
	'&.has-custom-content-position': {
		'.wp-block-cover__inner-container': {
			width: 'auto',
			margin: '0',
		},
	},
};

export const CoverComponent = () => ({
	'.wp-block-cover': {
		position: 'relative',
		'background-size': 'cover',
		'background-position': '50%',
		'min-height': '430px',
		display: 'flex',
		width: '100%',
		'place-items': 'center',
		padding: '1rem',
		margin: '1rem auto',
		'box-sizing': 'border-box',
		'>img': {
			position: 'absolute',
			top: '0',
			left: '0',
			bottom: '0',
			right: '0',
			margin: '0',
			padding: '0',
			width: '100%',
			height: '100%',
			'max-width': 'none',
			'max-height': 'none',
			'object-fit': 'cover',
			outline: 'none',
			border: 'none',
			'box-shadow': 'none',
			'z-index': '0',
		},
		'&.has-parallax': {
			'background-attachment': 'fixed',
		},
		'&.is-repeated': {
			'background-repeat': 'repeat',
			'background-size': 'auto',
		},
		...alignment,
		'&.alignleft': {
			maxWidth: '420px',
			...alignment['&.alignleft'],
		},
		'&.alignright': {
			maxWidth: '420px',
			...alignment['&.alignright'],
		},
		'&.alignfull': {
			...alignment['&.alignfull'],
			marginRight: 'unset',
			marginLeft: 'unset,',
		},
		...background,
		...innerContainer,
		...contentPosition,
	},
});
