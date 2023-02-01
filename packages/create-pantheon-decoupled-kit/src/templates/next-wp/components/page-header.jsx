export default function PageHeader({ title }) {
	return (
		<header className="prose text-2xl mx-auto mt-20">
			<h1 className="text-center mx-auto">{title}</h1>
		</header>
	);
}
