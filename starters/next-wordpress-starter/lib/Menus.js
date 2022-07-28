import { gql } from "@pantheon-systems/wordpress-kit";
import { client } from "./WordpressClient";

export async function getFooterMenu() {
  const query = gql`
    query FooterMenuQuery {
      menu(idType: NAME, id: "Example Menu") {
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
  `;

  const {
    menu: {
      menuItems: { edges },
    },
  } = await client.request(query);

  return edges.map(({ node }) => ({
    ...node,
    uri: node.uri.startsWith("http") ? formatUri(node.uri) : node.uri,
  }));
}

const formatUri = (uri) => new URL(uri).pathname;
