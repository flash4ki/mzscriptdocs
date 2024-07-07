import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';

export default function Home() {
	return (
		<Layout description="MZscript documentation">
			<header className={clsx('hero hero--primary', styles.heroBanner)}>
				<div className="container">
					<h1 className="hero__title">
						<Translate>MZscript</Translate>
					</h1>
					<p className="hero__subtitle">
						<Translate>Improved BDFD interpreter in Python</Translate>
					</p>
					<div className={styles.buttons}>
						<Link className="button button--secondary button--lg" to="/docs/guides/start/create_bot">
							<Translate>Start Coding</Translate>
						</Link>
					</div>
				</div>
			</header>
		</Layout>
	);
}
