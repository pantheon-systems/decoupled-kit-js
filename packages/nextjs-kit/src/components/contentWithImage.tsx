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
	contentClassName?: string;
}

/**
 *
 * @param props - The props needed for the ContentWithImage component
 * @param props.title - The title of your content
 * @param props.content - Content from a CMS, usually a string of raw HTML. This string will be set as `dangerouslySetInnerHTML`
 * @param props.date - An optional date to be displayed on the post
 * @param props.imageProps - Accepts a src and optional alt text for the next/image component. @see {@link https://nextjs.org/docs/api-reference/next/image} for more information.
 * @param props.contentClassName - An optional class name to be applied to the content container
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
	contentClassName = 'ps-max-w-screen lg:ps-max-w-screen-lg md:ps-max-w-screen-md sm:ps-max-w-screen-sm ps-mx-auto ps-px-4',
}: ContentProps) => {
	const router = useRouter();

	return (
		<article className="ps-prose ps-max-w-none xs:ps-prose-xs md:ps-prose-md lg:ps-prose-lg ps-mt-10 ps-mx-auto ps-py-4 ps-px-12">
			<section className="ps-prose xs:ps-prose-xs md:ps-prose-md lg:ps-prose-lg ps-mt-10 ps-max-w-screen lg:ps-max-w-screen-lg md:ps-max-w-screen-md sm:ps-max-w-screen-sm ps-mx-auto ps-px-4">
				<h1>{title}</h1>
				{date ? <p className="ps-text-sm ps-text-gray-600">{date}</p> : null}

				<a
					onClick={() => router.back()}
					className="ps-font-normal ps-cursor-pointer"
				>
					Back &rarr;
				</a>
			</section>
			<div className="ps-mt-12 ps-max-w-screen ps-mx-auto lg:ps-max-w-screen-lg ps-shadow-lg [&*>img]:ps-rounded-lg">
				{imageProps ? (
					<div className="ps-relative ps-mb-10 ps-min-h-[50vh]">
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
				className={`ps-break-words ps-mt-12 ${contentClassName}`}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</article>
	);
};

export default ContentWithImage;
