import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup, screen} from "@testing-library/react";
import DashboardFooter from "../components/DashboardFooter";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);


test("container component should have no violations", async() => {
  const {container} = render(<DashboardFooter />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});

test("renders the logo", () => {
  render(<DashboardFooter />);
  const button = screen.getByAltText("sauced logo");
  expect(button).toHaveAttribute("src");
});
