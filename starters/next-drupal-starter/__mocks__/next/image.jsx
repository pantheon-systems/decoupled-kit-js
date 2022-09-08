// Mock the next/image component because it relies on next.config.js
export default function (props) {
	const { src, alt, width } = props;
	return <img src={src} alt={alt} width={width} />;
}
