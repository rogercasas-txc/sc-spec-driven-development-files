import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders the branding title', () => {
    render(<App />);
    const titles = screen.getAllByText(/AgentClinic/i);
    expect(titles.length).toBeGreaterThan(0);
  });

  it('renders the main navigation', () => {
    render(<App />);
    const catalogLinks = screen.getAllByText(/Medical Catalog/i);
    expect(catalogLinks.length).toBeGreaterThan(0);
  });
});
