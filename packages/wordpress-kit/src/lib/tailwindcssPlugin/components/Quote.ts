export const Quote = {
	'.wp-block-quote': {
		quotes: 'none',
		borderLeft: '1px solid',
		paddingLeft: '1em',
		'padding-top': '0',
		'padding-bottom': '0',
		maxWidth: '650px',
		'margin-left': 'auto',
		'margin-right': 'auto',
		'&.has-text-align-center': {
			border: 'none',
		},
		'&.has-text-align-right': {
			borderLeft: 'none',
			paddingRight: '1em',
			borderRight: '1px solid',
		},
		'&.is-style-plain': {
			border: 'none',
		},
		cite: {
			fontStyle: 'normal',
			fontSize: '0.8em',
		},
	},
};
