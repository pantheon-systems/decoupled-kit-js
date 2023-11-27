import { NextSeo } from 'next-seo';
import { getPreview } from '../../lib/getPreview';
import { isMultiLanguage } from '../../lib/isMultiLanguage';
import {
	getCurrentLocaleStore,
	globalDrupalStateStores,
} from '../../lib/stores';

import Link from 'next/link';
import Layout from '../../components/layout';
import styles from './page.module.css';

export default function PageTemplate({ page, navItems, hrefLang, preview }) {
	return (
		<Layout preview={preview} footerMenu={navItems} mainNavItems={navItems}>
			<NextSeo
				title="Decoupled Next Drupal Demo"
				description="Generated by create-pantheon-decoupled-kit."
				languageAlternates={hrefLang}
			/>
			<article className={styles.container}>
				<h1 className={styles.containerTitle}>{page.title}</h1>
				<Link passHref href="/pages" className="font-normal">
					Pages &rarr;
				</Link>
				<div
					className={styles.content}
					dangerouslySetInnerHTML={{ __html: page.body.processed }}
				/>
			</article>
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const { locales, locale } = context;
	const multiLanguage = isMultiLanguage(context.locales);
	const lang = context.preview ? context.previewData.previewLang : locale;
	const store = getCurrentLocaleStore(lang, globalDrupalStateStores);

	// handle nested alias like /pages/featured
	const alias = `${context.params.alias
		.map((segment) => `/${segment}`)
		.join('')}`;

	const previewParams =
		context.preview && (await getPreview(context, 'node--page'));

	if (previewParams?.error) {
		return {
			redirect: {
				destination: previewParams.redirect,
				permanent: false,
			},
		};
	}

	let page;
	try {
		page = await store.getObjectByPath({
			objectName: 'node--page',
			// note: pages are not prefixed by default.
			path: `${multiLanguage ? lang : ''}${alias}`,
			params: context.preview && previewParams,
			refresh: true,
			res: context.res,
			anon: context.preview ? false : true,
		});
	} catch (error) {
		// retry the fetch with `/pages` prefix
		page = await store.getObjectByPath({
			objectName: 'node--page',
			// note: pages are not prefixed by default.
			path: `${multiLanguage ? lang : ''}/pages${alias}`,
			params: context.preview && previewParams,
			refresh: true,
			res: context.res,
			anon: context.preview ? false : true,
		});
	}

	const navItems = await store.getObject({
		objectName: 'menu_items--main',
		refresh: true,
		res: context.res,
		anon: true,
	});

	const origin = process.env.NEXT_PUBLIC_FRONTEND_URL;
	// Load all the paths for the current page content type.
	const paths = locales.map(async (locale) => {
		const storeByLocales = getCurrentLocaleStore(
			locale,
			globalDrupalStateStores,
		);
		const { path } = await storeByLocales.getObject({
			objectName: 'node--page',
			id: page.id,
			params: context.preview && previewParams,
			refresh: true,
			res: context.res,
			anon: context.preview ? false : true,
		});
		return path;
	});

	// Resolve all promises returned as part of paths
	// and prepare hrefLang.
	const hrefLang = await Promise.all(paths).then((values) => {
		return values.map((value) => {
			return {
				hrefLang: value.langcode,
				href: origin + '/' + value.langcode + value.alias,
			};
		});
	});

	return {
		props: {
			page,
			navItems,
			hrefLang,
			preview: Boolean(context.preview),
		},
	};
}
