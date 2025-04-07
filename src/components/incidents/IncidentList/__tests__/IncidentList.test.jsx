import React from 'react';
import { render, screen } from '@testing-library/react';
import * as dateUtils from '../../../../utils/date';
import IncidentList from "../index";


// Mock date formatting function
jest.mock('../../../../utils/date', () => ({
    formatIncidentDateTime: jest.fn(),
}));

// Mock PriorityIcon to simplify rendering
jest.mock('../../../common/PriorityIcon', () => () => <div data-testid="priority-icon" />);

describe('IncidentList', () => {
    const mockIncidents = [
        {
            id: 1,
            name: 'Incident 1',
            datetime: '2023-01-01T10:00:00Z',
            priority: 1,
            locationName: 'Location A'
        },
        {
            id: 2,
            name: 'Incident 2',
            datetime: '2023-01-02T12:00:00Z',
            priority: 2,
            locationName: 'Location B'
        }
    ];

    beforeEach(() => {
        dateUtils.formatIncidentDateTime.mockImplementation(date => `Formatted: ${date}`);
    });

    it('renders incident list container', async () => {
        await render(<IncidentList incidents={mockIncidents} />);
        expect(screen.getByTestId('incident-list')).toBeInTheDocument();
    });
    //
    it('renders all incidents with required fields', () => {
        render(<IncidentList incidents={mockIncidents} />);

        mockIncidents.forEach(incident => {
            expect(screen.getByText(`Formatted: ${incident.datetime}`)).toBeInTheDocument();
            expect(screen.getByText(incident.name)).toBeInTheDocument();
            expect(screen.getByText(incident.locationName)).toBeInTheDocument();
        });

        // Icons
        const icons = screen.getAllByTestId('priority-icon');
        expect(icons).toHaveLength(mockIncidents.length);
    });
});
