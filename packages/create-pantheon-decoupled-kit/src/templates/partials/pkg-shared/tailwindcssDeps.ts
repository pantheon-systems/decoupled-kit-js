export const tailwindcssDeps = (devDeps: boolean): string => {
	if (devDeps) {
		return `"autoprefixer": "^10.4.16",
		"postcss": "^8.4.30",
		"tailwindcss": "^3.3.3",`;
	} else {
		return `"@tailwindcss/typography": "^0.5.7",`;
	}
};
