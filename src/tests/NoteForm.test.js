import React from "react";
import {shallow} from "enzyme";
import NoteForm from "../components/NoteForm";
import {MockedProvider} from "react-apollo/lib/test-utils";

describe("<NoteForm />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(
      <MockedProvider>
        <NoteForm />
      </MockedProvider>
    );
    expect(component).toBeDefined();
    expect(component.exists()).toBe(true);
  });
});
