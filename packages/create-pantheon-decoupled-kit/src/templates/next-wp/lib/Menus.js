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
		const {
			data: { menu },
			headers,
		} = await client.rawRequest(query);

		if (!menu) {
			throw new Error(
				'No footer menu data available. Try customizing your query.',
			);
		}
		const footerMenuItems = menu?.menuItems?.edges?.map(({ node }) => node);
		return { footerMenuItems, footerMenuItemHeaders: headers };
	} catch (error) {
		console.error(error.message);
		return [];
	}
}

export async function getHeaderMenu(id) {
	const query = gql`
		query NavigationMenu {
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
		const {
			data: { menu },
			headers,
		} = await client.rawRequest(query);

		if (!menu) {
			throw new Error(
				'No header menu data available. Try customizing your query.',
			);
		}
		const headerMenuItems = menu?.menuItems?.edges?.map(({ node }) => node);
		return { headerMenuItems, headerMenuItemHeaders: headers };
	} catch (error) {
		console.error(error.message);
		return [];
	}
}
