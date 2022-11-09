const borderInheritance = {
	borderColor: 'inherit',
	borderStyle: 'inherit',
	borderWidth: 'inherit',
};

export const TableComponent = ({ stripeColor }: { stripeColor: string }) => ({
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
			maxWidth: '720px',
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
				maxWidth: '1370px',
			},
		},
		'&.alignfull': {
			width: 'unset',
			table: {
				maxWidth: 'none',
			},
			padding: '0',
			marginRight: '-3rem',
			marginLeft: '-3rem',
		},
		'&.alignleft': {
			float: 'left',
			marginInlineStart: '0',
			marginInlineEnd: '2em',
		},
		'&.alignright': {
			float: 'right',
			marginInlineStart: '2em',
			marginInlineEnd: '0',
		},
		overflowX: 'auto',
		padding: '0 2.5rem',
	},
});
