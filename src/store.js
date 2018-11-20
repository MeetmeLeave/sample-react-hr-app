import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import {
    fetchCrewMembersFromRandomUser,
    setVisibilityFilters
} from "./actions";

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

// getting the persisted filters state
let { name, city } = JSON.parse(localStorage.getItem('filters') || `{"name":"","city":""}`);

// dispatching initial app state for filters and crew members, before app gets loaded
store.dispatch(setVisibilityFilters(name, city));
store.dispatch(fetchCrewMembersFromRandomUser('https://randomuser.me/api/?nat=gb&results=5'));

store.subscribe(() => {
    let currentFilters = store.getState().visibilityFilters;
    if (name !== currentFilters.name || city !== currentFilters.city) {
        localStorage.setItem('filters', JSON.stringify(currentFilters));
    }
});

export default store;