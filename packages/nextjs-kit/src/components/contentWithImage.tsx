import React from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import { useRouter } from 'next/router';

interface ContentProps {
	title: string;
	content: string;
	date?: string;
	imageProps?: {
		src: ImageProps['src'];
		alt?: ImageProps['alt'];
	};
}

/**
 *
 * @param props - The props needed for the ContentWithImage component
 * @param props.title - The title of your content
 * @param props.content - Content from a CMS, usually a string of raw HTML. This string will be set as `dangerouslySetInnerHTML`
 * @param props.date - An optional date to be displayed on the post
 * @param props.imageProps - Accepts a src and optional alt text for the next/image component. @see {@link https://nextjs.org/docs/api-reference/next/image} for more information.
 * @remarks
 * `imageProps` is an optional prop to be used if there is an image associated with the content.
 * If `imageProps.src` is a supplied as a prop. Alt text is not required; however,
 * it is strongly recommended to add alt text to all images for accessibility and SEO.
 * If alt text is not supplied, the title of the content will be used.
 * @returns A component with a featured image and content passed by the user
 */
const ContentWithImage: React.FC<ContentProps> = ({
	title,
	content,
	date,
	imageProps,
}: ContentProps) => {
	const router = useRouter();

	return (
		<article className="prose xs:prose-xs md:prose-md lg:prose-lg mt-10 mx-auto max-w-screen lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm p-4">
			<h1>{title}</h1>
			{date ? <p className="text-sm text-gray-600">{date}</p> : null}

			<a onClick={() => router.back()} className="font-normal cursor-pointer">
				Back &rarr;
			</a>
			<div className="mt-12 max-w-screen mx-auto lg:max-w-screen-lg shadow-lg [&*>img]:rounded-lg">
				{imageProps ? (
					<div className="relative mb-10 min-h-[50vh]">
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
