import Image, { type ImageProps } from 'next/image.js';
import { useRouter } from 'next/compat/router.js';

export interface RecipeProps {
	title: string;
	category: string;
	ingredients: string[];
	instructions: string;
	imageProps?: {
		src: ImageProps['src'];
		alt?: ImageProps['alt'];
	};
	children?: JSX.Element;
}

/**
 *
 * @param props - The props needed for the Recipe component
 * @param props.title - The title of the recipe
 * @param props.category - The identifying category of your recipe
 * @param props.ingredients - An array of strings with ingredients to be displayed
 * @param props.instructions - Instructions from a CMS, usually a string of raw HTML. This string will be set as `dangerouslySetInnerHTML`
  * @param props.imageProps - Accepts a src and optional alt text for the next/image component. @see {@link https://nextjs.org/docs/api-reference/next/image} for more information.
 * @remarks
 * `imageProps` is an optional prop to be used if there is an image associated with the content.
 * If `imageProps.src` is a supplied as a prop. Alt text is not required; however,
 * it is strongly recommended to add alt text to all images for accessibility and SEO.
 * If alt text is not supplied, the title of the content will be used.
 * @returns A recipe component with content and an optional image passed by the user

 */
export const Recipe: React.FC<RecipeProps> = ({
	title,
	category,
	imageProps,
	ingredients,
	instructions,
	children,
}: RecipeProps) => {
	const router = useRouter();
	return (
		<article className="ps-prose lg:ps-prose-xl ps-mt-10 ps-mx-auto h-fit ps-p-4 sm:ps-p-0">
			<header>
				<h1>{title}</h1>
				<div className="ps-flex ps-flex-row ps-justify-between">
					<a
						onClick={() => router?.back()}
						className="ps-font-normal ps-cursor-pointer"
					>
						Back &rarr;
					</a>
					<span className="text ps-pb-2 ps-pr-3 ps-text-sm text-slate-400">
						{category}
					</span>
				</div>
			</header>
			{imageProps ? (
				<div className="ps-relative ps-max-w-lg ps-mx-auto ps-min-w-full ps-h-[50vh] ps-rounded-lg ps-shadow-lg ps-overflow-hidden ps-mt-12 ps-mb-10">
					<Image
						priority
						src={imageProps.src}
						style={{ objectFit: 'cover', padding: '0', margin: 'auto' }}
						fill
						alt={imageProps.alt ? imageProps.alt : title}
					/>
				</div>
			) : null}

			<div className="ps-flex ps-flex-col sm:ps-flex-row">
				<section className="ps-flex ps-flex-col min-w-fit sm:ps-border-r-2 ps-pr-4">
					<h2>Ingredients</h2>
					<ul>
						{ingredients?.map((ingredient, i) => {
							if (ingredient.startsWith('For')) {
								return (
									<li className="ps-list-none" key={i}>
										<strong>{ingredient}</strong>
									</li>
								);
							} else {
								return <li key={i}>{ingredient}</li>;
							}
						})}
					</ul>
				</section>
				<section className="ps-flex ps-flex-col ps-pl-4">
					<h2 className="ps-ml-4">Directions</h2>
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
