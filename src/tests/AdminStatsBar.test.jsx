import React from "react";
import AdminStatsBar from "../components/AdminStatsBar";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup} from "@testing-library/react";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);

test("container component should have no violations", async() => {
  window.performance.timing = () => 1;
  const {container} = render(<AdminStatsBar />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});
