import React from 'react';
import clsx from 'clsx';
import DocCard_Custom from '../DocCard_Custom';

// This component was swizzled from the core Docusaurus theme and modified
// for use without the doc being inside of a category

export default function DocCardList(props) {
	const { items, className } = props;
	return (
		<section className={clsx('row', className)}>
			{items.map((item, index) => (
				<article key={index} className="col col--6 margin-bottom--lg">
					<DocCard_Custom item={item} />
				</article>
			))}
		</section>
	);
}
