const crewMembers = (state = [], action) => {
    switch (action.type) {
        case 'CREW_MEMBERS_FETCHED':
            return action.members.map(member => ({
                ...member,
                stage: 0
            }));
        case 'SET_CREW_MEMBER_STAGE':
            return state.map(member =>
                member.id.name === action.id.name && member.id.value === action.id.value ? {
                    ...member,
                    stage: action.stage
                } : member);
        default:
            return state;
    }
};

export default crewMembers;