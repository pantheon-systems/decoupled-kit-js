import { DrupalState } from './index';

import './style.css';

const store = new DrupalState({
	apiBase: 'https://dev-ds-demo.pantheonsite.io',
});

// Uncomment to enable auth example for local testing

// const authStore = new DrupalState({
//   apiBase: 'http://demo-decoupled-bridge.lndo.site',
//   clientId: 'client-id',
//   clientSecret: 'client-secret',
// });

const recipesFromApi = await store.getObject({ objectName: 'node--recipe' });

// const taxonomy = await authStore.getObject({
//   objectName: 'taxonomy_vocabulary--taxonomy_vocabulary',
// });

console.log(recipesFromApi);
// console.log(taxonomy);

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello World</h1>
`;
