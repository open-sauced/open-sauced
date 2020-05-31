import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup} from "@testing-library/react";
import Nav from "../components/Nav";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);

jest.mock('react-router-dom', () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
    useHistory: jest.fn(),
  };
});

test("container component should have no violations", async () => {
  const {container} = render(<Nav />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});

test('renders a "Login" link', () => {
  const {getByText} = render(<Nav />);
  const link = getByText("Login");
  expect(link).toHaveAttribute("alt");
});

test('renders a "Logout" link with user present', () => {
  const {getByText} = render(<Nav user={{login: "me"}} />);
  const link = getByText("Logout");
  expect(link).toHaveAttribute("alt");
});
