import { alignment } from './shared';

const stackedOnMobile = {
	'&.is-stacked-on-mobile': {
		'@media (max-width: 600px)': {
			gridTemplateColumns: '100% !important',
			'.wp-block-media-text__content': {
				gridRow: '2',
				gridColumn: '1',
			},
			'.wp-block-media-text__media': {
				gridColumn: '1',
			},
		},
	},
};

const cropImageToFill = {
	'&.is-image-fill': {
		'.wp-block-media-text__media': {
			height: '100%',
			minHeight: '250px',
			backgroundSize: 'cover',

			'>img': {
				position: 'absolute',
				width: '1px',
				height: '1px',
				padding: '0',
				margin: '-1px',
				overflow: 'hidden',
				clip: 'rect(0, 0, 0, 0)',
				border: '0',
			},
		},
	},
};

const flexAlignment = {
	'&.is-vertically-aligned-top': {
		'.wp-block-media-text__content': {
			alignSelf: 'start',
		},
	},
	'&.is-vertically-aligned-center': {
		'.wp-block-media-text__content': {
			alignSelf: 'center',
		},
	},
	'&.is-vertically-aligned-bottom': {
		'.wp-block-media-text__content': {
			alignSelf: 'end',
		},
	},
};

const contentMedia = {
	'.wp-block-media-text__media': {
		gridColumn: '1',
		gridRow: '1',
		margin: '0',
		alignSelf: 'center',
		img: {
			width: '100%',
			height: 'auto',
			maxWidth: 'unset',
		},
	},
};

const contentText = {
	'.wp-block-media-text__content': {
		gridColumn: '2',
		gridRow: '1',
		padding: '0 8%',
		wordBreak: 'break-word',
		alignSelf: 'center',
	},
};

export const mediaAndText = {
	'.wp-block-media-text': {
		margin: '1rem auto',
		display: 'grid',
		gridTemplateColumns: '50% 1fr',
		gridTemplateRows: 'auto',

		'&.has-background': {
			padding: 'unset',
		},
		'&.has-media-on-the-right': {
			gridTemplateColumns: '1fr 50%',
			'.wp-block-media-text__media': {
				gridColumn: '2',
			},
			'.wp-block-media-text__content': {
				gridColumn: '1',
			},
		},
		...alignment,

		...stackedOnMobile,
		...cropImageToFill,
		...flexAlignment,

		...contentMedia,
		...contentText,
	},
};
