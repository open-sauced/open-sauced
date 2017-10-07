import React from "react";
import {shallow} from "enzyme";
import {Repositories} from "../components/Repositories";
import {data, match} from "./mocks";

describe("<Repositories />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(
      <Repositories match={match} data={data} />
    );
    expect(component).toMatchSnapshot();
  });
});
