import React from 'react';
import { render, screen } from '@testing-library/react';


import Apropos from './Apropos';

test('Afficher Apropos avec les vraies données', () => {
 
  render(<Apropos />);

  // Vérifications/assertions
  expect(screen.getByText('Fiabilité')).toBeInTheDocument();
  expect(screen.getByText('Respect')).toBeInTheDocument();
  expect(screen.getByText('Service')).toBeInTheDocument();
  expect(screen.getByText('Sécurité')).toBeInTheDocument();
});
