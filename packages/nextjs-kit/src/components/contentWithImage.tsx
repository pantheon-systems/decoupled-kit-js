import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { ImageProps } from 'next/image';

interface ContentProps {
	title: string;
	imageProps?: ImageProps;
	content: string;
	date?: string;
	previousPagePath?: string;
}

/**
 *
 * @param props - The props needed for the ContentWithImage component
 * @param props.title - The title of your content
 * @param props.imageProps - All props the user wishes to pass to the next/image component
 * @remarks
 * imageProps is an optional prop to be used if there is an image to be associated with the content.
 * If imageProps is used it is required that the user passes in values for src, width, and height
 * See the documentation link below for more information on optional and required props
 * @see {@link https://nextjs.org/docs/api-reference/next/image} for all next/image documentation
 * @param props.content - A string of elements to make up the content on the post
 * @param props.date - An optional date to be displayed on the post
 * @param props.previousPagePath - The path of the previous page to navigate back to
 * @returns A component with a featured image and content passed by the user
 */
const ContentWithImage: React.FC<ContentProps> = ({
	title,
	imageProps,
	content,
	date,
	previousPagePath,
}: ContentProps) => {
	return (
		<article className="prose lg:prose-xl mt-10 mx-auto">
			<h1>{title}</h1>
			{date ? (
				<p className="text-sm text-gray-600">{new Date(date).toDateString()}</p>
			) : null}

			{previousPagePath ? (
				<Link passHref href={previousPagePath}>
					<a className="font-normal">Back &rarr;</a>
				</Link>
			) : null}

			<div className="mt-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-screen-lg">
				{imageProps ? (
					<div
						className="relative w-full rounded-lg shadow-lg overflow-hidden mb-10"
						style={{ height: '50vh' }}
					>
						<Image {...imageProps} />
					</div>
				) : null}
			</div>

			<div
				className="break-words mt-12"
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</article>
	);
};

export default ContentWithImage;
