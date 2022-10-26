export const PullQuoteComponent = {
	'.wp-block-pullquote': {
		'&.alignleft': {
			float: 'left',
			maxWidth: '30rem',
			minWidth: '20rem',
		},
		'&.alignright': {
			float: 'right',
			maxWidth: '30rem',
			minWidth: '20rem',
		},
		'&.alignwide': {
			maxWidth: '1000px',
		},
		'&.alignfull': {
			'@media (min-width:720px)': {
				// sets a negative margin to allow full width elements to span past the
				// width its parent container
				marginLeft: 'calc(-1 * max(1rem, 10vw))',
				marginRight: 'calc(-1 * max(1rem, 10vw))',
				maxWidth: 'unset',
			},
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
