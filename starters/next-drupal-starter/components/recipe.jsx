import { IMAGE_URL } from '../lib/constants';
import Link from 'next/link';
import Image from 'next/image';
export default function Recipe({
	title,
	category,
	imgSrc,
	ingredients,
	instructions,
}) {
	return (
		<article className="prose lg:prose-xl mt-10 mx-auto h-fit p-4 sm:p-0">
			<header>
				<h1>{title}</h1>
				<div className="flex flex-row justify-between">
					<Link passHref href="/recipes">
						<a className="font-normal">Recipes &rarr;</a>
					</Link>
					<span className="text pb-2 pr-3 text-sm text-slate-400">
						{category}
					</span>
				</div>
			</header>
			{imgSrc ? (
				<div className="relative max-w-lg mx-auto min-w-full h-[50vh] rounded-lg shadow-lg overflow-hidden mt-12 mb-10">
					<Image
						src={IMAGE_URL + imgSrc}
						layout="fill"
						objectFit="cover"
						alt={title}
					/>
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
		</article>
	);
}
