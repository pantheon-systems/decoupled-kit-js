export const PullQuoteComponent = ({ quoteSize }: { quoteSize: string }) => ({
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
			maxWidth: '850px',
		},
		'&.alignfull': {
			maxWidth: 'none',
		},
		blockquote: {
			p: {
				fontSize: quoteSize,
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
		},
		margin: 'auto',
		maxWidth: '650px',
		borderColor: 'currentColor',
		borderWidth: '3px 0',
		marginBottom: '0',
		marginTop: '0',
		padding: '2em 0',
	},
});
