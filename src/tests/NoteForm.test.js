import React from "react";
import {shallow} from "enzyme";
import NoteForm from "../containers/NoteForm";
import {data} from "./mocks";

describe("<NoteForm />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<NoteForm data={data} />);
    expect(component).toMatchSnapshot();
  });
});
