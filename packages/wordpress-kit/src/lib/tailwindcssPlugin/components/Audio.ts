import { alignment } from './shared';

export const AudioComponent = () => {
	return {
		'.wp-block-audio': {
			margin: '0 auto',
			'> figcaption': {
				marginTop: '0',
				textAlign: 'center',
				fontSize: '0.875rem',
				color: '#555',
			},
			'> audio': {
				width: '100%',
				minWidth: '300px',
			},
			...alignment,
		},
	};
};
