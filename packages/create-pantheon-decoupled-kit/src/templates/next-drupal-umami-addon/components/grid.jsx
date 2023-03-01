import Link from 'next/link';
import Image from 'next/image';
import { IMAGE_URL } from '../lib/constants';

export const GradientPlaceholder = () => (
	<div className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-500" />
);

// For use with withGrid
export const ArticleGridItem = ({
	content: article,
	multiLanguage,
	locale,
}) => {
	const imgSrc = article?.field_media_image?.field_media_image?.uri?.url || '';
	return (
		<Link
			passHref
			href={`${multiLanguage ? `/${article.path.langcode || locale}` : ''}${
				article.path.alias
			}`}
		>
			<div className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer border-2 h-full hover:border-indigo-500">
				<div className="flex-shrink-0 relative h-40">
					{imgSrc !== '' ? (
						<Image
							src={IMAGE_URL + imgSrc}
							fill
							style={{ objectFit: 'cover' }}
							alt={article.title}
						/>
					) : (
						<GradientPlaceholder />
					)}
				</div>
				<h2 className="my-4 mx-6 text-xl leading-7 font-semibold text-gray-900">
					{article.title} &rarr;
				</h2>
			</div>
		</Link>
	);
};
