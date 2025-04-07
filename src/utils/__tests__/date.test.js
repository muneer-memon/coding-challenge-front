import { formatIncidentDateTime } from '../date';

describe('dateUtils', () => {
    it('formats ISO date string correctly', () => {
        const isoDate = '2022-01-01T12:00:00Z';
        const formatted = formatIncidentDateTime(isoDate);
        expect(formatted).toBe('1/1/2022, 11:00:00 PM');
    });

    it('handles invalid date gracefully', () => {
        const invalidDate = 'invalid-date';
        const formatted = formatIncidentDateTime(invalidDate);
        expect(formatted).toBe('Invalid Date');
    });
});