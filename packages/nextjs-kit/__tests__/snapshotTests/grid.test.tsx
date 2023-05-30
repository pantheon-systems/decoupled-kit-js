import React from 'react';
import { render } from '@testing-library/react';
import { withGrid } from '../../src/components/grid';
import exampleGridData from '../data/exampleGridData.json';

/**
 * @vitest-environment jsdom
 */

const Gridify = ({ content }): JSX.Element => {
	return (
		<div>
			<h1>{content.title}</h1>
			<p>{content.body}</p>
		</div>
	);
};
const GridifyGrid = withGrid(Gridify);

const Fallback: React.FC = (): JSX.Element => {
	return (
		<>
			<h1>No Data</h1>
		</>
	);
};

describe('<Grid />', () => {
	it("should render 'Grid'", () => {
		const { asFragment } = render(<GridifyGrid data={exampleGridData} />);

		expect(asFragment()).toMatchSnapshot();
	});
	it("should render a 'Grid' with 4 columns", () => {
		const { asFragment } = render(
			<GridifyGrid data={exampleGridData} cols={4} />,
		);

		expect(asFragment()).toMatchSnapshot();
	});
	it("should render FallbackComponent instead of 'Grid'", () => {
		const { asFragment } = render(<GridifyGrid FallbackComponent={Fallback} />);

		expect(asFragment()).toMatchSnapshot();
	});
});
