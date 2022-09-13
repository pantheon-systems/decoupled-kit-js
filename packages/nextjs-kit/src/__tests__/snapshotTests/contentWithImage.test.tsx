import { render } from '@testing-library/react';

import ContentWithImage from '../../components/contentWithImage';

/**
 * @vitest-environment jsdom
 */

const post = {
	title: 'Example Post with Image',
	date: '2022-08-04T18:12:19',
	featuredImage:
		'https://dev-decoupled-wordpress-qa.pantheonsite.io/wp-content/uploads/2022/08/pizza.jpeg',
	content:
		'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n' +
		'\n' +
		'\n' +
		'<blockquote class="wp-block-quote"><p>a Quote</p><cite>from QA</cite></blockquote>\n' +
		'\n' +
		'\n' +
		'\n' +
		'<figure class="wp-block-pullquote" style="border-color:#0073a8"><blockquote class="has-text-color has-dark-gray-color"><p>a pull quoteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p><cite>from qa</cite></blockquote></figure>\n' +
		'\n' +
		'\n' +
		'\n' +
		'<p>An<strong>other block</strong></p>\n',
	imgUrl: 'https://dev-decoupled-wordpress-qa.pantheonsite.io',
};

describe('<ContentWithImage />', () => {
	it("should render 'contentWithImage'", () => {
		const { asFragment } = render(
			<ContentWithImage
				title={post.title}
				content={post.content}
				imageProps={{
					priority: true,
					src:
						'https://dev-decoupled-wordpress-qa.pantheonsite.io' + post.imgUrl,
					layout: 'fill',
					objectFit: 'cover',
					alt: 'Featured Image',
				}}
				date={'2022-06-17T15:12:39+00:00'}
				previousPagePath={'/'}
			/>,
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
