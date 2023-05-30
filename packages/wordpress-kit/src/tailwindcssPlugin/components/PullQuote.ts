import { alignment } from './shared';

export const PullQuoteComponent = {
	'.wp-block-pullquote': {
		...alignment,
		'&.alignleft': {
			...alignment['&.alignleft'],
			maxWidth: '30rem',
			minWidth: '20rem',
		},
		'&.alignright': {
			...alignment['&.alignright'],
			maxWidth: '30rem',
			minWidth: '20rem',
		},
		blockquote: {
			p: {
				fontSize: '1.75em',
				lineHeight: '1.6',
				fontWeight: '300',
			},
			cite: {
				textTransform: 'uppercase',
				fontSize: '.8em',
				fontStyle: 'normal',
			},
			paddingRight: '1em',
			border: 'none',
			color: 'inherit',
			quotes: 'none',
			fontStyle: 'normal',
		},
		margin: 'auto',
		maxWidth: '650px',
		borderColor: 'currentColor',
		borderWidth: '1px 0',
		marginBottom: '0',
		marginTop: '0',
		padding: '2em 0',
		textAlign: 'center',
	},
};
