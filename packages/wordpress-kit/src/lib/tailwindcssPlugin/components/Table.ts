type mediaType = '@media (min-width: 1208px)';

const borderInheritance = {
	borderColor: 'inherit',
	borderStyle: 'inherit',
	borderWidth: 'inherit',
};

export const TableComponent = ({
	stripeColor,
	alignFull: { minWidth },
}: {
	stripeColor: string;
	alignFull: {
		minWidth: string;
	};
}) => ({
	'.wp-block-table': {
		td: {
			padding: '0.5em',
		},
		table: {
			thead: {
				tr: {
					...borderInheritance,
					th: {
						padding: '0.5em',
						color: 'inherit',
						textAlign: 'center',
						'&.has-text-align-left': {
							textAlign: 'left',
						},
						'&.has-text-align-right': {
							textAlign: 'right',
						},
					},
				},
				...borderInheritance,
			},
			tbody: {
				...borderInheritance,
				tr: {
					...borderInheritance,
					td: {
						...borderInheritance,
					},
				},
			},
			tfoot: {
				...borderInheritance,
				tr: {
					...borderInheritance,
					td: {
						padding: '0.5em',
						color: 'inherit',
						...borderInheritance,
					},
				},
			},
			'&.has-fixed-layout': {
				width: 'unset',
				tableLayout: 'fixed',
			},
			maxWidth: '650px',
			margin: 'auto',
			...borderInheritance,
		},
		figcaption: {
			fontSize: '.9rem',
			textAlign: 'center',
		},
		'&.is-style-stripes': {
			margin: '0',
			table: {
				tbody: {
					'tr:nth-child(odd)': {
						backgroundColor: stripeColor,
					},
				},
			},
		},
		'&.alignwide': {
			padding: '0 1.5rem',
			table: {
				maxWidth: '850px',
			},
		},
		'&.alignfull': {
			[`@media (min-width:${minWidth})` as mediaType]: {
				// sets a negative margin to allow full width tables to span past the
				// width its parent container
				marginLeft: 'calc(-1 * max(1rem, 10vw))',
				marginRight: 'calc(-1 * max(1rem, 10vw))',
			},
			width: 'unset',
			table: {
				maxWidth: 'none',
			},
			padding: '0',
		},
		overflowX: 'auto',
		padding: '0 2.5rem',
	},
});
