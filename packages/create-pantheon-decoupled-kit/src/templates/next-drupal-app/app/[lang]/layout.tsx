import '@pantheon-systems/nextjs-kit/style.css';

import { Footer } from '@pantheon-systems/nextjs-kit/dist/components/footer';
import { Header } from '@pantheon-systems/nextjs-kit/dist/components/header';
import styles from './layout.module.css';
import {
	getCurrentLocaleStore,
	globalDrupalStateStores,
} from '../../lib/stores';

import './globals.css';

type FooterData = {
	title: string,
	url: string,
	parent: string
}

async function getData(locale: string) {
	const store = getCurrentLocaleStore(locale, globalDrupalStateStores);
	const footerMenu = await store.getObject({
		objectName: 'menu_items--main',
		anon: true,
	});

  return footerMenu as FooterData[];
}

export default async function RootLayout({
	children,
	params
}: {
	children: React.ReactNode;
	params: { lang: string }
}) {
	const footerMenu = await getData(params.lang)

	const navItems = [
		{ linkText: '🏠 Home', href: '/' },
		{ linkText: '📰 Articles', href: '/articles' },
		{ linkText: '📑 Pages', href: '/pages' },
		{ linkText: '⚛️ Examples', href: '/examples' },
	];
	const footerMenuItems = footerMenu?.map(({ title, url, parent }) => ({
		linkText: title,
		href: url,
		parent: parent,
	}));
	return (
		<html lang={params.lang}>
			<body>
				<Header navItems={navItems} />
				<div>{children}</div>
				<Footer footerMenuItems={footerMenuItems}>
				<span className={styles.footerCopy}>
					© {new Date().getFullYear()} Built with{' '}
					<a
						href="https://nextjs.org/"
					>
						Next.js
					</a>{' '}
					and{' '}
					<a
						href="https://www.drupal.org/"
					>
						Drupal
					</a>
				</span>
				</Footer>
			</body>
		</html>
	);
}
