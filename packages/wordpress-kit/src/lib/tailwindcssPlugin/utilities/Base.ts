export class BaseUtilities {
	static getHeadingsAlignmentUtilities = () => {
		const headings = Array.from({ length: 6 }, (_, i) => i + 1).map(
			(headingNumber) => ({
				[`>h${headingNumber}`]: {
					'@media (min-width: 640px)': {
						maxWidth: '640px',
					},
					'@media (min-width: 768px)': {
						maxWidth: '768px',
					},
					'@media (min-width: 1024px)': {
						maxWidth: '1024px',
					},
					margin: '0 auto',
					padding: '0 1rem',
					'&.alignwide': {
						maxWidth: '1240px',
					},
					'&.alignfull': {
						maxWidth: 'unset',
						margin: '0 -3rem',
					},
				},
			}),
		);

		return headings.reduce((acc, heading) => ({ ...acc, ...heading }), {});
	};
	baseUtilities = {
		'.ps-wp-content': {
			...BaseUtilities.getHeadingsAlignmentUtilities(),
			'@media (min-width: 640px)': {
				p: {
					'max-width': '640px',
				},
			},
			'@media (min-width: 768px)': {
				p: {
					'max-width': '768px',
				},
			},
			'@media (min-width: 1024px)': {
				p: {
					'max-width': '1024px',
				},
			},
			p: {
				marginRight: 'auto',
				marginLeft: 'auto',
				padding: '0 1rem',
			},
		},
	};
}
