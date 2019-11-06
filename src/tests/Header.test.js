import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup} from "@testing-library/react";
import Header from "../components/Header";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);
import {data} from "./mocks";

test("container component should have no violations", async () => {
  const {container} = render(<Header user={data.user} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});

test("renders the home svg", () => {
  const {getByAltText} = render(<Header user={data.user} />);
  const button = getByAltText("home icon");
  expect(button).toHaveAttribute("src");
});

test("renders the user login", () => {
  const {getByTitle} = render(<Header user={data.user} />);
  const button = getByTitle("login name");
  expect(button).toHaveTextContent("sam");
});
