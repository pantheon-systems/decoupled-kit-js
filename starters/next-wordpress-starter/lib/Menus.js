import { gql } from '@pantheon-systems/wordpress-kit';
import { client } from './WordPressClient';

export async function getFooterMenu() {
	const query = gql`
		query FooterMenuQuery {
			menu(idType: NAME, id: "Example Menu") {
				menuItems {
					edges {
						node {
							id
							path
							label
						}
					}
				}
			}
		}
	`;

	try {
		const { menu } = await client.request(query);
		if (!menu) {
			throw new Error(
				'No footer menu data available. Try customizing your query.',
			);
		}
		return menu?.menuItems?.edges?.map(({ node }) => node);
	} catch (error) {
		console.error(error.message);
		return [];
	}
}
