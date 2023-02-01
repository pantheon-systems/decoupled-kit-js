import Layout from '../components/layout';

export default function Custom404() {
	return (
		<Layout>
			<div className="flex flex-col mx-auto text-xl prose text-center mt-12">
				<h2>404: Could not find the requested page</h2>
			</div>
		</Layout>
	);
}
