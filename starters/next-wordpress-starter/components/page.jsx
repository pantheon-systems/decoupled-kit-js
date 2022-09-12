import Image from 'next/image';
import Link from 'next/link';
import { getUrlPath } from '../lib/getUrlPath';
import { IMAGE_URL } from '../lib/constants';

export default function Page({
	page: { title, date, featuredImage, content },
}) {
	const srcUrl =
		featuredImage?.node?.sourceUrl && getUrlPath(featuredImage.node.sourceUrl);

	return (
		<article className="prose lg:prose-xl mt-10 mx-auto">
			<h1>{title}</h1>
			<p className="text-sm text-gray-600">{new Date(date).toDateString()}</p>

			<Link passHref href="/pages">
				<a className="font-normal">Pages &rarr;</a>
			</Link>
			<div className="mt-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-screen-lg">
				{featuredImage && (
					<div
						className="relative w-full rounded-lg shadow-lg overflow-hidden mb-10"
						style={{ height: '50vh' }}
					>
						<Image
							priority
							src={IMAGE_URL + srcUrl}
							layout="fill"
							objectFit="cover"
							alt={featuredImage.node.altText || title}
						/>
					</div>
				)}
			</div>

			<div className="mt-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-screen-lg">
				<div dangerouslySetInnerHTML={{ __html: content }} />
			</div>
		</article>
	);
}
