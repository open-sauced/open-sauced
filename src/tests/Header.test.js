import React from "react";
import {shallow} from "enzyme";
import Header from "../components/Header";

describe("<Header />", () => {
  it("should render without throwing an error when a user is provided", () => {
    const user = {email: "test@test.com", id: 123};
    const component = shallow(<Header user={user} />);
    expect(component).toBeDefined();
    expect(component.exists()).toBe(true);
  });
});
