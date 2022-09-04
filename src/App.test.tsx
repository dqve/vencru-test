import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Settings from './pages/Settings'
import SideBar from './components/SideBar'

test('renders sidebar', () => {
  render(<SideBar />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders settings', () => {
  render(<Settings />);
  const linkElement = screen.getByText(/Settings/i);
  expect(linkElement).toBeInTheDocument();
});