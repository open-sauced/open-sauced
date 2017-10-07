import React from "react";
import {shallow} from "enzyme";
import {Repository} from "../containers/Repository";
import {data, match} from "./mocks";

describe("<Repository />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<Repository match={match} data={data} />);
    expect(component).toMatchSnapshot();
  });
});
