import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import styles from './styles.module.css';

// This component was swizzled from the core Docusaurus theme and modified
// for use without the doc being inside of a category

function CardContainer({ href, children }) {
	return (
		<Link
			href={href}
			className={clsx('card padding--lg', styles.cardContainer)}
		>
			{children}
		</Link>
	);
}
function CardLayout({ href, icon, title, description }) {
	return (
		<CardContainer href={href}>
			<h2 className={clsx('text--truncate', styles.cardTitle)} title={title}>
				{icon} {title}
			</h2>
			{description && (
				<p
					className={clsx('text--truncate', styles.cardDescription)}
					title={description}
				>
					{description}
				</p>
			)}
		</CardContainer>
	);
}
function CardCategory({ item }) {
	return (
		<CardLayout
			href={item.href}
			icon="🗃️"
			title={item.label}
			description={item.description}
		/>
	);
}
function CardLink({ item }) {
	const icon = isInternalUrl(item.href) ? '📄️' : '🔗';
	return (
		<CardLayout
			href={item.href}
			icon={icon}
			title={item.label}
			description={item.description}
		/>
	);
}
export default function DocCard({ item }) {
	switch (item.type) {
		case 'link':
			return <CardLink item={item} />;
		case 'category':
			return <CardCategory item={item} />;
		default:
			throw new Error(`unknown item type ${JSON.stringify(item)}`);
	}
}
