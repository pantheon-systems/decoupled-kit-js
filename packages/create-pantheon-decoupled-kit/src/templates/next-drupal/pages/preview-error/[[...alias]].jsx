import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';

import {
	getCurrentLocaleStore,
	globalDrupalStateStores,
} from '../../lib/stores';
import styles from './preview-error.module.css';

export default function PreviewError({ footerMenu, preview }) {
	const {
		query: { error, message },
	} = useRouter();
	return (
		<Layout footerMenu={footerMenu} preview={true}>
			<div className={styles.container}>
				<h2>🛑 {error ? error : 'There was an error on the server'} 🛑</h2>
				{message ? <p>{message}</p> : null}
				<Link href="/" className="underline">
					Go Home
				</Link>
			</div>
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const { locale } = context;
	const lang = context.preview ? context.previewData.previewLang : locale;
	const store = getCurrentLocaleStore(lang, globalDrupalStateStores);

	const footerMenu = await store.getObject({
		objectName: 'menu_items--main',
		refresh: true,
		res: context.res,
		anon: true,
	});

	return {
		props: {
			footerMenu,
		},
	};
}
