import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup} from "@testing-library/react";
import IssueListItem from "../components/IssueListItem";
import {data} from "./mocks";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);

const {goals} = data;

test("container component should have no violations", async () => {
  const {container} = render(<IssueListItem />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});

