import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/vitest';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});