import { render } from '@testing-library/react';
import ContentWithImage from '../../components/contentWithImage';
import examplePostData from '../data/examplePostData.json';
import { vi } from 'vitest';

vi.mock('next/image', () => ({
	__esModule: true,
	default: (props: any) => {
		return <img {...props} />;
	},
}));

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
					priority: true,
					src: examplePostData[0].featuredImage,
					layout: 'fill',
					objectFit: 'cover',
					alt: 'Featured Image',
				}}
				date={examplePostData[0].date}
			/>,
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
