import { type CreatePagesArgs } from 'gatsby';

interface QueryType<Type> {
	edges: {
		node: Type;
	}[];
}

type PostKeys = 'id' | 'title' | 'excerpt';

export type Post = {
	[key in PostKeys]: string;
};

export interface PostsQuery {
	posts: QueryType<Post>;
}

export type PrivatePosts = {
	id: string;
};

export interface PrivatePostsQuery {
	posts: QueryType<PrivatePosts>;
}

export interface GatsbyGraphQLHelper {
	graphql: CreatePagesArgs['graphql'];
	reporter: CreatePagesArgs['reporter'];
}
