import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NoteForm from "../components/NoteForm";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);

test("container component should have no violations", async() => {
  const {container} = render(<NoteForm />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});

test("component should not display edits when cancelled", async () => {

  render(<NoteForm  />);
  const editButton = screen.getByRole('button', {name: /Edit Notes/i})
  expect(editButton).toBeVisible();
  userEvent.click(editButton);
  userEvent.type(screen.getByRole('textbox', { name: /note input/i }), 'This is an initial note.');
  userEvent.click(screen.getByRole('button', {name: /Cancel/i}));
  expect(screen.getByTestId('notes-content')).not.toHaveTextContent(/initial/i)
  screen.debug();

})
