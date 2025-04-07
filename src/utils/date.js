export const formatIncidentDateTime = (dateTimeString) => {
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    return new Date(dateTimeString).toLocaleString(undefined, options);
};