import { ApolloClientFactory } from '../index';

import './style.css';

// Additional examples for local development purposes can be added here.

const client = new ApolloClientFactory(
  'https://dev-wp-canary.pantheonsite.io/wp/graphql/'
).create();

console.log('Client instance: ', client);

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>WordPress Kit Debug</h1>
`;
