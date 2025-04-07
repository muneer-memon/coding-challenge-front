// Wrapper for the provided fake API
// import { getLocations, getIncidentsByLocationId } from '../../js/fake-api.js';
import fakeApi from '../../js/fake-api.js';

const { getLocations, getIncidentsByLocationId } = fakeApi;


export const fetchLocations = async () => {
    try {
        return await getLocations();
    } catch (error) {
        console.error('Error fetching locations:', error);
        throw error;
    }
};

export const fetchIncidentsByLocation = async (locationId) => {
    try {
        return await getIncidentsByLocationId(locationId);
    } catch (error) {
        console.error(`Error fetching incidents for location ${locationId}:`, error);
        throw error;
    }
};