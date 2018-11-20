import { combineReducers } from 'redux'
import crewMembers from './crewMembers';
import visibilityFilters from './visibilityFilters';

export default combineReducers({
    crewMembers,
    visibilityFilters
})