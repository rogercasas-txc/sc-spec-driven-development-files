import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders the header title', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1, name: /AgentClinic/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the satirical subtitle', () => {
    render(<App />);
    const subtitle = screen.getByText(/"Because even models need a spa day."/i);
    expect(subtitle).toBeInTheDocument();
  });
});
