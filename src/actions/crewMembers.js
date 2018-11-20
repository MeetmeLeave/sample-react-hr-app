export const crewMembersFetched = (members) => ({
    type: 'CREW_MEMBERS_FETCHED',
    members
});

export const fetchCrewMembersFromRandomUser = url => {
    return function (dispatch) {
        return fetch(url).then(
            response => response.json().then(
                result => dispatch(crewMembersFetched(result.results))
            ));
    };
};

export const setCrewMemberStage = (id, stage) => ({
    type: 'SET_CREW_MEMBER_STAGE',
    id,
    stage
});