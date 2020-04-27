// Packages
import {connectRouter}      from "connected-react-router";
import {combineReducers}    from 'redux';
//
import courseReducerHandler from './courseReducers';
import rootReducer          from './root';
import authReducerHandler from "./authReducers";


export default (history) => combineReducers({
    root: rootReducer,
    courses: courseReducerHandler,
    auth: authReducerHandler,
    router: connectRouter(history)
})
