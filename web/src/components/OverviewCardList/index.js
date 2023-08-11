import React from 'react';
import DocCardList_Custom from '../DocCardList_Custom';

export default function OverviewCardList() {
	const items = [
		{
			label: 'Frontend Starters',
			description: 'Guides for the frontend',
			href: '/docs/frontend-starters',
			type: 'category',
		},
		{
			label: 'Backend Starters',
			description: 'Guides for the backend',
			href: '/docs/backend-starters',
			type: 'category',
		},
		{
			label: 'npm Packages',
			description: 'API reference for @pantheon-systems npm packages',
			href: '/docs/packages',
			type: 'category',
		},
	];

	return <DocCardList_Custom items={items} />;
}
