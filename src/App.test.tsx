import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders hero title', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /independence without compromise/i })).toBeInTheDocument();
  });
});
