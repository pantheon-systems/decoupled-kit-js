import { defaultFetch } from '@pantheon-systems/drupal-kit';
import { ServerResponse } from 'http';

import { NextResponse } from 'next/server';

export const getDrupalSearchResults = async (id, index) => {
	if (!index) {
		index = 'articles_index';
	}
	const newResponse = new ServerResponse(new NextResponse());

	const res = await defaultFetch(
		`https://search-api-decoupled-drupal-qa.pantheonsite.io/en/jsonapi/index/${index}?filter[fulltext]=${id}`,
		{},
		newResponse,
	);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
};
