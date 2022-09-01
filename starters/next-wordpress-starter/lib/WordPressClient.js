import { GraphqlClientFactory } from "@pantheon-systems/wordpress-kit";

export const client = new GraphqlClientFactory(process.env.backendUrl).create();
