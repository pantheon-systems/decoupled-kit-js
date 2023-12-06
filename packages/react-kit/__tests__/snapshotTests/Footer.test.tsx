import { Footer } from '@components/Footer';
import { render } from '@testing-library/react';

const Logo = () => {
	return <span>ExampleLogo</span>;
};

const Content = {
	title: 'Test Company',
	copy: '© Test 2023',
	builtWith: 'Test.io',
	builtWithLink: 'https://test.io/',
};

const TestFooter = () => {
	return <Footer Logo={Logo} Content={Content}></Footer>;
};

describe('<Footer />', () => {
	it('should render Footer', () => {
		const { asFragment } = render(<TestFooter />);

		expect(asFragment()).toMatchSnapshot();
	});
});
