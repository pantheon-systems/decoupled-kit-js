import { ApolloClient } from '@apollo/client';
import ApolloClientFactory from '../ApolloClientFactory';

test('Create Apollo Client instance from factory', () => {
  const client = new ApolloClientFactory(
    'http://localhost:4000/graphql'
  ).create();
  expect(client).toBeInstanceOf(ApolloClient);
});
