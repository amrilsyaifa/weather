import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

test('renders header component', () => {
    render(<Header />);
    const linkElement = screen.getByText(/5-day Forecast/i);
    expect(linkElement).toBeInTheDocument();
});
