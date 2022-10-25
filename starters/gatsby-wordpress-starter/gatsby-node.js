const path = require(`path`)
const chunk = require(`lodash/chunk`)
const { paginationPostsQuery } = require('./lib/postsPagination')

exports.createPages = async gatsbyUtilities => {
	const pagPosts = await paginationPostsQuery()
	const pages = await getPages(gatsbyUtilities)
	const posts = await getPosts(gatsbyUtilities)
	const routing = true

	if (pages.length) {
		await createIndividualPages({ pages, gatsbyUtilities })
		await createPageIndex({ pages, gatsbyUtilities })
	}

	if (posts.length) {
		await createPostArchive({ posts, gatsbyUtilities })
		await createIndividualPostPages({ posts, gatsbyUtilities })
		await createPostIndex({ posts, gatsbyUtilities })
		await createPagination({ pagPosts, gatsbyUtilities, routing })
	}
	await createExamplesPage({ gatsbyUtilities, routing })
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
					offset: index * postsPerPage,
					postsPerPage,
					nextPagePath: getPagePath(pageNumber + 1),
					previousPagePath: getPagePath(pageNumber - 1),
				},
			})
		}),
	)
}

async function createPostIndex({ posts, gatsbyUtilities }) {
	const postsPerPage = await getPostPerPage({ gatsbyUtilities })

	const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
	const totalPages = postsChunkedIntoArchivePages.length

	return Promise.all(
		postsChunkedIntoArchivePages.map(async (_posts, index) => {
			const pageNumber = index + 1

			const getPagePath = page => {
				if (page > 0 && page <= totalPages) {
					return page === 1 ? `/posts` : `/posts/page/${page}`
				}

				return null
			}

			await gatsbyUtilities.actions.createPage({
				path: getPagePath(pageNumber),

				component: path.resolve(`./src/templates/postsIndex.jsx`),

				context: {
					offset: index * postsPerPage,
					postsPerPage,
					nextPagePath: getPagePath(pageNumber + 1),
					previousPagePath: getPagePath(pageNumber - 1),
				},
			})
		}),
	)
}

async function createPageIndex({ pages, gatsbyUtilities }) {
	await gatsbyUtilities.actions.createPage({
		component: path.resolve('./src/templates/pagesIndex.jsx'),
		path: '/pages',
		context: {
			pages,
		},
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
