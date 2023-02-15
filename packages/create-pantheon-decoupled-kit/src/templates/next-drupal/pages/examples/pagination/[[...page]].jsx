import { DrupalState } from '@pantheon-systems/drupal-kit';

import {
	getCurrentLocaleStore,
	globalDrupalStateStores,
} from '../../../lib/stores';
import { BUILD_MODE } from '../../../lib/constants';

import { Paginator } from '@pantheon-systems/nextjs-kit';
import Head from 'next/head';
import Layout from '../../../components/layout';

// To use your configured backend, use:
// const drupalUrl = DRUPAL_URL

// Example paginated data set
const drupalUrl = 'https://dev-ds-demo.pantheonsite.io';

export default function PaginationExampleTemplate({ data, footerMenu }) {
	// configurable itemsPerPage
	const itemsPerPage = 10;

	// Component that we can pass into Paginator.
	// Paginator will use this component to render the data to be paginated
	const RenderCurrentItems = ({ currentItems }) => {
		return currentItems.map((item) => {
			return (
				<article
					key={item.id}
					className="flex flex-col p-3 w-fit mx-auto mb-10"
				>
					<h2 className="justify-start my-auto text-2xl mb-2">{item.title}</h2>
					<p className="max-w-prose my-2">
						{item?.body.value.substr(0, 150)}...
					</p>
				</article>
			);
		});
	};

	return (
		<Layout footerMenu={footerMenu}>
			<Head>
				<title>Pagination example</title>
				<meta name="description" content="Powered by Pantheon Decoupled Kit" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="prose max-w-screen mx-auto">
				<section className="flex flex-col">
					<h1 className="my-10">Pagination example</h1>
					<Paginator
						data={data}
						itemsPerPage={itemsPerPage}
						breakpoints={{ start: 6, end: 12, add: 6 }}
						routing
						Component={RenderCurrentItems}
					/>
				</section>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const store = new DrupalState({
		apiBase: drupalUrl,
		apiPrefix: 'jsonapi',
		defaultLocale: 'en',
		debug: process.env.DEBUG_MODE || false,
	});
	const data = await store.getObject({
		objectName: 'node--ds_example',
		all: true,
		params: 'fields[node--ds_example]=title,body,id',
		anon: true,
	});
	const itemsPerPage = 10;
	const totalPages = Math.ceil(data.length / itemsPerPage);

	const arr = Array.from(Array(totalPages).keys());

	const paths = arr.map((page) => ({
		params: { page: [(page + 1).toString()] },
	}));
	// allows for  examples/pagination
	paths.push({ params: { page: [''] } });

	return {
		paths: paths,
		fallback: false,
	};
}

// Using getStaticProps here with ISR will have a substantial impact on
// performance due to the large payload.
export async function getStaticProps(context) {
	const exampleStore = new DrupalState({
		apiBase: drupalUrl,
		apiPrefix: 'jsonapi',
		defaultLocale: 'en',
		debug: process.env.DEBUG_MODE || false,
	});

	// drupal json api params
	const data = await exampleStore.getObject({
		objectName: 'node--ds_example',
		params: 'fields[node--ds_example]=title,body,id',
		all: true,
		refresh: !BUILD_MODE,
		anon: true,
	});

	const store = getCurrentLocaleStore(context.locale, globalDrupalStateStores);
	const footerMenu = await store.getObject({
		objectName: 'menu_items--main',
		anon: true,
	});
	return {
		props: {
			data,
			footerMenu,
		},
		revalidate: 60,
	};
}
