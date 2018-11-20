import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from './styles.css';

export class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            city: this.props.city
        };

        this.setFilter = this.setFilter.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
    }

    setFilter(event) {
        event.target.name === 'nameFilter'
            ? this.setState({ name: event.target.value })
            : this.setState({ city: event.target.value });
    }

    updateFilter() {
        this.props.onFilter(this.state.name.toLowerCase(), this.state.city.toLowerCase());
    }

    render() {
        return (
            <div className={styles["filter-container"]}>
                <div>First Name: <input name="nameFilter" value={this.state.name}
                                  onChange={this.setFilter}></input>
                </div>
                <div>City: <input name="cityFilter" value={this.state.city}
                                  onChange={this.setFilter}></input></div>
                <div>
                    <button onClick={this.updateFilter}>Filter Crew Members
                    </button>
                </div>
            </div>
        );
    }
}

Filter.propTypes = {
    name: PropTypes.string,
    city: PropTypes.string,
    onFilter: PropTypes.func
};