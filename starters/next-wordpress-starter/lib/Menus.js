import { gql } from "@pantheon-systems/wordpress-kit";
import { client } from "./WordpressClient";

export async function getFooterMenu() {
  const query = gql`
    query FooterMenuQuery {
      menus(where: { location: FOOTER }) {
        edges {
          node {
            id
            menuItems {
              edges {
                node {
                  id
                  uri
                  label
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await client.request(query);

  const footerMenu = data.menus.edges.flatMap((node) => {
    return node.node.menuItems.edges.map((menuItem) => {
      return menuItem.node;
    });
  });

  return footerMenu;
}
