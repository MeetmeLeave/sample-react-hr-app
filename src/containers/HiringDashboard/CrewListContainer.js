import { connect } from 'react-redux'
import { CrewList } from "../../components/HiringDashboard/CrewList";
import { STAGES } from "../../common/magicValues";

const filterCrewMembers = (crewMembers, stage, { name, city }) => {
    let result = crewMembers.filter(member => member.stage === stage);
    result = name ? result.filter(
        member => member.name.first.indexOf(name) >= 0) : result;
    result = city ? result.filter(
        member => member.location.city.indexOf(city) >= 0) : result;
    return result;
}

const mapStateToProps = (state, ownProps) => ({
    members: filterCrewMembers(state.crewMembers, ownProps.stage, state.visibilityFilters),
    header: STAGES[ownProps.stage]
});

export const CrewListContainer = connect(
    mapStateToProps
)(CrewList);