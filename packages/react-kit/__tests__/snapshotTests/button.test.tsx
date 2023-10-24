import { render } from '@testing-library/react';
import { DemoButton } from '@components/Button';

describe('<Button />', () => {
	it("should render 'Button'", () => {
		const { asFragment } = render(<DemoButton>Hello world</DemoButton>);

		expect(asFragment()).toMatchSnapshot();
	});
});
