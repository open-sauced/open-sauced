import React from "react";
import {shallow} from "enzyme";
import {NewRepo} from "../components/NewRepo";
import {data} from "./mocks";

describe("<NewRepo />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<NewRepo data={data} />);
    expect(component).toMatchSnapshot();
  });
});
