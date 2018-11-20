import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { STAGES } from "../../common/magicValues";

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
            <div>
                <div>
                    <img src={picture.thumbnail}/>
                </div>
                <div>{name.title} {name.first} {name.last}</div>
                <div>From: {city}</div>
                <div>
                    {this.props.stage === 0 ? null :
                        <button
                            onClick={this.handleMoveBackward}>{backward}</button>}
                    {this.props.stage === STAGES.length - 1 ? null :
                        <button
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