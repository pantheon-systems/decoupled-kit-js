import React from 'react';
export default function image(
	props: React.DetailedHTMLProps<
		React.ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>,
) {
	return <img {...props} />;
}
