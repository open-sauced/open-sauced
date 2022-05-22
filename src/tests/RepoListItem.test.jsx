import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup} from "@testing-library/react";
import RepoListItem from "../components/RepoListItem";
import {BrowserRouter} from "react-router-dom";
import {data} from "./mocks";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);

const {goals} = data;
const goal = goals.nodes[0];

test("container component should have no violations", async() => {
  const {container} = render(
    <BrowserRouter>
      <RepoListItem goal={goal} />
    </BrowserRouter>,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});

