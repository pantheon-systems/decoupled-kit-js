import React from "react"
import { client, ApolloProvider } from "./apollo-client"

export const SSRWrapper = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
