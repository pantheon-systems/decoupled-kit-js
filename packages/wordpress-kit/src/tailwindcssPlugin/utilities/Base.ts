export class BaseUtilities {
	static getHeadingsAlignmentUtilities = () => {
		const headings = Array.from({ length: 6 }, (_, i) => i + 1).map(
			(headingNumber) => ({
				[`>h${headingNumber}`]: {
					maxWidth: '720px',
					margin: '0 auto',
					'&.alignwide': {
						maxWidth: '1024px',
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
			p: {
				marginRight: 'auto',
				marginLeft: 'auto',
				maxWidth: '720px',
			},
		},
	};
}
