import React from 'react';
import { render, screen } from '@testing-library/react';
import { ClassApp } from './App';

test('renders learn react link', () => {
  render(<ClassApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
