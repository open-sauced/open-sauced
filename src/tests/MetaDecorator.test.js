import MetaDecorator from "../components/MetaDecorator";

import * as React from "react";
import renderer from "react-test-renderer";
import { HelmetProvider } from "react-helmet-async";

describe("App", () => {
  it("renders as expected", () => {
    const context = {};
    const tree = renderer
      .create(
        <HelmetProvider context={context}>
          <MetaDecorator />
        </HelmetProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
    expect(context.helmet).toMatchSnapshot();
  });
});