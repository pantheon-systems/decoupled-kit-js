export const generalButtonStyle = ({
	defaultColor,
}: {
	defaultColor: string;
}) => ({
	display: 'inline-block',
	padding: 'calc(0.667em + 2px) calc(1.333em + 2px)',
	textDecoration: 'none',
	textAlign: 'center',
	'font-weight': 'unset',
	color: '#fff',
	cursor: 'pointer',
	'box-sizing': 'border-box',
	backgroundColor: defaultColor,
	'&:hover': {
		opacity: '0.9',
		textDecoration: 'none',
	},
});
