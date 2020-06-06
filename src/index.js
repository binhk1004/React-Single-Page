import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import store from './redux/store';
import './scss/style.scss';
import HISTORY from "./helpers/HistoryHelper"


ReactDOM.render(
    <Provider store={store}>
        <Router history={HISTORY}>
            <App/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);
