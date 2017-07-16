import React from "react";
import {shallow} from "enzyme";
import Instructions from "../components/Instructions";
import {Link} from "react-router-dom";
import Button from "../styles/Button";

describe("<Instructions />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<Instructions />);
    expect(component).toBeDefined();
    expect(component.exists()).toBe(true);
  });

  it("should render paragraph of instructions if repositories are present", () => {
    const mockData = [
      {
        id: Math.random(),
        name: "Mock Repository A"
      },
      {
        id: Math.random(),
        name: "Mock Repository B"
      }
    ];
    const component = shallow(<Instructions allRepositories={mockData}/>);
    expect(component.instance().props.allRepositories.length).toEqual(2);
    expect(component.containsMatchingElement(<p>Select a repo to see details.</p>)).toBe(true);
  });

  it("should not render a paragraph of instructions if repositories are not present", () => {
    const mockData = [];
    const component = shallow(<Instructions allRepositories={mockData}/>);
    expect(component.instance().props.allRepositories.length).toEqual(0);
    expect(component.containsMatchingElement(<p>Select a repo to see details.</p>)).toBe(false);
  });

  it("should render a link to track first repository if there are no repositories", () => {
    const mockData = [];
    const component = shallow(<Instructions allRepositories={mockData}/>);
    expect(component.instance().props.allRepositories.length).toEqual(0);
    expect(component.containsMatchingElement(
      <Link to="/new" alt="Add A Repo">
        <Button><span className="icon-plus" />Track you first Repository</Button>
      </Link>)).toBe(true);
  });
});
