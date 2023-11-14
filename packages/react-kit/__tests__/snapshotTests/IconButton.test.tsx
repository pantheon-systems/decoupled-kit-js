import { IconButton } from '@components/Button';
import { render } from '@testing-library/react';

describe('<IconButton />', () => {
	it('should render an IconButton', () => {
		const { asFragment } = render(
			<IconButton>
				<img src={'/mock/search/icon.svg'} alt="Search" />
			</IconButton>,
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
