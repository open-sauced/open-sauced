import React from "react";
import Contributions from "../components/Contributions";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup} from "@testing-library/react";
import {axe, toHaveNoViolations} from "jest-axe";

import {data} from "./mocks";
expect.extend(toHaveNoViolations);

test("container component should have no violations", async() => {
  const {container} = render(<Contributions owner={data.user} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});
