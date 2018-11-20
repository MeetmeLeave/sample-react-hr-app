import { connect } from 'react-redux';
import { setVisibilityFilters } from '../../actions/index';
import { Filter } from '../../components/HiringDashboard/Filter';

const mapStateToProps = (state) => ({
    name: state.visibilityFilters.name,
    city: state.visibilityFilters.city
});

const mapDispatchToProps = (dispatch) => ({
    onFilter: (
        name,
        city
    ) => dispatch(setVisibilityFilters(name || '', city || ''))
});

export const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);