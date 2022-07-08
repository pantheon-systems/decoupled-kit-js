import { gql } from "@pantheon-systems/wordpress-kit";
import { client } from "./WordpressClient";

export async function getLatestPages() {
  const query = gql`
    query LatestPagesQuery {
      pages(first: 10) {
        edges {
          node {
            id
            uri
            title
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  `;

  const {
    pages: { edges },
  } = await client.request(query);

  return edges.map(({ node }) => node);
}
