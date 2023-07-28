import { DrupalState } from '@pantheon-systems/drupal-kit';

import { BUILD_MODE } from '../../../lib/constants';
import {
	getCurrentLocaleStore,
	globalDrupalStateStores,
} from '../../../lib/stores';

import { Paginator } from '@pantheon-systems/nextjs-kit';
import Head from 'next/head';
import Layout from '../../../components/layout';
import styles from './pagination.module.css';

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
				<article key={item.title} className={styles.item}>
					<h2>{item.title}</h2>
					<p>{item?.body.value.substr(0, 150)}...</p>
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
			<div className={styles.container}>
				<section className={styles.content}>
					{data ? (
						<>
							<h1>Pagination example</h1>
							<Paginator
								data={data}
								itemsPerPage={itemsPerPage}
								breakpoints={{ start: 6, end: 12, add: 6 }}
								routing
								Component={RenderCurrentItems}
							/>
						</>
					) : (
						<div className={styles.noData}>
							This example relies on data from{' '}
							<code>https://dev-ds-demo.pantheonsite.io</code>. If you&apos;re
							seeing this message, it may be unreachable. Try building again
							when it is reachable or create your own data with the{' '}
							<a
								className={styles.link}
								href="https://www.drupal.org/project/faker"
								rel="noopener"
							>
								Faker Drupal Module
							</a>
							.
						</div>
					)}
				</section>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	try {
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
	} catch (error) {
		console.error(
			'Something went wrong while getting paths for pagination data:',
		);
		console.error(error.message);
	} finally {
		return { paths: [{ params: { page: [''] } }], fallback: false };
	}
}

// Using getStaticProps here with ISR will have a substantial impact on
// performance due to the large payload.
export async function getStaticProps(context) {
	let data;
	try {
		const exampleStore = new DrupalState({
			apiBase: drupalUrl,
			apiPrefix: 'jsonapi',
			defaultLocale: 'en',
			debug: process.env.DEBUG_MODE || false,
		});
		// drupal json api params
		data = await exampleStore.getObject({
			objectName: 'node--ds_example',
			params: 'fields[node--ds_example]=title,body,id',
			all: true,
			refresh: !BUILD_MODE,
			anon: true,
		});

		const store = getCurrentLocaleStore(
			context.locale,
			globalDrupalStateStores,
		);
		const footerMenu = await store.getObject({
			objectName: 'menu_items--main',
			anon: true,
		});
	} catch (error) {
		console.error('Something went wrong while getting pagination data:');
		console.error(error.message);
		console.error('Returning null for pagination example data...');
	} finally {
		const store = getCurrentLocaleStore(
			context.locale,
			globalDrupalStateStores,
		);
		const footerMenu = await store.getObject({
			objectName: 'menu_items--main',
			anon: true,
		});
		return {
			props: {
				data: data || null,
				footerMenu,
			},
			revalidate: 60,
		};
	}
}
