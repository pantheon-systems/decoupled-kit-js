import { Footer } from '@components/Footer';
import { render } from '@testing-library/react';

const Logo = () => {
	return <span>ExampleLogo</span>;
};

const FooterContent = () => {
	return (
		<>
			<div className="rk-text-base rk-font-bold">Test Company</div>

			<div className="rk-pb-8 rk-text-base">© Test 2023</div>

			<div className="rk-pb-16 rk-text-sm">
				Built with{' '}
				<a href="https://test.io" className={'rk-underline'}>
					Test.io
				</a>
			</div>
		</>
	);
};

const TestFooter = () => {
	return (
		<Footer Logo={Logo}>
			<FooterContent />
		</Footer>
	);
};

describe('<Footer />', () => {
	it('should render Footer', () => {
		const { asFragment } = render(<TestFooter />);

		expect(asFragment()).toMatchSnapshot();
	});
});
