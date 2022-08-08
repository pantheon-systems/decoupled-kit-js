import GraphqlClientFactory from './src/lib/GraphqlClientFactory';
import tailwindcssPlugin from './src/lib/TailwindcssPlugin';
import { gql } from 'graphql-request';

import type { TailwindcssConfig } from './src/types/TailwindcssPlugin';

export { GraphqlClientFactory, gql, tailwindcssPlugin };
export type { TailwindcssConfig };
