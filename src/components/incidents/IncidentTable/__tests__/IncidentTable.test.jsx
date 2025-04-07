import React from 'react';
import { render, screen } from '@testing-library/react';
import IncidentTable from '../index';

const mockIncidents = [
    {
        id: 1,
        name: 'Fire',
        datetime: '2022-01-01T12:00:00Z',
        priority: 1,
        locationId: 'loc1',
        locationName: 'T1 Lobby',
        description: 'Major fire incident'
    },
    {
        id: 2,
        name: 'Medical Emergency',
        datetime: '2022-01-02T12:00:00Z',
        priority: 2,
        locationId: 'loc2',
        locationName: 'T2 Hallway',
        description: 'Patient needs assistance'
    }
];

describe('IncidentTable', () => {
    it('renders table headers correctly', async () => {
        await render(<IncidentTable incidents={mockIncidents} />);

        expect(screen.getByText('Incident Name')).toBeInTheDocument();
        expect(screen.getByText('Date and Time')).toBeInTheDocument();
        expect(screen.getByText('Location Name')).toBeInTheDocument();
    });

    it('renders correct number of incidents', () => {
        render(<IncidentTable incidents={mockIncidents} />);

        const rows = screen.getAllByRole('row');
        // +1 for header row
        expect(rows.length).toBe(mockIncidents.length + 1);
    });

    it('displays incident data correctly', () => {
        render(<IncidentTable incidents={mockIncidents} />);

        expect(screen.getByText('1/2/2022, 11:00:00 PM')).toBeInTheDocument();
        expect(screen.getByText('T2 Hallway')).toBeInTheDocument();
        expect(screen.getByText('Medical Emergency')).toBeInTheDocument();
    });
});