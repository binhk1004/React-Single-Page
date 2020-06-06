import {combineReducers} from "redux";
import {reducer as appReducer} from './app/redux';
import {reducer as todoReducer} from './todo/redux';

const reducers = combineReducers({
    app: appReducer,
    todo: todoReducer
});

export default reducers;
