import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import {render} from '@testing-library/react'
import Login from "../components/Login";


test('renders a button "Login with GitHub"', () => {
  const {getByText} = render(<Login />)
  const button = getByText("Login with GitHub")
  expect(button).toHaveTextContent(/Login with GitHub/i)
})

test('renders the logo', () => {
  const {getByAltText} = render(<Login />)
  const button = getByAltText("logo")
  expect(button).toHaveAttribute("src")
})
