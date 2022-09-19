import React from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import { useRouter } from 'next/router';

interface ContentProps {
	title: string;
	content: string;
	imageProps?: {
		src: ImageProps['src'];
		alt?: ImageProps['alt'];
	};
	date?: string;
}

/**
 *
 * @param props - The props needed for the ContentWithImage component
 * @param props.title - The title of your content
 * @param props.content - Content from a CMS, usually a string of raw HTML. This string will be set as `dangerouslySetInnerHTML`
 * @param props.imageProps - Accepts a src and alt text for the next/image component. @see {@link https://nextjs.org/docs/api-reference/next/image} for all next/image documentation
 * @param props.date - An optional date to be displayed on the post
 * @returns A component with a featured image and content passed by the user
 * @remarks
 * imageProps is an optional prop to be used if there is an image to be associated with the content.
 * If imageProps is used it is required that the user passes in a value for the src of the image. The use of an alt for the next/image component is optional and defaults to the title of the content if left undefined.
 */
const ContentWithImage: React.FC<ContentProps> = ({
	title,
	imageProps,
	content,
	date,
}: ContentProps) => {
	const router = useRouter();

	return (
		<article className="prose lg:prose-xl mt-10 mx-auto">
			<h1>{title}</h1>
			{date ? <p className="text-sm text-gray-600">{date}</p> : null}

			<a onClick={() => router.back()} className="font-normal cursor-pointer">
				Back &rarr;
			</a>
			<div className="mt-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-screen-lg">
				{imageProps ? (
					<div
						className="relative w-full rounded-lg shadow-lg overflow-hidden mb-10"
						style={{ height: '50vh' }}
					>
						<Image
							priority
							src={imageProps.src}
							layout="fill"
							objectFit="cover"
							alt={imageProps.alt ? imageProps.alt : title}
						/>
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
