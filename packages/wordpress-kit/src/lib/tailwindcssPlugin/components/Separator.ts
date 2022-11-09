export const SeparatorComponent = () => {
	return {
		'.wp-block-separator': {
			border: 'none',
			borderBottom: '2px solid',
			marginLeft: 'auto',
			marginRight: 'auto',
			borderColor: 'black !important',
			'&.wp-block-separator:not(.is-style-wide):not(.is-style-dots)': {
				width: '100px',
			},
			'&.is-style-wide': {
				maxWidth: '720px',
				marginLeft: 'auto !important',
				marginRight: 'auto !important',
			},
			'&.alignwide.is-style-wide': {
				maxWidth: '1000px',
			},
			'&.alignfull.is-style-wide': {
				maxWidth: 'revert',
			},
			'&.is-style-dots': {
				background: 'none !important',
				border: 'none',
				textAlign: 'center',
				lineHeight: '1',
				height: 'auto',
			},
			'&.is-style-dots:before': {
				content: '"···"',
				color: 'currentColor',
				fontSize: '1.5em',
				letterSpacing: '2em',
				paddingLeft: '2em',
				fontFamily: 'serif',
			},
			'&.has-background': {
				padding: '0',
			},
			'&.has-background:not(.is-style-dots)': {
				borderBottom: 'none',
				height: '1px',
				padding: '0',
			},
			'&.wp-block-separator.has-background:not(.is-style-wide):not(.is-style-dots)':
				{
					height: '2px',
				},
		},
	};
};
