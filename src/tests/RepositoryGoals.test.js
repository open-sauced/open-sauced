import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup} from "@testing-library/react";
import RepositoryGoals from "../components/RepositoryGoals";
import AppContext from "../Context";

const contextValue = {goalsId: 1, setGoalsId: jest.fn()};

let realUseContext;

// Setup mock
beforeEach(() => {
  realUseContext = React.useContext;
  React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

jest.mock("../lib/apiGraphQL", () => {
  return {
    fetchGoalsQuery: jest.fn(() => Promise.resolve({data: {gitHub: {viewer: {repository: {issues: {nodes: []}}}}}})),
  };
});

// TODO: Skipped until React.Suspense + zeit/swr is testable
test.skip("renders without crashing", async() => {
  const {container} = render(
    <AppContext.Provider value={contextValue}>
      <RepositoryGoals />
    </AppContext.Provider>,
  );

  expect(container).toBeInTheDocument();

  cleanup();
});
