import { ApolloClientFactory, ApolloProvider, gql } from "@pantheon/wordpress-kit"

const client = new ApolloClientFactory(process.env.WPGRAPHQL_URL).create()

export { client, ApolloProvider, gql }
