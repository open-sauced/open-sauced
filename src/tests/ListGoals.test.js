import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup} from "@testing-library/react";
import ListGoals from "../components/ListGoals";
import {BrowserRouter} from "react-router-dom";
import {data} from "./mocks";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);

const {goals} = data;

test("container component should have no violations", async () => {
  const {container} = render(
    <BrowserRouter>
      <ListGoals goals={goals} />
    </BrowserRouter>,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});
