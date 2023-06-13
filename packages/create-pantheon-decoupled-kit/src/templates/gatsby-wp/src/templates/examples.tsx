import { Link } from 'gatsby';
import Layout from '../components/layout';
import * as styles from './examples.module.css';

const ExamplesPageTemplate = ({
	pageContext: { routing },
}: {
	pageContext: { routing: boolean };
}) => {
	return (
		<Layout>
			<div className={styles.container}>
				<h1 className={styles.containerTitle}>Examples</h1>
				<Link to="/">
					<span>Home &rarr;</span>
				</Link>
				<div className={styles.content}>
					<p>
						This page outlines a growing list of common use cases that can be
						used as a reference when building using this starter kit. If you
						don&apos;t need them for your site, feel free to delete the
						`pages/examples` directory in your codebase.
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>
							<Link to={`/examples/pagination${routing ? '/1' : ''}`}>
								Pagination
							</Link>{' '}
							- a paginated list with a large dataset.
						</li>
						<li className={styles.listItem}>
							<Link to={`/examples/auth-api`}>API Authorization</Link> -
							confirms that Gatsby is able to make authenticated requests to
							WordPress&apos; API.
						</li>
					</ul>
				</div>
			</div>
		</Layout>
	);
};

export default ExamplesPageTemplate;
