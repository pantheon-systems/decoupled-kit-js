import GraphqlClientFactory from '../GraphqlClientFactory';
import { GraphQLClient } from 'graphql-request';

test('Create graphql-request Client instance from factory', () => {
  const client = new GraphqlClientFactory(
    'http://localhost:4000/graphql'
  ).create();
  expect(client).toBeInstanceOf(GraphQLClient);
});
