import { Footer } from '@components/Footer';
import { render } from '@testing-library/react';

const Logo = () => {
	return <span>ExampleLogo</span>;
};

const TestFooter = () => {
	return <Footer Logo={Logo} Link="www.test.com"></Footer>;
};

describe('<Footer />', () => {
	it('should render Footer', () => {
		const { asFragment } = render(<TestFooter />);

		expect(asFragment()).toMatchSnapshot();
	});
});
