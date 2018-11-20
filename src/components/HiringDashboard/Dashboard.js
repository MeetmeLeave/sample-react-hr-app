import React from 'react';
import { FilterContainer } from '../../containers/HiringDashboard/FilterContainer';
import { CrewListContainer } from '../../containers/HiringDashboard/CrewListContainer';
import styles from './styles.css';

export const Dashboard = () => {
    return (
        <div>
            <FilterContainer/>
            <div className={styles["crew-list-container"]}>
                <CrewListContainer stage={0}/>
                <CrewListContainer stage={1}/>
                <CrewListContainer stage={2}/>
            </div>
        </div>
    );
}