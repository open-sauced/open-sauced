import React from "react";
import {shallow} from "enzyme";
import NewRepo from "../components/NewRepo";
import {MockedProvider} from "react-apollo/lib/test-utils";

describe("<NewRepo />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(
      <MockedProvider>
        <NewRepo />
      </MockedProvider>
    );
    expect(component).toBeDefined();
    expect(component.exists()).toBe(true);
  });
});
