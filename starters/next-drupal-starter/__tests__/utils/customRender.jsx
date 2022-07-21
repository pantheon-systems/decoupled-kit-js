import { render } from "@testing-library/react";
import { DrupalStateWrapper } from "../../lib/drupalStateContext";

const Providers = ({ children }) => {
  return <DrupalStateWrapper>{children}</DrupalStateWrapper>;
};

/** @see https://testing-library.com/docs/react-testing-library/setup#custom-render */
const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
