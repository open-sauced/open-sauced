import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup} from "@testing-library/react";
import NoteFormSocial from "../components/NoteFormSocial";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);

test("container component should have no violations", async() => {
  const {container} = render(<NoteFormSocial />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});

