import Link from 'next/link';
import Image from 'next/image';
import { IMAGE_URL } from '../lib/constants';
import { getUrlPath } from '../lib/getUrlPath';

const GradientPlaceholder = () => (
	<div className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-500" />
);

export const PostGridItem = ({ content: post }) => {
	const imgSrc = getUrlPath(post?.featuredImage?.node?.sourceUrl);
	const altText = post?.featuredImage?.node.altText || post.title;

	return (
		<Link passHref href={`/posts${post.uri}`}>
			<div className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer border-2 h-full hover:border-indigo-500">
				<div className="flex-shrink-0 relative h-40">
					{imgSrc !== null ? (
						<Image
							src={IMAGE_URL + imgSrc}
							fill
							style={{ objectFit: 'cover' }}
							alt={altText}
						/>
					) : (
						<GradientPlaceholder />
					)}
				</div>
				<h2 className="my-4 mx-6 text-xl leading-7 font-semibold text-gray-900">
					{post.title} &rarr;
				</h2>
			</div>
		</Link>
	);
};

export const PageGridItem = ({ content: page }) => {
	const imgSrc = getUrlPath(page?.featuredImage?.node?.sourceUrl);
	const altText = page?.featuredImage?.node.altText || page.title;

	return (
		<Link passHref href={`/pages${page.uri}`}>
			<div className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer border-2 h-full hover:border-indigo-500">
				<div className="flex-shrink-0 relative h-40">
					{imgSrc !== null ? (
						<Image
							src={IMAGE_URL + imgSrc}
							fill
							style={{ objectFit: 'cover' }}
							alt={altText}
						/>
					) : (
						<GradientPlaceholder />
					)}
				</div>
				<h2 className="my-4 mx-6 text-xl leading-7 font-semibold text-gray-900">
					{page.title} &rarr;
				</h2>
			</div>
		</Link>
	);
};
