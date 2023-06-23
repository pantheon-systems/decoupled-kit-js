export const tailwindcssDeps = (devDeps: boolean) => {
	if (devDeps) {
		return `"autoprefixer": "^10.4.12",
		"postcss": "^8.4.21",
		"tailwindcss": "^3.3.2",`;
	} else {
		return `"@tailwindcss/typography": "^0.5.7",`;
	}
};
