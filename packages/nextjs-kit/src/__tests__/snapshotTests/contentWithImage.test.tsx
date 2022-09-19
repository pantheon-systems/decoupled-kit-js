import { render } from '@testing-library/react';
import ContentWithImage from '../../components/contentWithImage';
import examplePostData from '../data/examplePostData.json';
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

describe('<ContentWithImage />', () => {
	it("should render 'contentWithImage'", () => {
		const { asFragment } = render(
			<ContentWithImage
				title={examplePostData[0].title}
				content={examplePostData[0].content}
				imageProps={{
					src: examplePostData[0].featuredImage,
					alt: examplePostData[0].alt,
				}}
				date={examplePostData[0].date}
			/>,
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
