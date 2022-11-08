import { alignment } from './shared';

export const ColumnsComponent = () => ({
	'.wp-block-columns': {
		...alignment,
		display: 'flex',
		margin: '1rem auto',
		'align-items': 'normal',
		'flex-wrap': 'wrap',
		gap: '1.5rem',
		'@media (min-width: 720px)': {
			'&:not(.is-not-stacked-on-mobile)': {
				'>.wp-block-column': {
					'flex-basis': '0',
					'flex-grow': '1',
				},
			},
			'flex-wrap': 'nowrap',
		},
		'@media (max-width: 719px)': {
			'&:not(.is-not-stacked-on-mobile)': {
				'>.wp-block-column': {
					'flex-basis': '100%',
				},
			},
		},
		'&.is-not-stacked-on-mobile': {
			'flex-wrap': 'nowrap',
		},
		'.wp-block-column': {
			'flex-wrap': 'wrap',
			'flex-grow': '1',
			minWidth: '0',
			'overflow-wrap': 'break-word',
		},
	},
});
