import React from 'react';
import PropTypes from 'prop-types';
import PriorityIcon from '../../common/PriorityIcon';
import { formatIncidentDateTime } from '../../../utils/date';
import styles from './styles.module.css';

const IncidentTable = ({ incidents }) => {
    return (
        <table className={styles.table} data-testid="incident-table">
            <thead>
            <tr>
                <th></th>
                <th>Date and Time</th>
                <th>ID</th>
                <th>Location Name</th>
                <th>Incident Name</th>
            </tr>
            </thead>
            <tbody>
            {incidents.map((incident) => (
                <tr key={incident.id} className={styles.row}>
                    <td>
                        <PriorityIcon priority={incident.priority} />
                    </td>
                    <td>{formatIncidentDateTime(incident.datetime)}</td>
                    <td>{incident.id}</td>
                    <td>{incident.locationName}</td>
                    <td>{incident.name}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

IncidentTable.propTypes = {
    incidents: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            datetime: PropTypes.string.isRequired,
            priority: PropTypes.number.isRequired,
            locationName: PropTypes.string.isRequired
        })
    ).isRequired
};

export default IncidentTable;