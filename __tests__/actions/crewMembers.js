import expect from 'expect';

import * as actions from '../../src/actions/crewMembers';

describe('crewMembers actions', () => {
    describe('crewMembersFetched', () => {
        it('should create an action to add fetched members', () => {
            const members = [{ id: 'test' }];
            const expectedAction = {
                type: 'CREW_MEMBERS_FETCHED',
                members
            };
            expect(actions.crewMembersFetched(members)).toEqual(expectedAction);
        });
    });

    describe('setCrewMemberStage', () => {
        it('should create an action to change crew member stage', () => {
            const id = '1';
            const stage = 0;
            const expectedAction = {
                type: 'SET_CREW_MEMBER_STAGE',
                id,
                stage
            };
            expect(actions.setCrewMemberStage(id, stage)).toEqual(expectedAction);
        });
    });
});