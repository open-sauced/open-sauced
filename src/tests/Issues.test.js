import React from "react";
import {shallow} from "enzyme";
import Issues from "../containers/Issues";

describe("<Issues />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<Issues />);
    expect(component).toBeDefined();
    expect(component.exists()).toBe(true);
  });
});
