import React from 'react';
import PropTypes from 'prop-types';
import PriorityIcon from '../../common/PriorityIcon';
import { formatIncidentDateTime } from '../../../utils/date';
import styles from './styles.module.css';

const IncidentList = ({ incidents }) => {
    return (
        <div className={styles.list} data-testid="incident-list">
            {incidents.map((incident) => (
                <div key={incident.id} className={styles.incidentRow}>
                    <div className={styles.icon}>
                        <PriorityIcon priority={incident.priority} />
                    </div>
                    <div className={styles.item}>
                        <div className={styles.header}>
                            <span>{formatIncidentDateTime(incident.datetime)}</span>
                        </div>
                        <div className={styles.location}>{incident.locationName}</div>
                        <div>
                            <span className={styles.name}>{incident.name}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

IncidentList.propTypes = {
    incidents: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            dateTime: PropTypes.string.isRequired,
            priority: PropTypes.number.isRequired,
            locationName: PropTypes.string.isRequired
        })
    ).isRequired
};

export default IncidentList;