import expect from 'expect';

import * as actions from '../../src/actions/visibilityFilters';

describe('visibilityFilters actions', () => {
    describe('setCrewMemberStage', () => {
        it('should create an action to change visibility filters for dashboard', () => {
            const name = 'test';
            const city = 'test2';
            const expectedAction = {
                type: 'SET_VISIBILITY_FILTERS',
                name,
                city
            };
            expect(actions.setVisibilityFilters(name, city)).toEqual(expectedAction);
        });
    });
});