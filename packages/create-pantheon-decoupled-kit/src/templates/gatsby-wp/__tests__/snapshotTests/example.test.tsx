import { render } from '@testing-library/react';
import Index from '../../src/templates/index';
import { data } from '../data/allWpPost.json';

/**
 * This is an example snapshot test.
 * When the tests run, it will generate a snapshot file
 * if one is not already generated.
 * If it already exists, the component will be rendered and checked
 * against the snapshot.
 * Be sure to update your snapshots with the update-snapshots script
 * if your components markup changes.
 */
describe('<Index />', () => {
	it('should render with posts', () => {
		const { asFragment } = render(
			<Index
				pageContext={{
					posts: data.allWpPost.edges as Queries.WpPostEdge[],
				}}
			/>,
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
