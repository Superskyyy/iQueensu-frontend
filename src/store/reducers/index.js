// Packages
import {connectRouter}      from "connected-react-router";
import {combineReducers}    from 'redux';
import courseReducerHandler from './courseReducers';
//
import rootReducer          from './root';


export default (history) => combineReducers({
  root: rootReducer,
  courses: courseReducerHandler,
  router: connectRouter(history)
})
