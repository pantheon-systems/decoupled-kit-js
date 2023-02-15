import Link from 'next/link';
import Image from 'next/image';
import { IMAGE_URL } from '../lib/constants';
import { GradientPlaceholder } from './grid'

// For use with withGrid
export const RecipeGridItem = ({ content: recipe, multiLanguage, locale }) => {
	const imgSrc = recipe?.field_media_image?.field_media_image?.uri?.url || '';
	return (
		<Link
			passHref
			href={`${multiLanguage ? `/${recipe.path.langcode || locale}` : ''}${
				recipe.path.alias
			}`}
		>
			<div className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer border-2 h-full hover:border-indigo-500">
				<div className="flex-shrink-0 relative h-40">
					{imgSrc !== '' ? (
						<Image
							src={IMAGE_URL + imgSrc}
							fill
							style={{ objectFit: 'cover' }}
							alt={recipe.title}
						/>
					) : (
						<GradientPlaceholder />
					)}
				</div>
				<h2 className="my-4 mx-6 text-xl leading-7 font-semibold text-gray-900">
					{recipe.title} &rarr;
				</h2>
				{recipe?.field_recipe_category?.length > 0 ? (
					<span className="text-right pb-2 pr-3 text-sm text-slate-400">
						{recipe?.field_recipe_category[0].name}
					</span>
				) : null}
			</div>
		</Link>
	);
};
