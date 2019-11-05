import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import Card from "../components/Card";
import { axe, toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);

test("container component should have no violations", async () => {
  const { container } = render(<Card />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});

test("renders a non-fitted Card without the fitted prop", () => {
  const { container } = render(<Card />);
  expect(container.firstChild).not.toHaveStyle(`padding: 0`);
});

test("renders a non-fitted Card without the fitted prop", () => {
  const { container } = render(<Card fitted />);
  expect(container.firstChild).toHaveStyle(`padding: 0`);
});
