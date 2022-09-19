import { render } from '@testing-library/react';
import Recipe from '../../components/recipe';
import exampleRecipeData from '../data/exampleRecipeData.json';
import { vi } from 'vitest';

vi.mock('../../__mocks__/next/image');

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
				category={exampleRecipeData[0].category}
				imageProps={{
					priority: true,
					src: exampleRecipeData[0].imgSrc,
					layout: 'fill',
					objectFit: 'cover',
				}}
				ingredients={exampleRecipeData[0].ingredients}
				instructions={exampleRecipeData[0].instructions}
			/>,
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
