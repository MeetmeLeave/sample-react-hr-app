import expect from 'expect';

import reducer from '../../src/reducers/crewMembers';

describe('crewMembers reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([]);
    });
});