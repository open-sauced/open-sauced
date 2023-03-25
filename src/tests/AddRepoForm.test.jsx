import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup} from "@testing-library/react";
import AddRepoForm from "../components/AddRepoForm";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);

// TODO: Write test for non-empty goals list, importing from ./mocks

test("container component should have no violations", async() => {
  const {container} = render(<AddRepoForm />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});

test("should render a link to track first repository if there are no repositories", () => {
  const {container} = render(<AddRepoForm />);
  expect(container).toHaveTextContent("Add");
});
