import { render, screen } from '@testing-library/react'
import { Login } from './Login';

it('username input should be rendered', () => {
  render(<Login/>);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});