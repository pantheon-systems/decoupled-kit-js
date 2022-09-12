const getFigureStyles = (mobileScreen: string) => {
	let styles = {
		'&.columns-default': {
			figure: {
				// This calc is to divide the width by the number of columns
				// and then subtract 1rem to account for the gap between columns/rows.
				[`@media (min-width: ${mobileScreen})`]: {
					width: 'calc(33.33% - 1rem) !important',
				},
			},
		},
		figure: {
			width: 'calc(50% - 1rem);',
			margin: '0',
			display: 'flex',
			flexGrow: '1',
			position: 'relative',
			maxWidth: '100%',
			flexDirection: 'column',
			alignItems: 'flex-start',
		},
	};

	for (let column = 1; column <= 8; column++) {
		styles = {
			...styles,
			[`&.columns-${column}`]: {
				figure: {
					[`@media (min-width: ${mobileScreen})`]: {
						// This calc is to divide the width by the number of columns
						// and then subtract 1rem to account for the gap between columns/rows.
						width: `calc(${100 / column}% - 1rem) !important`,
					},
				},
			},
		};
	}

	return styles;
};

const isCropped = {
	'&.is-cropped': {
		'a > img': {
			width: '100%',
			height: '100%',
			flex: '1 0 0%',
		},
		a: {
			width: '100%',
			height: '100%',
			flex: '1 0 0%',
		},
		'figure > img': {
			width: '100%',
			height: '100%',
			flex: '1 0 0%',
		},
		figure: {
			justifyContent: 'center',
		},
	},
};

export const GalleryComponent = ({
	alignFull: { minWidth },
}: {
	alignFull: { minWidth: string };
}) => {
	const figureStyles = getFigureStyles('600px');

	const gallery = {
		'.wp-block-gallery': {
			display: 'flex',
			flexWrap: 'wrap',
			alignItems: 'normal',
			maxWidth: '650px',
			'&.alignwide': {
				maxWidth: '850px',
			},
			'&.alignfull': {
				[`@media (min-width:${minWidth})`]: {
					// sets a negative margin to allow full width tables to span past the
					// width its parent container
					marginLeft: 'calc(-1 * max(1rem, 10vw))',
					marginRight: 'calc(-1 * max(1rem, 10vw))',
					maxWidth: 'unset',
				},
			},
			'&.alignleft': {
				float: 'left',
				marginRight: '1.5rem',
				maxWidth: '480px',
			},
			'&.alignright': {
				float: 'right',
				marginLeft: '1.5rem',
				maxWidth: '480px',
			},
			marginLeft: 'auto',
			marginRight: 'auto',
			gap: '1rem',
			'a > img': {
				margin: '0',
				maxWidth: '100%',
				objectFit: 'cover',
			},
			'figure > img': {
				margin: '0',
				maxWidth: '100%',
				objectFit: 'cover',
			},
			'figure > figcaption': {
				background:
					'linear-gradient(0deg,rgba(0,0,0,.7),rgba(0,0,0,.3) 70%,transparent)',
				bottom: '0',
				position: 'absolute',
				color: '#fff',
				fontSize: '13px',
				left: '0',
				marginBottom: '0',
				maxHeight: '60%',
				overflow: 'auto',
				textAlign: 'center',
				width: '100%',
				boxSizing: 'border-box',
			},
			'figure.is-style-rounded > figcaption': {
				background: 'none',
				flex: 'initial',
				position: 'relative',
				color: 'inherit',
				padding: '10px 10px 9px',
				margin: '0',
			},
			figcaption: {
				marginTop: '0',
				fontSize: '.9rem',
				flexGrow: '1',
				flexBasis: '100%',
				textAlign: 'center',
				padding: '0 8px 8px',
			},
			...figureStyles,
			...isCropped,
		},
	};
	return gallery;
};
