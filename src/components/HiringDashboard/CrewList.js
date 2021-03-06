import React from 'react';
import PropTypes from 'prop-types';
import { CrewMemberCardContainer } from "../../containers/HiringDashboard/CrewMemberCardContainer";
import styles from './styles.css';

export const CrewList = ({ header, members }) => {
    return (
        <div>
            <div>{header}</div>
            <div className={styles["crew-list"]}>
                {members.map(({ id, name, picture, location, stage }) => {
                    return <CrewMemberCardContainer
                        key={id.key + id.value}
                        id={id}
                        name={name}
                        picture={picture}
                        stage={stage}
                        location={location}/>
                })}
            </div>
        </div>);
};

CrewList.propTypes = {
    header: PropTypes.string,
    members: PropTypes.array
};