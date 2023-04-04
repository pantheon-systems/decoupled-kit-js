import { useRouter } from 'next/router';
import { useState } from 'react';

const SearchInput = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const router = useRouter();

	const onSearch = (event) => {
		event.preventDefault();

		if (!searchQuery) {
			return;
		}

		const encodedSearchQuery = encodeURI(searchQuery);
		router.push(`/search/${encodedSearchQuery}`);
	};

	return (
		<form onSubmit={onSearch}>
			<label htmlFor="search">
				<input
					value={searchQuery || ''}
					onChange={(event) => setSearchQuery(event.target.value)}
					className="py-1 sm:px-5 text-black rounded-full focus:outline-none ring-[1px] ring-black"
					placeholder="Search"
					id="search"
					aria-label="Search Bar"
				/>
			</label>
			<button
				type="submit"
				id="submit-btn"
				className="ml-1.5 text-black rounded-full ring-[1px] ring-black px-5 py-1 hover:bg-blue-500"
				aria-label="Submit Search"
			>
				Submit
			</button>
		</form>
	);
};

export default SearchInput;
