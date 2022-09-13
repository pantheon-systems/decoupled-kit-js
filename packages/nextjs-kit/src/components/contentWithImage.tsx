import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ContentProps {
	title: string;
	featuredImage: string;
	content: string;
	imgUrl: string;
	date?: string;
}

/**
 *
 * @param props - The props needed for the ContentWithImage component
 * @param props.title - The title of your content
 * @param props.featuredImage - A URL for the image source of your content
 * @param props.content - A string of elements to make up the content of your post
 * @param props.imgUrl - The image URL coming from your enviornment config
 * @param props.date - An optional date to be displayed on you content
 * ```
 * title: 'Example Post with Image',
 * date: '2022-08-04T18:12:19',
 * featuredImage:
 *	'https://dev-decoupled-wordpress-qa.pantheonsite.io/wp-content/uploads/2022/08/pizza.jpeg',
 * content:
 * 	'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n' +
 *	'\n' +
 *	'\n' +
 *	'<blockquote class="wp-block-quote"><p>a Quote</p><cite>from QA</cite></blockquote>\n' +
 *	'\n' +
 *	'\n' +
 *	'\n' +
 *	'<figure class="wp-block-pullquote" style="border-color:#0073a8"><blockquote class="has-text-color has-dark-gray-color"><p>a pull quoteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p><cite>from qa</cite></blockquote></figure>\n' +
 *	'\n' +
 *	'\n' +
 *	'\n' +
 *	'<p>An<strong>other block</strong></p>\n',
 * imgUrl: 'https://dev-decoupled-wordpress-qa.pantheonsite.io',
 *
 * ```
 * @returns A component with a featured image and content passed by the user
 */
const ContentWithImage: React.FC<ContentProps> = ({
	title,
	featuredImage,
	content,
	imgUrl,
	date,
}: ContentProps) => {
	return (
		<article className="prose lg:prose-xl mt-10 mx-auto">
			<h1>{title}</h1>
			{date ? (
				<p className="text-sm text-gray-600">{new Date(date).toDateString()}</p>
			) : null}

			<Link passHref href="/">
				<a className="font-normal">Home &rarr;</a>
			</Link>
			<div className="mt-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-screen-lg">
				{featuredImage && (
					<div
						className="relative w-full rounded-lg shadow-lg overflow-hidden mb-10"
						style={{ height: '50vh' }}
					>
						<Image
							priority
							src={imgUrl + featuredImage}
							layout="fill"
							objectFit="cover"
							alt={featuredImage || 'Featured Image'}
						/>
					</div>
				)}
			</div>

			<div
				className="break-words mt-12"
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</article>
	);
};

export default ContentWithImage;
