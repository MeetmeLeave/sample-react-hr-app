import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Dashboard } from './components';
import store from './store';

render(
    <Provider store={store}>
        <Dashboard/>
    </Provider>, document.getElementById('app'));