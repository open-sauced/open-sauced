import React from "react";
import App from "../containers/App";
import {data} from "./mocks";
import {Router} from "react-router-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import {createMemoryHistory} from "history";
import "@testing-library/jest-dom/extend-expect";

test("renders without crashing", async() => {
  render(<App />);
});

// TODO: Skipped until React.Suspense + zeit/swr is testable
// https://github.com/open-sauced/open-sauced/discussions/408
test("app login integration", () => {
  const history = createMemoryHistory();
  const {container, rerender} = render(
    <Router history={history}>
      <App />
    </Router>,
  );
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(container.innerHTML).toContain("Login with GitHub");

  const button = screen.getByRole("button", {name: "Login with GitHub"});

  fireEvent.click(button);

  rerender(
    <Router history={history}>
      <App user={data.user} />
    </Router>,
  );

});
