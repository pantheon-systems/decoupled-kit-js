import { type WindowLocation } from '@gatsbyjs/reach-router';
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

export interface PrivatePosts {
	id: string;
}

export interface PrivatePostsQuery {
	posts: QueryType<PrivatePosts>;
}

export interface GatsbyGraphQLHelper {
	graphql: CreatePagesArgs['graphql'];
	reporter: CreatePagesArgs['reporter'];
}

/**
 * Pagination component breakpoints
 */
export interface Breakpoints {
	start: number | null;
	end: number | null;
	add: number | null;
}

export type PaginatorLocation = WindowLocation<{
	breakpoints?: Breakpoints;
	breakOpen?: boolean;
}>;

export interface PaginatorProps<DataType> {
	data: DataType;
	breakpoints?: Breakpoints;
	itemsPerPage: number;
	routing: boolean;
	/**
	 * The component used to render the list of currentItems
	 */
	Component: React.FC<{ currentItems: DataType }>;
	location: PaginatorLocation;
}
