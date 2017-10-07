import React from "react";
import {shallow} from "enzyme";
import {Dropdown} from "../components/Dropdown";
import {data} from "./mocks";

describe("<Dropdown />", () => {
  it("renders completely without crashing", () => {
    const component = shallow(<Dropdown data={data} />);

    expect(component).toMatchSnapshot();
  });
});
