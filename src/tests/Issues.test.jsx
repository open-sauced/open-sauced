import React from "react";
import Issues from "../components/Issues";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup, screen} from "@testing-library/react";
import {axe, toHaveNoViolations} from "jest-axe";

import {data} from "./mocks";
expect.extend(toHaveNoViolations);

test("container component should have no violations", async() => {
  const {container} = render(<Issues owner={data.user} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});

test("renders loading when there is no owner", () => {
  render(<Issues />);

  const paragraph = screen.getByText(/loading/i);
  expect(paragraph).toBeInTheDocument();
});
