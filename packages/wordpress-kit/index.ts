import GraphqlClientFactory from './src/lib/GraphqlClientFactory';
import tailwindcssPlugin from './src/lib/TailwindcssPlugin';
import { gql } from 'graphql-request';
import setEdgeHeader from './src/lib/setEdgeHeader';

import type { TailwindcssConfig } from './src/types/TailwindcssPlugin';

export { GraphqlClientFactory, gql, tailwindcssPlugin, setEdgeHeader };
export type { TailwindcssConfig };
