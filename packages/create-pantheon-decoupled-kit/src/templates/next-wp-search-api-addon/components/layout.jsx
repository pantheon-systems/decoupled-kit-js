import { Footer, Header, PreviewRibbon } from '@pantheon-systems/nextjs-kit';
import styles from './layout.module.css';
import SearchInput from './search-input';

export default function Layout({ children, footerMenu, preview }) {
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

    return (
        <div className={styles.layout}>
            {preview && <PreviewRibbon />}
            <div className={styles.searchHeaderContainer}>
                <Header navItems={navItems} />
                <SearchInput />
            </div>
            <main className={styles.layoutMain}>{children}</main>
            <Footer footerMenuItems={footerMenuItems}>
                <span className={styles.footerCopy}>
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
                        href="https://wordpress.com/"
                    >
                        WordPress
                    </a>
                </span>
            </Footer>
        </div>
    );
}
