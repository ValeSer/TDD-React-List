import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('', () => {
    render(<App />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(1)
  })
});