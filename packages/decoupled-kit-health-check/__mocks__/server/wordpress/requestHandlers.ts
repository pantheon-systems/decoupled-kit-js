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

// using `/auth` to separate the requests since
// technically they are all going to `/wp/graphql`
// but since we are not using graphql proper to query,
// we need this workaround.
// const authorizedQuery = rest.get(`${endpoint}/auth`, ({ request }) => {
// 	const url = new URL(request.url);
// 	const query = /* graphql */ `query LatestPostsQuery {
// 			posts(where: { status: PRIVATE }) {
// 				edges {
// 					node {
// 						id
// 					}
// 				}
// 			}
// 		}`;
// 	const wpUsername = 'a1b2c3-d4e5g6';
// 	const wpPassword = 'mysecretsecret';
// 	const encodedCredentials = Buffer.from(
// 		`${wpUsername}:${wpPassword}`,
// 		'binary',
// 	).toString('base64');
// 	const auth = new RegExp(`${encodedCredentials}$`).test(
// 		request.headers.get('Authorization') ?? '',
// 	);

// 	if (url.searchParams.get('query') === query) {
// 		if (auth) {
// 			return new Response(
// 				JSON.stringify({
// 					data: {
// 						posts: {
// 							edges: [
// 								{
// 									node: {
// 										id: 'cG9zdDo1',
// 									},
// 								},
// 							],
// 						},
// 					},
// 				}),
// 			);
// 		} else {
// 			return new Response(
// 				JSON.stringify({
// 					data: {
// 						posts: {
// 							edges: [],
// 						},
// 					},
// 				}),
// 			);
// 		}
// 	}
// });

// using `/preview` to separate the requests
// const previewQuery = rest.get(`${endpoint}/preview`, ({ request }) => {
// 	const url = new URL(request.url);
// 	const query = /* graphql */ `query PostPreviewQuery {
// 			post(id: 1, idType: DATABASE_ID, asPreview: true) {
// 				title
// 				date
// 				featuredImage {
// 					node {
// 						altText
// 						sourceUrl
// 					}
// 				}
// 				content
// 			}
// 		}`;
// 	const wpUsername = 'a1b2c3-d4e5g6';
// 	const wpPassword = 'mysecretsecret';
// 	const encodedCredentials = Buffer.from(
// 		`${wpUsername}:${wpPassword}`,
// 		'binary',
// 	).toString('base64');
// 	const auth = new RegExp(`${encodedCredentials}$`).test(
// 		request.headers.get('Authorization') ?? '',
// 	);
// 	if (url.searchParams.get('query') === query) {
// 		if (auth) {
// 			return new Response(
// 				JSON.stringify({
// 					data: {
// 						post: {
// 							title: 'Hello world!',
// 							date: '2023-04-10T03:49:12',
// 							featuredImage: null,
// 							content:
// 								'\n<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing! </p>\n\n\n\n<p></p>\n',
// 						},
// 					},
// 				}),
// 			);
// 		} else {
// 			return new Response(
// 				JSON.stringify({
// 					errors: [
// 						{
// 							message: 'Internal server error',
// 							extensions: {
// 								category: 'internal',
// 							},
// 							locations: [
// 								{
// 									line: 2,
// 									column: 3,
// 								},
// 							],
// 							path: ['post'],
// 						},
// 					],
// 					data: {
// 						post: null,
// 					},
// 				}),
// 			);
// 		}
// 	}
// });

// const menuQuery = rest.get(`${endpoint}/menu`, ({ request }) => {
// 	const url = new URL(request.url);
// 	const query = /* graphql */ `query FooterMenuQuery {
// 			menu(idType: NAME, id: "Example Menu") {
// 				menuItems {
// 					edges {
// 						node {
// 							id
// 							path
// 							label
// 						}
// 					}
// 				}
// 			}
// 		}`;

// 	if (url.searchParams.get('query') === query) {
// 		console.log('MATCHED');
// 		return new Response(
// 			JSON.stringify({
// 				data: {
// 					menu: {
// 						menuItems: {
// 							edges: [
// 								{
// 									node: {
// 										id: 'cG9zdDo4',
// 										path: '/example-post-with-image/',
// 										label: 'Example Post with Image',
// 									},
// 								},
// 							],
// 						},
// 					},
// 				},
// 			}),
// 		);
// 	}
// });

const invalidMenuQuery = rest.get(`${invalidEndpoint}/menu`, ({ request }) => {
	const url = new URL(request.url);
	const query = /* graphql */ `query FooterMenuQuery {
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

	if (url.searchParams.get('query') === query) {
		console.log('MATCHED');
		return new Response(
			JSON.stringify({
				error: [{ message: 'Not found' }],
			}),
		);
	}
});

export const wordpressRequestHandlers = [validResponses, invalidResponses];
