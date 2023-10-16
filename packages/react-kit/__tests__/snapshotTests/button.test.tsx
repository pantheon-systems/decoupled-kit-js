import { render } from '@testing-library/react';
import { Button } from '@components/Button';

describe('<Button />', () => {
	it("should render 'Button'", () => {
		const { asFragment } = render(<Button />);

		expect(asFragment()).toMatchSnapshot();
	});
});
