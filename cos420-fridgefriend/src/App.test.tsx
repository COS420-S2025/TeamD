import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login page', () => {
  render(<App />);
  const headingElement = screen.getByLabelText(/Password/i);
  expect(headingElement).toBeInTheDocument();

  const emailLabel = screen.getByLabelText(/Email Address/i);
  expect(emailLabel).toBeInTheDocument();
});
