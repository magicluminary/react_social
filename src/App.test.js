import React from 'react';
import { render } from '@testing-library/react';
import SocialApp from './App';

test('renders learn react link', () => {
  const { getByText } = render(<SocialApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
