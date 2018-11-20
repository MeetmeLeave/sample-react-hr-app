import { connect } from 'react-redux';
import { CrewMemberCard } from "../../components/HiringDashboard/CrewMemberCard";
import { setCrewMemberStage } from '../../actions/index';

const mapStateToProps = (
    state,
    { id, name, picture, location, stage }
) => ({
    id,
    name,
    picture,
    stage,
    city: location.city
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onStageChanged: (stage) => dispatch(setCrewMemberStage(ownProps.id, stage))
});

export const CrewMemberCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CrewMemberCard);