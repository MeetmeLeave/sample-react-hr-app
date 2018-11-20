import expect from 'expect';

import reducer from '../../src/reducers/visibilityFilters';

describe('visibilityFilters reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({ city: '', name: '' });
    });
});