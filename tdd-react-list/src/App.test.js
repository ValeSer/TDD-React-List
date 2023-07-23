import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders one item', () => {
    render(<App />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toEqual(1)
  })
});