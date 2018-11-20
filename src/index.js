import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ReduxQuerySync from 'redux-query-sync'

import rootReducer from './reducers';
import { Dashboard } from './components';
import { fetchCrewMembersFromRandomUser } from "./actions";

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

store.dispatch(fetchCrewMembersFromRandomUser('https://randomuser.me/api/?nat=gb&results=5'));

ReduxQuerySync({
    store,
    params: {
        city: {
            selector: state => state.visibilityFilters.city,
            action: city => ({
                type: 'SET_CITY_FILTER',
                city
            }),
        },
        name: {
            selector: state => state.visibilityFilters.name,
            action: name => ({
                type: 'SET_NAME_FILTER',
                name
            }),
        },
    },
    initialTruth: 'location',
});

render(
    <Provider store={store}>
        <Dashboard/>
    </Provider>, document.getElementById('app'));