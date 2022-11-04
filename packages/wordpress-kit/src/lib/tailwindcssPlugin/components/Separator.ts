export const SeparatorComponent = () => {
	return {
		'.wp-block-separator': {
			border: 'none',
			borderBottom: '2px solid',
			marginLeft: 'auto',
			marginRight: 'auto',
			borderColor: 'black !important',
			'&.is-style-default': {
				width: '100px',
			},
			'&.is-style-wide': {
				maxWidth: '720px',
				marginLeft: 'auto !important',
				marginRight: 'auto !important',
			},
			'&.is-style-dots': {
				background: 'none!important',
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
		},
	};
};
