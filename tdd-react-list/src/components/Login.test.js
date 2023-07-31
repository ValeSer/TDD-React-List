import { fireEvent, render, screen } from '@testing-library/react'
import { Login } from './Login';

it('username input should be rendered', () => {
  render(<Login/>);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl).toBeInTheDocument();
});

it('password input should be rendered', () => {
  render(<Login/>);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

it('button input should be rendered', () => {
  render(<Login/>);
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeInTheDocument();
});

it('username input should be empty', () => {
  render(<Login/>);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl.value).toBe("");
});

it('password input should be empty', () => {
  render(<Login/>);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe("");
});

it('button input should be disabled', () => {
  render(<Login/>);
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeDisabled();
});

it('error message should not be visible', () => {
  render(<Login />);
  const errorEl = screen.getByTestId('error');
  expect(errorEl).not.toBeVisible()
});

it('username input should change', () => {
  render(<Login/>);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = 'test';

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  expect(usernameInputEl.value).toBe(testValue);
});

it('password input should change', () => {
  render(<Login/>);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = 'test';

  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});