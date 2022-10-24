import { alignment, generalButtonStyle } from './shared';

const justifications = {
	'&.is-content-justification-left': {
		justifyContent: 'flex-start',
	},
	'&.is-content-justification-center': {
		justifyContent: 'center',
	},
	'&.is-content-justification-right': {
		justifyContent: 'flex-end',
	},
	'&.is-content-justification-space-between': {
		justifyContent: 'space-between',
	},
};

const buttonWidths = {
	'&.wp-block-button__width-25': {
		width: 'calc(25% - 1.5rem * .75)',
	},
	'&.wp-block-button__width-50': {
		width: 'calc(50% - 1.5rem * 0.5)',
	},
	'&.wp-block-button__width-75': {
		width: 'calc(75% - 1.5rem * 0.25)',
	},
	'&.wp-block-button__width-100': {
		width: '100%',
		'flex-basis': '100%',
	},
};

export const ButtonsComponent = ({
	defaultColor,
}: {
	defaultColor: string;
}) => ({
	'.wp-block-buttons': {
		display: 'flex',
		gap: '1.5rem',
		flexWrap: 'wrap',
		alignItems: 'center',
		'justify-content': 'flex-start',
		...justifications,
		...alignment,
		'&.is-vertical': {
			flexDirection: 'column',
			'align-items': 'flex-start',
			'&.is-content-justification-center': {
				'align-items': 'center',
			},
			'&.is-content-justification-right': {
				'align-items': 'flex-end',
			},
		},
		margin: '0 auto',
		'>.wp-block-button': {
			display: 'inline-block',
			margin: '0',
			...buttonWidths,
			'&.is-style-outline': {
				'>.wp-block-button__link': {
					border: '2px solid',
					'background-color': 'transparent',
					color: 'inherit',
				},
			},
			'>.wp-block-button__link': {
				width: '100%',
				...generalButtonStyle({ defaultColor }),
			},
		},
	},
});
