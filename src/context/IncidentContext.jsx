import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { getAllIncidents } from '../services/api/incidents';

const IncidentContext = createContext();

export const IncidentProvider = ({ children }) => {
    const [incidents, setIncidents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchIncidents = async () => {
        try {
            setLoading(true);
            const data = await getAllIncidents();

            // Process and sort incidents
            const uniqueIncidents = Array.from(
                new Map(data.map(incident => [incident.id, incident])).values()
            );

            const sortedIncidents = uniqueIncidents.sort((a, b) => {
                if (a.priority !== b.priority) return a.priority - b.priority;
                return new Date(b.datetime) - new Date(a.datetime);
            });

            setIncidents(sortedIncidents);
        } catch (err) {
            setError(err.message || 'Failed to fetch incidents');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchIncidents();
    }, []);

    const value = {
        incidents,
        loading,
        error,
        refresh: () => {
            setLoading(true);
            setError(null);
            fetchIncidents();
        }
    };

    return (
        <IncidentContext.Provider value={value}>
            {children}
        </IncidentContext.Provider>
    );
};

export const useIncidents = () => {
    const context = useContext(IncidentContext);
    if (context === undefined) {
        throw new Error('useIncidents must be used within an IncidentProvider');
    }
    return context;
};