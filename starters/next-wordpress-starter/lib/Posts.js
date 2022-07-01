import { gql } from "@pantheon-systems/wordpress-kit";
import { client } from "./WordpressClient";

export async function getLatestPosts() {
  const query = gql`
    query LatestPostsQuery {
      posts(first: 10) {
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
    posts: { edges },
  } = await client.request(query);

  return edges.map(({ node }) => node);
}
