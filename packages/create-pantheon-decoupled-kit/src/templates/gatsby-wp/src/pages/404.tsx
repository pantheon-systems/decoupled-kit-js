import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from './404.module.css';
const NotFoundPage = () => {
	return (
		<Layout>
			<div className={styles.container}>
				<span className={styles.notFound}>
					404: Could not find the requested page
				</span>
			</div>
		</Layout>
	);
};

export default NotFoundPage;

export function Head() {
	return <Seo title="404" description="Not Found" />;
}
