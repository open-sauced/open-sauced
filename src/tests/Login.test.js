import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup} from "@testing-library/react";
import Login from "../components/Login";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);

test("container component should have no violations", async () => {
  const {container} = render(<Login />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});

test('renders a button "Login with GitHub"', () => {
  const {getByText} = render(<Login />);
  const button = getByText("Login with GitHub");
  expect(button).toHaveTextContent(/Login with GitHub/i);
});

test("renders the logo", () => {
  const {getByAltText} = render(<Login />);
  const button = getByAltText("logo");
  expect(button).toHaveAttribute("src");
});
