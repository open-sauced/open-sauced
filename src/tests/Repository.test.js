import React from "react";
import {shallow} from "enzyme";
import Repository from "../components/Repository";
import {MockedProvider} from "react-apollo/lib/test-utils";

describe("<Repository />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(
      <MockedProvider>
        <Repository />
      </MockedProvider>
    );
    expect(component).toBeDefined();
    expect(component.exists()).toBe(true);
  });
});
