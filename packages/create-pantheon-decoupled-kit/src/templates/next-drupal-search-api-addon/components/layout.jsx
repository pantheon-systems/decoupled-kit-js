import { Footer, Header, PreviewRibbon } from '@pantheon-systems/nextjs-kit';
import SearchInput from './search-input';
export default function Layout({ children, footerMenu, preview = false }) {
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
		<div className="min-h-screen max-h-screen min-w-screen max-w-screen flex flex-col overflow-x-hidden">
			{preview && <PreviewRibbon />}
			<div className="ps-flex ps-flex-row ps-flex-wrap sm:ps-flex-nowrap ps-justify-between ps-max-w-screen-md ps-mx-auto">
				<Header navItems={navItems} />
				<div className="ps-pt-10">
					<SearchInput />
				</div>
			</div>
			<main className="mb-auto">{children}</main>
			<Footer footerMenuItems={footerMenuItems}>
				<span className="mx-auto">
					© {new Date().getFullYear()} Built with{' '}
					<a
						className="text-white hover:text-blue-100 underline"
						href="https://nextjs.org/"
					>
						Next.js
					</a>{' '}
					and{' '}
					<a
						className="text-blue-500 underline hover:text-blue-100"
						href="https://www.drupal.org/"
					>
						Drupal
					</a>
				</span>
			</Footer>
		</div>
	);
}
