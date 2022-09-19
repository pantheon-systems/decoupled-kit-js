import React from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import { useRouter } from 'next/router';

interface RecipeProps {
	title: string;
	category: string;
	imageProps?: ImageProps;
	ingredients: string[];
	instructions: string;
	children?: JSX.Element;
}

/**
 *
 * @param props - The props needed for the Recipe component
 * @param props.title - The title of the recipe
 * @param props.category - The identifying category of your recipe
 * @param props.imageProps - All props the user wishes to pass to the next/image component
 * @remarks
 * imageProps is an optional prop to be used if there is an image to be associated with the content.
 * If imageProps is used it is required that the user passes in values for src, width, and height
 * See the documentation link below for more information on optional and required props
 * @see {@link https://nextjs.org/docs/api-reference/next/image} for all next/image documentation
 * @param props.ingredients - An array of strings holding ingredients to be displayed
 * @param props.instructions - Instructions from a CMS, usually a string of raw HTML. This string will be set as `dangerouslySetInnerHTML`
 * @param props.previousPagePath - The path of the previous page to navigate back to
 * @returns A recipe component with content and an optional image passed by the user
 */
const Recipe: React.FC<RecipeProps> = ({
	title,
	category,
	imageProps,
	ingredients,
	instructions,
	children,
}: RecipeProps) => {
	const router = useRouter();
	return (
		<article className="prose lg:prose-xl mt-10 mx-auto h-fit p-4 sm:p-0">
			<header>
				<h1>{title}</h1>
				<div className="flex flex-row justify-between">
					<a
						onClick={() => router.back()}
						className="font-normal cursor-pointer"
					>
						Back &rarr;
					</a>
					<span className="text pb-2 pr-3 text-sm text-slate-400">
						{category}
					</span>
				</div>
			</header>
			{imageProps ? (
				<div className="relative max-w-lg mx-auto min-w-full h-[50vh] rounded-lg shadow-lg overflow-hidden mt-12 mb-10">
					<Image {...imageProps} />
				</div>
			) : null}

			<div className="flex flex-col sm:flex-row">
				<section className="flex flex-col min-w-fit sm:border-r-2 pr-4">
					<h2>Ingredients</h2>
					<ul>
						{ingredients?.map((ingredient, i) => {
							if (ingredient.startsWith('For')) {
								return (
									<li className="list-none" key={i}>
										<strong>{ingredient}</strong>
									</li>
								);
							} else {
								return <li key={i}>{ingredient}</li>;
							}
						})}
					</ul>
				</section>
				<section className="flex flex-col pl-4">
					<h2 className="ml-4">Directions</h2>
					<div
						dangerouslySetInnerHTML={{
							__html: instructions,
						}}
					/>
				</section>
			</div>
			{children}
		</article>
	);
};

export default Recipe;
