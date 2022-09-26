import { NextSeo } from 'next-seo';
import { setEdgeHeader } from '@pantheon-systems/wordpress-kit';

import Layout from '../../../components/layout';
import { Paginator } from '@pantheon-systems/nextjs-kit';

import { getFooterMenu } from '../../../lib/Menus';
import { paginationPostsQuery } from '../../../lib/PostsPagination';

export default function PaginationExampleTemplate({ menuItems, posts }) {
	const RenderCurrentItems = ({ currentItems }) => {
		return currentItems.map((item) => {
			return (
				<article
					key={item.title}
					className="flex flex-col p-3 w-fit mx-auto mb-10"
				>
					<h2 className="justify-start my-auto text-2xl mb-2">{item.title}</h2>
					<p className="max-w-prose my-2">
						This post was modified on {new Date(item?.date).toDateString()}
					</p>
				</article>
			);
		});
	};
	return (
		<Layout footerMenu={menuItems}>
			<NextSeo>
				<title>Pagination example</title>
				<meta name="description" content="Powered by Pantheon Decoupled Kit" />
				<link rel="icon" href="/favicon.ico" />
			</NextSeo>
			<div className="prose container min-w-full min-h-screen max-w-screen mx-auto">
				<main className="flex mx-auto flex-col">
					<h1 className="my-10 mx-auto">Pagination example</h1>
					<section className="mx-auto">
						<Paginator
							data={posts}
							itemsPerPage={5}
							breakpoints={{ start: 4, end: 8, add: 4 }}
							routing
							Component={RenderCurrentItems}
						/>
					</section>
				</main>
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ res }) {
	const menuItems = await getFooterMenu();
	const posts = await paginationPostsQuery();
	setEdgeHeader({ res });

	return {
		props: {
			menuItems,
			posts,
		},
	};
}
