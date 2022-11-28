const path = require(`path`)
const chunk = require(`lodash/chunk`)
const { paginationPostsQuery } = require('./lib/postsPagination')
const { privatePostsQuery } = require('./lib/privatePosts')

exports.createPages = async gatsbyUtilities => {
	const pagPosts = await paginationPostsQuery()
	const privatePosts = await privatePostsQuery()
	const pages = await getPages(gatsbyUtilities)
	const posts = await getPosts(gatsbyUtilities)
	const routing = true

	if (pages.length) {
		await createIndividualPages({ pages, gatsbyUtilities })
		await createPageIndex({ pages, gatsbyUtilities, routing })
	}

	if (posts.length) {
		await createPostArchive({ posts, gatsbyUtilities })
		await createIndividualPostPages({ posts, gatsbyUtilities })
		await createPostIndex({ posts, gatsbyUtilities, routing })
		await createPagination({ pagPosts, gatsbyUtilities, routing })
	}
	await createExamplesPage({ gatsbyUtilities, routing })
	await createAuthApiPage({ gatsbyUtilities, privatePosts })
}

const createIndividualPages = async ({ pages, gatsbyUtilities }) =>
	Promise.all(
		pages.map(({ previous, page, next }) =>
			// createPage is an action passed to createPages
			// See https://www.gatsbyjs.com/docs/actions#createPage for more info
			gatsbyUtilities.actions.createPage({
				path: `/pages${page.uri}`,
				component: path.resolve(`./src/templates/page.jsx`),
				// `context` is available in the template as a prop and
				// as a variable in GraphQL.
				context: {
					// we need to add the page id here
					// so our page template knows which page
					// the current page is (when you open it in a browser)
					id: page.id,
					next,
					previous,
				},
			}),
		),
	)

const createIndividualPostPages = async ({ posts, gatsbyUtilities }) =>
	Promise.all(
		posts.map(({ previous, post, next }) =>
			gatsbyUtilities.actions.createPage({
				path: `/posts${post.uri}`,
				component: path.resolve(`./src/templates/post.jsx`),
				context: {
					id: post.id,

					// We also use the next and previous id's to query them and add links!
					previousPostId: previous ? previous.id : null,
					nextPostId: next ? next.id : null,
				},
			}),
		),
	)

async function getPostPerPage({ gatsbyUtilities }) {
	const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
		{
			wp {
				readingSettings {
					postsPerPage
				}
			}
		}
	`)

	return graphqlResult.data.wp.readingSettings.postsPerPage
}

async function createPostArchive({ posts, gatsbyUtilities }) {
	const postsPerPage = await getPostPerPage({ gatsbyUtilities })

	const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
	const totalPages = postsChunkedIntoArchivePages.length

	return Promise.all(
		postsChunkedIntoArchivePages.map(async (_posts, index) => {
			const pageNumber = index + 1

			const getPagePath = page => {
				if (page > 0 && page <= totalPages) {
					return page === 1 ? `/` : `/page/${page}`
				}

				return null
			}

			await gatsbyUtilities.actions.createPage({
				path: getPagePath(pageNumber),

				component: path.resolve(`./src/templates/index.jsx`),

				context: {
					posts,
					offset: index * postsPerPage,
					postsPerPage,
					nextPagePath: getPagePath(pageNumber + 1),
					previousPagePath: getPagePath(pageNumber - 1),
				},
			})
		}),
	)
}

function getPaginationPaths(page, route) {
	return page === 0 ? `/${route}` : `/${route}/${page}`
}

async function createPostIndex({ posts, gatsbyUtilities, routing }) {
	const itemsPerPage = 12

	const totalPages = Math.ceil(posts.length / itemsPerPage)

	Array.from({ length: totalPages + 1 }).forEach(async (_, i) => {
		await gatsbyUtilities.actions.createPage({
			path: routing ? getPaginationPaths(i, 'posts') : '/posts',

			component: path.resolve(`./src/templates/postsIndex.jsx`),

			context: {
				posts,
				itemsPerPage,
				routing,
			},
		})
	})
}

async function createPageIndex({ pages, gatsbyUtilities, routing }) {
	const itemsPerPage = 12

	const totalPages = Math.ceil(pages.length / itemsPerPage)

	Array.from({ length: totalPages + 1 }).forEach(async (_, i) => {
		await gatsbyUtilities.actions.createPage({
			path: routing ? getPaginationPaths(i, 'pages') : '/pages',

			component: path.resolve(`./src/templates/pagesIndex.jsx`),

			context: {
				pages,
				itemsPerPage,
				routing,
			},
		})
	})
}

async function createExamplesPage({ gatsbyUtilities, routing }) {
	await gatsbyUtilities.actions.createPage({
		path: '/examples',
		component: path.resolve('./src/templates/examples.jsx'),
		context: {
			routing,
		},
	})
}

async function createPagination({ pagPosts, gatsbyUtilities, routing }) {
	const postsPerPage = 5

	const postsChunkedIntoArchivePages = chunk(pagPosts, postsPerPage)

	return Promise.all(
		postsChunkedIntoArchivePages.map(async (_pagPosts, index) => {
			const pageNumber = index + 1

			const getPagePath = page => {
				return `/examples/pagination/${page}`
			}

			await gatsbyUtilities.actions.createPage({
				path: routing ? getPagePath(pageNumber) : '/examples/pagination',

				component: path.resolve(`./src/templates/pagination.jsx`),

				context: {
					pagPosts,
					postsPerPage,
					routing,
					breakpoints: { start: 4, end: 8, add: 4 },
				},
			})
		}),
	)
}

async function createAuthApiPage({ gatsbyUtilities, privatePosts }) {
	await gatsbyUtilities.actions.createPage({
		path: '/examples/auth-api',
		component: path.resolve('./src/templates/authApi.jsx'),
		context: {
			privatePosts,
		},
	})
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress posts. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getPosts({ graphql, reporter }) {
	const graphqlResult = await graphql(/* GraphQL */ `
		query WpPosts {
			# Query all WordPress posts sorted by date
			allWpPost(sort: { fields: [date], order: DESC }) {
				edges {
					previous {
						id
					}

					# note: this is a GraphQL alias. It renames "node" to "post" for this query
					# We're doing this because this "node" is a post! It makes our code more readable further down the line.
					post: node {
						id
						uri
						title
						featuredImage {
							node {
								localFile {
									childImageSharp {
										gatsbyImageData
									}
								}
							}
						}
					}

					next {
						id
					}
				}
			}
		}
	`)

	if (graphqlResult.errors) {
		reporter.panicOnBuild(
			`There was an error loading your posts`,
			graphqlResult.errors,
		)
		return
	}

	return graphqlResult.data.allWpPost.edges
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress pages. If there are any GraphQL error it throws an error
 * Otherwise it will return the pages 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getPages({ graphql, reporter }) {
	const graphqlResult = await graphql(/* GraphQL */ `
		query WpPages {
			allWpPage(sort: { fields: [date], order: DESC }) {
				edges {
					previous {
						id
						title
						uri
					}

					# note: this is a GraphQL alias. It renames "node" to "page" for this query
					# We're doing this because this "node" is a page! It makes our code more readable further down the line.
					page: node {
						id
						title
						uri
						featuredImage {
							node {
								localFile {
									childImageSharp {
										gatsbyImageData
									}
								}
							}
						}
					}

					next {
						id
						title
						uri
					}
				}
			}
		}
	`)

	if (graphqlResult.errors) {
		reporter.panicOnBuild(
			`There was an error loading your pages`,
			graphqlResult.errors,
		)
		return
	}

	return graphqlResult.data.allWpPage.edges
}
