import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup} from "@testing-library/react";
import DropdownMenu from "../components/DropdownMenu";
import {data} from "./mocks";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);

const {user} = data;
test("container component should have no violations", async() => {
  const {container} = render(<DropdownMenu user={user} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});

