import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup} from "@testing-library/react";
import Goals from "../components/Goals";
import AppContext from "../Context";

const contextValue = {goalsId: 1};

let realUseContext;
let useContextMock;
//
// Setup mock
beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});


jest.mock("../lib/apiGraphQL", () => {
  return {
    fetchGoalsQuery: jest.fn(() => Promise.resolve({data: {gitHub: {viewer: {repository: {issues: {}}}}}})),
  };
});

test("renders the a create goals button when repositories are not present", () => {
  useContextMock.mockReturnValue(contextValue);

  const {container} = render(
    <AppContext.Provider value={{goalsId: 1}}>
      <Goals />
    </AppContext.Provider>,
  );
  expect(container).toHaveTextContent("To get saucin' create a goals");
});

test("renders the list of goals when repositories are present", () => {
  const {container} = await act(async () => {
  render(
        <AppContext.Provider value={{goalsId: 1}}>
          <Goals />
        </AppContext.Provider>
  )});
  expect(container).not.toHaveTextContent("To get saucin' create a goals");
});
