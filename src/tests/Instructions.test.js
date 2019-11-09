import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup} from "@testing-library/react";
import Instructions from "../components/Instructions";
import {BrowserRouter} from "react-router-dom";
import {data} from "./mocks";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);

const {allRepositories} = data;

test("container component should have no violations", async () => {
  const {container} = render(
    <BrowserRouter>
      <Instructions allRepositories={allRepositories} />
    </BrowserRouter>,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});

test("should render paragraph of instructions if repositories are present", () => {
  const {container} = render(
    <BrowserRouter>
      <Instructions allRepositories={allRepositories} />
    </BrowserRouter>,
  );
  expect(container).toHaveTextContent("Select a repo to see details.");
});

test("should render a link to track first repository if there are no repositories", () => {
  const mockData = [];
  const {container} = render(
    <BrowserRouter>
      <Instructions allRepositories={mockData} />
    </BrowserRouter>,
  );
  expect(container).toHaveTextContent("Track you first Repository");
});
