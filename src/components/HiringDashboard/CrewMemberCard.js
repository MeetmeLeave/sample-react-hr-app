import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { STAGES } from "../../common/magicValues";
import styles from './styles.css';

const backward = '<';
const forward = '>';

export class CrewMemberCard extends Component {
    constructor(props) {
        super(props);

        this.handleMoveForward = this.handleMoveForward.bind(this);
        this.handleMoveBackward = this.handleMoveBackward.bind(this);
    }

    handleMoveForward() {
        this.props.onStageChanged(this.props.stage + 1);
    }

    handleMoveBackward() {
        this.props.onStageChanged(this.props.stage - 1);
    }

    render() {
        const { name, picture, city } = this.props;
        return (
            <div className={styles.card}>
                <div>
                    <img src={picture.thumbnail}/>
                </div>
                <div>{name.title} {name.first} {name.last}</div>
                <div>From: {city}</div>
                <div className={styles["arrows-container"]}>
                    {this.props.stage === 0 ? null :
                        <button className={styles["left-arrow"]}
                                onClick={this.handleMoveBackward}>{backward}</button>}
                    {this.props.stage === STAGES.length - 1 ? null :
                        <button className={styles["right-arrow"]}
                                onClick={this.handleMoveForward}>{forward}</button>}
                </div>
            </div>
        );
    }
}

CrewMemberCard.propTypes = {
    id: PropTypes.object,
    name: PropTypes.object,
    picture: PropTypes.object,
    city: PropTypes.string,
    stage: PropTypes.number,
    onStageChanged: PropTypes.func
};