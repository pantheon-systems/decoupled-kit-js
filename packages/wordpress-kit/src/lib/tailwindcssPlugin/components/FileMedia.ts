import { generalButtonStyle } from './shared';

const anchor = {
	'text-decoration-thickness': '1px',
	'text-underline-offset': '0.25ch',
	'font-weight': 'unset',
	'&:hover': {
		'text-decoration-style': 'dashed',
	},
};

export const FileMediaComponent = ({
	defaultColor,
}: {
	defaultColor: string;
}) => ({
	'.wp-block-file': {
		a: anchor,
		margin: '0 auto',
		maxWidth: '650px',
		'&.alignwide': {
			maxWidth: '850px',
		},
		'&.alignfull': {
			'@media (min-width:1200px)': {
				// sets a negative margin to allow full width elements to span past the
				// width its parent container
				marginLeft: 'calc(-1 * max(2rem, 8vw))',
				marginRight: 'calc(-1 * max(2rem, 8vw))',
				maxWidth: 'unset',
			},
		},
		'&.alignleft': {
			float: 'left',
			marginRight: '1.5rem',
		},
		'&.alignright': {
			float: 'right',
			marginLeft: '1.5rem',
		},
		'.wp-block-file__button': {
			...generalButtonStyle({ defaultColor }),
			'margin-left': '1rem',
		},
	},
});
