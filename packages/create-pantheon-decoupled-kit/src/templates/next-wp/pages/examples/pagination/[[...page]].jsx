import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import { Paginator } from '@pantheon-systems/nextjs-kit';

import { getFooterMenu } from '../../../lib/Menus';
import { paginationPostsQuery } from '../../../lib/PostsPagination';
import { setOutgoingHeaders } from '../../../lib/setOutgoingHeaders';

export default function PaginationExampleTemplate({ menuItems, posts }) {
	const RenderCurrentItems = ({ currentItems }) => {
		return currentItems.map((item) => {
			return (
				<article key={item.title} className="flex flex-col p-3 mb-10">
					<h2 className="justify-start my-auto text-2xl mb-2">{item.title}</h2>
					<div
						className="max-w-prose my-2 [&>p]:my-0"
						dangerouslySetInnerHTML={{ __html: item.excerpt }}
					/>
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
			<div className="prose max-w-screen mx-auto">
				<section className="flex flex-col">
					<h1 className="my-10">Pagination example</h1>
					<Paginator
						data={posts}
						itemsPerPage={5}
						breakpoints={{ start: 4, end: 8, add: 4 }}
						routing
						Component={RenderCurrentItems}
					/>
				</section>
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ res }) {
	const { menuItems, menuItemHeaders } = await getFooterMenu();
	const { posts, headers: postHeaders } = await paginationPostsQuery();

	const headers = [menuItemHeaders, postHeaders];
	setOutgoingHeaders({ headers, res });

	return {
		props: {
			menuItems,
			posts,
		},
	};
}
