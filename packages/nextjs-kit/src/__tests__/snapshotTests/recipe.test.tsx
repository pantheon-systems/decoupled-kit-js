import { render } from '@testing-library/react';
import { Recipe } from '../../components/recipe';
import exampleRecipeData from '../data/exampleRecipeData.json';
import { vi } from 'vitest';

vi.mock('next/router', () => ({
	useRouter: () => ({
		locale: 'en',
	}),
}));

/**
 * @vitest-environment jsdom
 */

describe('<Recipe />', () => {
	it("should render 'recipe'", () => {
		const { asFragment } = render(
			<Recipe
				title={exampleRecipeData[0].title}
				category={exampleRecipeData[0].field_recipe_category[0].name}
				imageProps={{
					src: exampleRecipeData[0].field_media_image?.uri.url,
					alt: exampleRecipeData[0].thumbnail.resourceIdObjMeta.alt,
				}}
				ingredients={exampleRecipeData[0].field_ingredients}
				instructions={exampleRecipeData[0].field_recipe_instruction.value}
			/>,
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
