import { rest } from 'msw';

const endpoint = 'https://wordpress.test/wp/graphql';
const invalidEndpoint = 'https://invalid.wordpress.test/wp/graphql';

const validResponses = rest.get(`${endpoint}`, ({ request }) => {
	const url = new URL(request.url);
	const authQuery = /* graphql */ `query LatestPostsQuery {
				posts(where: { status: PRIVATE }) {
					edges {
						node {
							id
						}
					}
				}
			}`;
	const previewQuery = /* graphql */ `query PostPreviewQuery {
				post(id: 1, idType: DATABASE_ID, asPreview: true) {
					title
					date
					featuredImage {
						node {
							altText
							sourceUrl
						}
					}
					content
				}
			}`;
	const menuQuery = /* graphql */ `query FooterMenuQuery {
			menu(idType: NAME, id: "Example Menu") {
				menuItems {
					edges {
						node {
							id
							path
							label
						}
					}
				}
			}
		}`;
	const wpGatsbyQuery = /* graphql */ `query checkWpGatsby {
			isWpGatsby
		}`;
	switch (url.searchParams.get('query')) {
		case '{__typename}':
			return new Response(
				JSON.stringify({
					data: {
						__typename: 'RootQuery',
					},
				}),
			);
		case authQuery: {
			const wpUsername = 'a1b2c3-d4e5g6';
			const wpPassword = 'mysecretsecret';
			const encodedCredentials = Buffer.from(
				`${wpUsername}:${wpPassword}`,
				'binary',
			).toString('base64');
			const auth = new RegExp(`${encodedCredentials}$`).test(
				request.headers.get('Authorization') ?? '',
			);
			if (auth) {
				return new Response(
					JSON.stringify({
						data: {
							posts: {
								edges: [
									{
										node: {
											id: 'cG9zdDo1',
										},
									},
								],
							},
						},
					}),
				);
			} else {
				return new Response(
					JSON.stringify({
						data: {
							posts: {
								edges: [],
							},
						},
					}),
				);
			}
		}
		case previewQuery: {
			const wpUsername = 'a1b2c3-d4e5g6';
			const wpPassword = 'mysecretsecret';
			const encodedCredentials = Buffer.from(
				`${wpUsername}:${wpPassword}`,
				'binary',
			).toString('base64');
			const auth = new RegExp(`${encodedCredentials}$`).test(
				request.headers.get('Authorization') ?? '',
			);
			if (auth) {
				return new Response(
					JSON.stringify({
						data: {
							post: {
								title: 'Hello world!',
								date: '2023-04-10T03:49:12',
								featuredImage: null,
								content:
									'\n<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing! </p>\n\n\n\n<p></p>\n',
							},
						},
					}),
				);
			} else {
				return new Response(
					JSON.stringify({
						errors: [
							{
								message: 'Internal server error',
								extensions: {
									category: 'internal',
								},
								locations: [
									{
										line: 2,
										column: 3,
									},
								],
								path: ['post'],
							},
						],
						data: {
							post: null,
						},
					}),
				);
			}
		}
		case menuQuery:
			return new Response(
				JSON.stringify({
					data: {
						menu: {
							menuItems: {
								edges: [
									{
										node: {
											id: 'cG9zdDo4',
											path: '/example-post-with-image/',
											label: 'Example Post with Image',
										},
									},
								],
							},
						},
					},
				}),
			);
		case wpGatsbyQuery:
			return new Response(
				JSON.stringify({
					data: {
						isWpGatsby: true,
					},
				}),
			);
		case previewQuery:

		default:
			return new Response(
				JSON.stringify({ errors: [{ message: 'Not found' }] }),
				{ status: 404 },
			);
	}
});

const invalidResponses = rest.get(`${invalidEndpoint}`, () => {
	return new Response(JSON.stringify({ errors: [{ message: 'Not found' }] }), {
		status: 404,
	});
});

const noWPGatsbyPlugin = rest.get(
	`https://wordpress.test.no-plugin/wp/graphql`,
	({ request }) => {
		const url = new URL(request.url);
		if (url.searchParams.get('query') !== '{__typename}') {
			return new Response(
				JSON.stringify({ errors: [{ message: 'Not found' }] }),
				{
					status: 404,
				},
			);
		}
		return new Response(JSON.stringify({ data: 'success' }), {
			status: 200,
		});
	},
);

export const wordpressRequestHandlers = [
	validResponses,
	invalidResponses,
	noWPGatsbyPlugin,
];
