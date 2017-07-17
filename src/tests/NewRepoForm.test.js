import React from "react";
import {shallow} from "enzyme";
import NewRepoForm from "../components/NewRepoForm";
import {MockedProvider} from "react-apollo/lib/test-utils";

describe("<NewRepoForm />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(
      <MockedProvider>
        <NewRepoForm />
      </MockedProvider>
    );
    expect(component).toBeDefined();
    expect(component.exists()).toBe(true);
  });
});
