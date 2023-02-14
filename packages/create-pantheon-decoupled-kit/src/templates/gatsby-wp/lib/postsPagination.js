const { gql, GraphqlClientFactory } = require('@pantheon-systems/wordpress-kit')

const paginationClient = new GraphqlClientFactory(
	'https://dev-decoupled-wp-mock-data.pantheonsite.io/wp/graphql',
).create()

async function paginationPostsQuery() {
	const query = gql`
		query paginationPostsQuery {
			posts(first: 50) {
				edges {
					node {
						id
						title
						excerpt
					}
				}
			}
		}
	`

	const {
		posts: { edges },
	} = await paginationClient.request(query)

	return edges.map(({ node }) => node)
}

module.exports.paginationPostsQuery = paginationPostsQuery
