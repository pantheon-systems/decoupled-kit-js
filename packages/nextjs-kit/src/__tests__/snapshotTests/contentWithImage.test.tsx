import { render } from '@testing-library/react';
import { ContentWithImage } from '../../components/contentWithImage';
import examplePostData from '../data/examplePostData.json';
import { vi } from 'vitest';

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
		const {
			title,
			content,
			date,
			featuredImage: {
				node: { sourceUrl, altText },
			},
		} = examplePostData[0];

		const { asFragment } = render(
			<ContentWithImage
				title={title}
				content={content}
				date={new Date(date).toLocaleDateString('en-US', { timeZone: 'UTC' })}
				imageProps={{
					src: sourceUrl,
					alt: altText,
				}}
			/>,
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
