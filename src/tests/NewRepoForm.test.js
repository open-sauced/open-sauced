import React from "react";
import {shallow} from "enzyme";
import {NewRepoForm} from "../containers/NewRepoForm";

describe("<NewRepoForm />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<NewRepoForm />);
    expect(component).toMatchSnapshot();
  });
});
