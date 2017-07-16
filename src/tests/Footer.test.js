import React from "react";
import {shallow} from "enzyme";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<Footer />);
    expect(component).toBeDefined();
    expect(component.exists()).toBe(true);
  });
});
