import React from 'react';
import { render, screen } from '@testing-library/react';
import IncidentsPage from '../index';
import { useIncidents } from '../../../context/IncidentContext';
import useWindowSize from '../../../hooks/useWindowSize';

// Mock the components and hooks
jest.mock('../../../context/IncidentContext');
jest.mock('../../../hooks/useWindowSize');

describe('IncidentsPage', () => {

    it('renders IncidentList for mobile screen size', () => {
        // Mock the useIncidents hook to return incidents data
        useIncidents.mockReturnValue({
            incidents: [{ id: 1, name: 'Test Incident', datetime: '2022-01-01T00:00:00Z', priority: 1 }],
            loading: false,
            error: null,
        });

        // Mock the useWindowSize hook to simulate a mobile screen size
        useWindowSize.mockReturnValue({ width: 500 });

        render(<IncidentsPage />);

        // Assert that IncidentList is rendered for mobile view
        expect(screen.getByTestId('incident-list')).toBeInTheDocument();
    });

    it('renders IncidentTable for desktop screen size', () => {
        // Mock the useIncidents hook to return incidents data
        useIncidents.mockReturnValue({
            incidents: [{ id: 1, name: 'Test Incident', datetime: '2022-01-01T00:00:00Z', priority: 1 }],
            loading: false,
            error: null,
        });

        // Mock the useWindowSize hook to simulate a desktop screen size
        useWindowSize.mockReturnValue({ width: 800 });

        render(<IncidentsPage />);

        // Assert that IncidentTable is rendered for desktop view
        expect(screen.getByTestId('incident-table')).toBeInTheDocument();
    });
});
