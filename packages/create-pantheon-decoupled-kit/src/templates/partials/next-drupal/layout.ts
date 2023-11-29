import { taggedTemplateHelpers as utils } from '@cli/utils';

const Header = /* tsx */ `
<Header
	mainNavItems={mainNavItems}
	secondaryNavItems={secondaryNavItems}
	overlayStyles={'bg-white'}
	className="max-w-[1920px]"
	Logo={{
		src: '/pantheon-fist-blk.svg',
		href: '/',
		alt: 'Pantheon Logo',
	}}
	/>`;

export const nextDrupalLayout = (search: boolean) => /* tsx */ `import { 
	Button, 
	Footer, 
	Header,
	PreviewRibbon, 
	Row 
} from '@pantheon-systems/nextjs-kit';
import Link from 'next/link';
${utils.if(search, /* ts */ `import SearchInput from './search-input';`)}
import styles from './layout.module.css';

export default function Layout({ children, mainNavItems: navItems, footerMenu, preview = false }) {
	const mainNavItems = navItems?.map(({ title, url }) => ({
		linkText: title,
		href: url,
	}));

	const secondaryNavItems = (
		<>
			<li className="mb-8 mr-auto lg:mb-0 lg:ml-auto lg:mr-0" key="docs">
				<Button
					Element="a"
					href="https://decoupledkit.pantheon.io"
					type="secondary"
				>
					Docs
				</Button>
			</li>
			<li className="mr-auto lg:mx-3 lg:mr-0" key="examples">
				<Button asChild>
					<Link href="/examples">Examples</Link>
				</Button>
			</li>
		</>
	);

	const footerMenuItems = footerMenu?.map(({ title, url, parent }) => ({
		linkText: title,
		href: url,
		parent: parent,
	}));

	return (
		<div className="bg-white min-w-full w-full min-h-screen h-full flex flex-col">
		<Row
				className="text-neutral-900 max-w-[1920px] mx-auto mb-auto"
				type="flex"
				flexOptions={{ direction: 'col' }}
		>
			{preview && <PreviewRibbon />}
			${utils.ifelse(
				search,
				/* tsx */ `
				<div className={styles.searchHeaderContainer}>
				${Header}
				<SearchInput />
				</div>`,
				Header,
			)}
			<main className="mb-auto">{children}</main>
			</Row>

			<Footer footerMenuItems={footerMenuItems}>
				<span className="my-0 mx-auto">
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
		</div>
	);
}
`;
