export const CloseSVG = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="20" cy="20" r="20" fill="none" />
			<path d="M11 11L29 29" stroke="black" strokeWidth="2" />
			<path d="M29 11L11 29" stroke="black" strokeWidth="2" />
		</svg>
	);
};

export const HamburgerMenuSVG = () => {
	return (
		<svg
			aria-label="open"
			width="24"
			height="24"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="20" cy="20" r="20" fill="none" />
			<path
				d="M9 12H31"
				stroke="#171717"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M9 20H31"
				stroke="#171717"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M9 28L31 28"
				stroke="#171717"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
};
