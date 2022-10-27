import { alignment, generalButtonStyle } from './shared';

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
		...alignment,
		'&.alignleft': {
			marginRight: '1.5rem',
			...alignment['&.alignleft'],
		},
		'&.alignright': {
			marginLeft: '1.5rem',
			...alignment['&.alignright'],
		},
		'.wp-block-file__button': {
			...generalButtonStyle({ defaultColor }),
			'margin-left': '1rem',
		},
	},
});
