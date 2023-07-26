import { taggedTemplateHelpers as utils } from '@cli/utils';

const drupalLayout = /* jsx */ `
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
`;
const wpLayout = /* jsx */ `
	const navItems = [
		{
			linkText: '🏠 Home',
			href: '/',
		},
		{
			linkText: '📰 Posts',
			href: '/posts',
		},
		{
			linkText: '📑 Pages',
			href: '/pages',
		},
		{
			linkText: '⚛️ Examples',
			href: '/examples',
		},
	];

	const footerMenuItems = footerMenu?.map(({ path, label }) => ({
		linkText: label,
		href: path,
		parent: null,
	}));
`;

const wpSig = /* jsx */ `		<a
						className="text-white hover:text-blue-100 underline"
						href="https://nextjs.org/"
					>
						Next.js
					</a>{' '}
					and{' '}
					<a  
						className="text-blue-500 underline hover:text-blue-100"
						href="https://wordpress.com/"
					>
						WordPress
					</a>`;
const drupalSig = /* jsx */ `<a
						href="https://nextjs.org/"
					>
						Next.js
					</a>{' '}
					and{' '}
					<a
						href="https://www.drupal.org/"
					>
						Drupal
					</a>`;

export const layoutTemplate = ({
	search,
	cmsType,
}: {
	search: boolean;
	cmsType: string;
}) => /* jsx */ `import { Footer, Header, PreviewRibbon } from '@pantheon-systems/nextjs-kit';
import styles from './layout.module.css';
${utils.if(search, `import SearchInput from './search-input';`)}
export default function Layout({ children, footerMenu, preview }) {
${utils.if(cmsType === 'wp', wpLayout)}
${utils.if(cmsType === 'drupal', drupalLayout)}
	return (
		<div className={styles.layout}>
			{preview && <PreviewRibbon />}
			${utils.if(
				search,
				`<div className={styles.searchHeaderContainer}>
				<Header navItems={navItems} />
				<SearchInput />
			</div>`,
			)}
			${utils.if(!search, `<Header navItems={navItems} />`)}
			<main className={styles.layoutMain}>{children}</main>
			<Footer footerMenuItems={footerMenuItems}>
				<span className={styles.footerCopy}>
					© {new Date().getFullYear()} Built with{' '}
                    ${utils.if(cmsType === 'wp', wpSig)}
                    ${utils.if(cmsType === 'drupal', drupalSig)}
				</span>
			</Footer>
		</div>
	);
}
`;
