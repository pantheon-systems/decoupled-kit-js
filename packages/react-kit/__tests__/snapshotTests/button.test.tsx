import { Button } from '@components/Button';
import { render } from '@testing-library/react';

describe('<Button />', () => {
	it("should render 'button'", () => {
		const { asFragment } = render(<Button>Hello world</Button>);

		expect(asFragment()).toMatchSnapshot();
	});
	it("should render 'a' with an href", () => {
		const { asFragment } = render(
			<Button Element="a" href="/test" data-test="true">
				Hello world
			</Button>,
		);

		const fragment = asFragment();
		expect(fragment).toMatchSnapshot();
		expect(fragment.querySelector('[href="/test"]')).toBeDefined();
	});
	it('should use the type provided', () => {
		const { asFragment } = render(
			<Button type="secondary">Hello world</Button>,
		);

		const fragment = asFragment();
		expect(fragment).toMatchSnapshot();
		expect(fragment.querySelector('[data-test=true]')).toBeDefined();
	});
});
