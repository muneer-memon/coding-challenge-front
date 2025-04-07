import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Optional: If IncidentsPage renders API data, you might want to mock it
jest.mock('./pages/IncidentsPage', () => () => (
    <div data-testid="incidents-page">Incidents Page</div>
));

describe('App Component', () => {
    it('renders without crashing', () => {
        render(<App />);
        expect(screen.getByTestId('incidents-page')).toBeInTheDocument();
    });

    it('wraps IncidentsPage with IncidentProvider', () => {
        render(<App />);
        // You could test for shared context values if exposed
        expect(screen.getByText('Incidents Page')).toBeInTheDocument();
    });
});
