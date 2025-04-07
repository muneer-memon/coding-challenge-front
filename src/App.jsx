import React from 'react';
import { IncidentProvider } from './context/IncidentContext';
import IncidentsPage from './pages/IncidentsPage';
const App = () => {
    return (
        <IncidentProvider>
            <div className="app">
                <IncidentsPage />
            </div>
        </IncidentProvider>
    );
};

export default App;