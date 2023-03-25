import React from "react";
import DetailInfo from "../components/DetailInfo";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup} from "@testing-library/react";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);

test("container component should have no violations", async() => {
  const {container} = render(<DetailInfo text="this is some details" icon="star" />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});
