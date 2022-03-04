import { ApolloClientFactory, ApolloProvider, gql } from "@pantheon-systems/wordpress-kit"

const client = new ApolloClientFactory(process.env.WPGRAPHQL_URL).create()

export { client, ApolloProvider, gql }
