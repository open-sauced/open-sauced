import React from "react";
import {shallow} from "enzyme";
import Repository from "../components/Repository";
import {data, match, location} from "./mocks";

// const mock = {
//   getUserFromJwt: jest.fn().mockReturnValue({id: "123", login: "user"}),
// };

// jest.spyOn(Repository, "getUserFromJwt");

describe("<Repository />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<Repository location={location} match={match} data={data} />);
    expect(component).toMatchSnapshot();
  });

  it("should not display the go to fork button by default", () => {
    const component = shallow(<Repository location={location} match={match} data={data} />);
    const goToForkButton = component.find('[data-test="go-to-fork-button"]');
    expect(goToForkButton.exists()).toBeFalsy();
  });
});
