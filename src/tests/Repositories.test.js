import React from "react";
import {shallow} from "enzyme";
import Repositories from "../containers/Repositories";

import {LocalStorageMock, data, match} from "./mocks";
import {promisify} from "util";

// set up local storage mock usage in component
global.localStorage = new LocalStorageMock();
localStorage.setItem("currentOpenSaucedUser", JSON.stringify({...data}));

const emptyPromise = promisify(() => {});

describe("<Repositories />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(
      <Repositories createViewer={emptyPromise} match={match} data={data} />,
    );
    expect(component).toMatchSnapshot();
  });
});
