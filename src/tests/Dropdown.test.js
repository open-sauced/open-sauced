import React from "react";
import {shallow} from "enzyme";
import {MockedProvider} from "react-apollo/lib/test-utils";
import DropdownWithData from "../components/Dropdown";

describe("<Dropdown />", () => {
  it("renders completely without crashing", () => {
    const component = shallow(
      <MockedProvider>
        <DropdownWithData />
      </MockedProvider>
    );
    expect(component).toBeDefined();
    expect(component.exists()).toBe(true);
  });
});
