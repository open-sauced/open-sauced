import React from "react";
import {shallow} from "enzyme";
import Repository from "../containers/Repository";
import {data, match, location} from "./mocks";

describe("<Repository />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<Repository location={location} match={match} data={data} />);
    expect(component).toMatchSnapshot();
  });
});
