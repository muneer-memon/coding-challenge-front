// getAllIncidents.test.js
import { getAllIncidents } from '../incidents'; // Update with actual path
import { fetchLocations, fetchIncidentsByLocation } from '../../fakeApi'; // Update with actual path

// Mock the external functions
jest.mock('../../fakeApi', () => ({
    fetchLocations: jest.fn(),
    fetchIncidentsByLocation: jest.fn()
}));

describe('getAllIncidents', () => {
    it('should return incidents sorted by priority and datetime, with duplicates removed', async () => {
        // Mock the fetchLocations to return sample locations
        fetchLocations.mockResolvedValue([
            { id: 'airport', name: 'Airport' },
            { id: 't1', name: 'T1' }
        ]);

        // Mock the fetchIncidentsByLocation to return sample incidents for each location
        fetchIncidentsByLocation.mockResolvedValueOnce([
            { id: 1, name: 'Fire', priority: 2, datetime: '2023-01-01T10:00:00Z' },
            { id: 2, name: 'Spill', priority: 1, datetime: '2023-02-01T10:00:00Z' }
        ]).mockResolvedValueOnce([
            { id: 1, name: 'Fire', priority: 2, datetime: '2023-01-01T10:00:00Z' }, // Duplicate
            { id: 3, name: 'Theft', priority: 3, datetime: '2023-03-01T10:00:00Z' }
        ]);

        // Call the function
        const incidents = await getAllIncidents();

        // Assert that the incidents array is sorted by priority and datetime
        expect(incidents).toEqual([
            { id: 2, name: 'Spill', priority: 1, datetime: '2023-02-01T10:00:00Z', locationName: 'Airport' },
            { id: 1, name: 'Fire', priority: 2, datetime: '2023-01-01T10:00:00Z', locationName: 'Airport' },
            { id: 3, name: 'Theft', priority: 3, datetime: '2023-03-01T10:00:00Z', locationName: 'T1' }
        ]);
    });

    it('should handle errors and throw them', async () => {
        // Mock the fetchLocations to throw an error
        fetchLocations.mockRejectedValue(new Error('Failed to fetch locations'));

        // Call the function and assert that it throws an error
        await expect(getAllIncidents()).rejects.toThrow('Failed to fetch locations');
    });

    it('should remove duplicate incidents based on ID', async () => {
        // Mock the fetchLocations to return sample locations
        fetchLocations.mockResolvedValue([
            { id: 'airport', name: 'Airport' }
        ]);

        // Mock the fetchIncidentsByLocation to return incidents with duplicates
        fetchIncidentsByLocation.mockResolvedValueOnce([
            { id: 1, name: 'Fire', priority: 1, datetime: '2023-01-01T10:00:00Z' },
            { id: 1, name: 'Fire', priority: 1, datetime: '2023-01-01T10:00:00Z' } // Duplicate
        ]);

        // Call the function
        const incidents = await getAllIncidents();

        // Assert that duplicates are removed
        expect(incidents).toEqual([
            { id: 1, name: 'Fire', priority: 1, datetime: '2023-01-01T10:00:00Z', locationName: 'Airport' }
        ]);
    });
});
