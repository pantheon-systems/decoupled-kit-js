import {
	latestPostsQuery,
	postPreview,
	postUriQuery,
} from '@cli/templates/partials/next-wp/wpPostsQueries';
import { taggedTemplateHelpers as utils } from '@cli/utils';

export const postQueryTemplate = ({
	wpAcfAddon,
}: {
	wpAcfAddon: boolean;
}) => /* js */ `import { gql } from '@pantheon-systems/wordpress-kit';
import { client, getAuthCredentials } from './WordPressClient';

export async function getLatestPosts(totalPosts) {
	const query = gql ${utils.backticks(latestPostsQuery())}

	const {
		data: {
			posts: { edges },
		},
		headers,
	} = await client.rawRequest(query, { totalPosts });
	const posts = edges.map(({ node }) => node);
	return { posts, headers };
}

export async function getPostByUri(uri) {
	const uriString = uri.join();
	const query = gql ${utils.backticks(postUriQuery(wpAcfAddon))}

	const {
		data: { post },
		headers,
	} = await client.rawRequest(query, { uriString });

	return { post, headers };
}

export async function getPostPreview(id) {
	const credentials = getAuthCredentials();
	client.setHeaders({ Authorization: ${utils.backticks`Basic \${credentials}`} });

	const query = gql ${utils.backticks(postPreview())}

	const { post } = await client.request(query, { id });

	return { post };
}
`;
