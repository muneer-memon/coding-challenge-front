import { fetchLocations, fetchIncidentsByLocation } from '../fakeApi';

export const getAllIncidents = async () => {
    try {
        const locations = await fetchLocations();
        const incidentsPromises = locations.map(location =>
            fetchIncidentsByLocation(location.id)
        );

        const incidentsByLocation = await Promise.all(incidentsPromises);

        // Flatten and tag incidents with locationName
        const allIncidents = incidentsByLocation.flatMap((incidents, index) =>
            incidents.map(incident => ({
                ...incident,
                locationName: locations[index].name
            }))
        );

        // Remove duplicate incidents by ID
        const uniqueIncidentsMap = new Map();
        allIncidents.forEach(incident => {
            if (!uniqueIncidentsMap.has(incident.id)) {
                uniqueIncidentsMap.set(incident.id, incident);
            }
        });

        const uniqueIncidents = Array.from(uniqueIncidentsMap.values());

        // Sort by priority (asc), then datetime (desc)
        uniqueIncidents.sort((a, b) => {
            if (a.priority !== b.priority) {
                return a.priority - b.priority;
            }
            return new Date(b.datetime) - new Date(a.datetime);
        });

        return uniqueIncidents;
    } catch (error) {
        console.error('Error in getAllIncidents:', error);
        throw error;
    }
};
