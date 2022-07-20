import GraphqlClientFactory from './src/lib/GraphqlClientFactory';
import tailwindcssPlugin from './src/lib/tailwindcssPlugin';
import { gql } from 'graphql-request';

import type { TailwindcssConfig } from './src/lib/tailwindcssPlugin';

export { GraphqlClientFactory, gql, tailwindcssPlugin };
export type { TailwindcssConfig };
