import { getDrupalSearchResults } from '../../lib/getDrupalSearchResults';

export default async function SearchPage({ searchParams }) {
	let data = null;
	if (searchParams?.q) {
		data = await getDrupalSearchResults(encodeURI(searchParams.q));
	}

	return (
		<main>
			<div>
				<p className="text-xl flex pt-3 pr-3 justify-center">Search Results</p>
			</div>
		</main>
	);
}
