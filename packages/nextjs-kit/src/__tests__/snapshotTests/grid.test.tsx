import { render } from '@testing-library/react';

import { withGrid } from '../../components/grid';
import exampleGridData from '../data/exampleGridData.json';

/**
 * @vitest-environment jsdom
 */

interface GridifyProps {
	content: {
		title: string;
		body: string;
	};
}

const Gridify: React.FC<GridifyProps> = ({
	content,
}: GridifyProps): JSX.Element => {
	return (
		<div>
			<h1>{content.title}</h1>
			<p>{content.body}</p>
		</div>
	);
};
const GridifyGrid = withGrid(Gridify);

describe('<Grid />', () => {
	it("should render 'Grid'", () => {
		const { asFragment } = render(
			<div>
				<GridifyGrid data={exampleGridData} contentType="grid data" />,
			</div>,
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
