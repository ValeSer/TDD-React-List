import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Login } from './Login';
import { act } from 'react-dom/test-utils'

jest.mock('axios', () => ({
  __esModule:true,

  default:{
    get: () => ({
      data:{id:1, name:"John"}
    })
  }
}))

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

it('button should be disabled', () => {
  render(<Login/>);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});

it('loading should not be rendered', () => {
  render(<Login/>);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).not.toHaveTextContent(/please wait/i);
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

it('button should not be disabled when input exists', () => {
  render(<Login/>);
  const buttonInputEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = 'test';

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });

  expect(buttonInputEl).not.toBeDisabled();
});

it('loading should be rendered when click', async () => {
  render(<Login/>);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = 'test';

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  await waitFor(() => expect(buttonEl).toHaveTextContent(/please wait/i));
});

it('loading should not be visible after fetching', async () => {
  render(<Login/>);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = 'test';

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
});