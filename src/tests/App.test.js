import React from "react";
import ReactDOM from "react-dom";
import {act} from "react-dom/test-utils";
import App from "../containers/App";
import {data} from "./mocks";
import {Router} from "react-router-dom";
import {render, fireEvent} from "@testing-library/react";
import {createMemoryHistory} from "history";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", async () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  await act(async () => {
    ReactDOM.render(<App />, div);
  });
  ReactDOM.unmountComponentAtNode(div);
});

test("app login integration", () => {
  const history = createMemoryHistory();
  const handleLogIn = jest.fn();

  const {container, getByText, rerender} = render(
    <Router history={history}>
      <App />
    </Router>,
  );
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(container.innerHTML).toContain("Login with GitHub");
  const button = getByText("Login with GitHub");

  fireEvent.click(button);

  rerender(
    <Router history={history}>
      <App user={data.user} />
    </Router>,
  );

  expect(container.innerHTML).toContain("Create your goal workspace");
});
