import {bindActionCreators} from "redux";

import store from './store';

import {Action as AppAction} from './app/redux';
import {Action as todoAction} from './todo/redux';

const {dispatch} = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const todoActions = bindActionCreators(todoAction.Creators, dispatch);

