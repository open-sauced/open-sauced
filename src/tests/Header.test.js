import React from "react";
import {shallow} from "enzyme";
import Header from "../components/Header";

describe("<Header />", () => {
  xit("should render without throwing an error", () => {
    const component = shallow(<Header />);
    expect(component).toBeDefined();
    expect(component.exists()).toBe(true);
  });
});
