import React from 'react';
import PropTypes from 'prop-types';
import { PRIORITY_MAPPING } from '../../../constants/priority';
import styles from './styles.module.css';

const PriorityIcon = ({ priority }) => {
    const priorityData = PRIORITY_MAPPING[priority] || PRIORITY_MAPPING[3]; // Default to low

    return (
        <div className={styles.container} data-testid="priority-icon">
            <img
                src={priorityData.icon}
                alt={priorityData.text}
                className={styles.icon}
            />
        </div>
    );
};

PriorityIcon.propTypes = {
    priority: PropTypes.oneOf([1, 2, 3]).isRequired
};

export default PriorityIcon;