import { useState, useEffect } from 'react';
import { getAllIncidents } from '../services/api/incidents';

const useIncidents = () => {
    const [incidents, setIncidents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const processIncidents = (rawIncidents) => {
            // Remove duplicates
            const uniqueIncidents = Array.from(
                new Map(rawIncidents.map(incident => [incident.id, incident])).values()
            );

            // Sort by priority ascending and date descending
            return uniqueIncidents.sort((a, b) => {
                if (a.priority !== b.priority) {
                    return a.priority - b.priority;
                }
                return new Date(b.datetime) - new Date(a.datetime);
            });
        };

        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getAllIncidents();
                setIncidents(processIncidents(data));
            } catch (err) {
                setError(err.message || 'Failed to fetch incidents');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { incidents, loading, error };
};

export default useIncidents;