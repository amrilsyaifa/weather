import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './index';

test('renders not found page', () => {
    render(<NotFound />);
    const linkElement = screen.getByText(/not found/i);
    expect(linkElement).toBeInTheDocument();
});
