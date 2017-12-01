import React from "react";
import {shallow} from "enzyme";
import Count from "../components/Count";

describe("<Count />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<Count />);
    expect(component).toBeDefined();
    expect(component.exists()).toBe(true);
  });

  it("should render with correct prop value in body", () => {
    const component = shallow(<Count count={5} />);
    expect(
      component.containsMatchingElement(
        <p>
          <em>Currently 5 repositories in database</em>
        </p>,
      ),
    ).toBe(true);

    const component2 = shallow(<Count count={257} />);
    expect(
      component2.containsMatchingElement(
        <p>
          <em>Currently 257 repositories in database</em>
        </p>,
      ),
    ).toBe(true);
  });

  it("should not render when the count is 0", () => {
    const component = shallow(<Count count={0} />);
    expect(
      component.containsMatchingElement(
        <p>
          <em>Currently 0 repositories in database</em>
        </p>,
      ),
    ).toBe(false);
  });

  it("should not render when the count is less than 0", () => {
    const component = shallow(<Count count={-50} />);
    expect(
      component.containsMatchingElement(
        <p>
          <em>Currently -50 repositories in database</em>
        </p>,
      ),
    ).toBe(false);
  });

  it("should fail when there is an incorrect prop value in the body", () => {
    const component = shallow(<Count count={30} />);
    expect(
      component.contains(
        <p>
          <em>Currently 30 repositories in database</em>
        </p>,
      ),
    ).toBe(false);
  });
});
