import React from 'react';
import { render, screen } from '@testing-library/react';
import PriorityIcon from '../index';
import { PRIORITY_MAPPING } from '../../../../constants/priority';

// Mock the CSS module
jest.mock('../styles.module.css', () => ({
    container: 'mock-container',
    icon: 'mock-icon',
}));

describe('PriorityIcon', () => {
    it('renders the correct icon and alt text for priority 1 (High)', () => {
        render(<PriorityIcon priority={1} />);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', PRIORITY_MAPPING[1].icon);
        expect(img).toHaveAttribute('alt', PRIORITY_MAPPING[1].text);
    });

    it('renders the correct icon and alt text for priority 2 (Medium)', () => {
        render(<PriorityIcon priority={2} />);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', PRIORITY_MAPPING[2].icon);
        expect(img).toHaveAttribute('alt', PRIORITY_MAPPING[2].text);
    });

    it('renders the correct icon and alt text for priority 3 (Low)', () => {
        render(<PriorityIcon priority={3} />);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', PRIORITY_MAPPING[3].icon);
        expect(img).toHaveAttribute('alt', PRIORITY_MAPPING[3].text);
    });

    it('defaults to priority 3 icon and text if an unknown priority is passed', async () => {
        await render(<PriorityIcon priority={3} />);
        const img = screen.getByRole('img');
        // console.log('zimal', img);
        expect(img).toHaveAttribute('src', PRIORITY_MAPPING[3].icon);
        expect(img).toHaveAttribute('alt', PRIORITY_MAPPING[3].text);
    });

    it('has data-testid on the container for testing hooks', () => {
        render(<PriorityIcon priority={1} />);
        expect(screen.getByTestId('priority-icon')).toBeInTheDocument();
    });
});
