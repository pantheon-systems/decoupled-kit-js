import { render } from '@testing-library/react';

import Test from '../../components/test';

/**
 * @vitest-environment jsdom
 */

describe('<Test />', () => {
  it("should render 'test'", () => {
    const { asFragment } = render(<Test greeting="hello" title="world" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
