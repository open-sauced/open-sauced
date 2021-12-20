import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup, screen} from "@testing-library/react";
import Footer from "../components/Footer";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);

test("container component should have no violations", async() => {
  const {container} = render(<Footer />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});

test('renders a "OneGraph" link', () => {
  render(<Footer />);
  const link = screen.getByText("OneGraph");
  expect(link).toHaveAttribute("href");
});

test('renders a "Netlify" link', () => {
  render(<Footer />);
  const link = screen.getByText("Netlify");
  expect(link).toHaveAttribute("href");
});
