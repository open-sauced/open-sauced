import React from "react";
import {shallow} from "enzyme";
import Repositories from "../components/Repositories";
import {MockedProvider} from "react-apollo/lib/test-utils";

describe("<Repositories />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(
      <MockedProvider>
        <Repositories />
      </MockedProvider>
    );
    expect(component).toBeDefined();
    expect(component.exists()).toBe(true);
  });
});
