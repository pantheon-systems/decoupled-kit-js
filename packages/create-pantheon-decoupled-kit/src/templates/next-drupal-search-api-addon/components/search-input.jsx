import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './searchInput.module.css';

const SearchInput = () => {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState(
		router.query?.searchAlias ? router.query?.searchAlias[0] : '',
	);

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
			<div className={styles.container}>
				<label htmlFor="search">
					<input
						className={styles.searchInput}
						type="search"
						value={searchQuery || ''}
						onChange={(event) => setSearchQuery(event.target.value)}
						placeholder="Search"
						id="search"
						aria-label="Search Bar"
					/>
				</label>

				<button
					className={styles.searchBtn}
					type="submit"
					id="submit-btn"
					aria-label="Submit Search"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className={styles.icon}
					>
						<path
							fillRule="evenodd"
							d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</form>
	);
};

export default SearchInput;
