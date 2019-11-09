import React from "react";
import {shallow} from "enzyme";
import Dashboard from "../containers/Dashboard";

import {LocalStorageMock, data, match} from "./mocks";
import {promisify} from "util";

// set up local storage mock usage in component
global.localStorage = new LocalStorageMock();
localStorage.setItem("currentOpenSaucedUser", JSON.stringify({...data}));

const emptyPromise = promisify(() => {});

describe("<Dashboard />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(
      <Dashboard createViewer={emptyPromise} match={match} data={data} />,
    );
    expect(component).toMatchSnapshot();
  });
});
