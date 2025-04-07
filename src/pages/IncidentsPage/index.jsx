import React from 'react';
import { useIncidents } from '../../context/IncidentContext';
import useWindowSize from '../../hooks/useWindowSize';
import IncidentTable from '../../components/incidents/IncidentTable';
import IncidentList from '../../components/incidents/IncidentList';
import styles from './styles.module.css';

const IncidentsPage = () => {
    const { incidents, loading, error } = useIncidents();
    const { width } = useWindowSize();
    const isMobile = width < 600;

    if (loading) return <div className={styles.loading}>Loading incidents...</div>;
    if (error) return <div className={styles.error}>Error: {error}</div>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Incidents</h1>
            {isMobile ? (
                <IncidentList incidents={incidents} />
            ) : (
                <IncidentTable incidents={incidents} />
            )}
        </div>
    );
};

export default IncidentsPage;